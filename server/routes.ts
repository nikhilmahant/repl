import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Add a waitlist entry
  app.post("/api/waitlist", async (req: Request, res: Response) => {
    try {
      const entry = insertWaitlistSchema.parse(req.body);
      
      // Check if email already exists
      const existingEntry = await storage.getWaitlistEntryByEmail(entry.email);
      if (existingEntry) {
        return res.status(400).json({ message: "Email is already on the waitlist" });
      }
      
      // Create new waitlist entry
      const newEntry = await storage.createWaitlistEntry(entry);
      
      return res.status(201).json({ 
        message: "Successfully added to waitlist", 
        entryId: newEntry.id 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ message: validationError.message });
      }
      
      console.error("Error adding waitlist entry:", error);
      return res.status(500).json({ message: "Failed to add to waitlist" });
    }
  });

  // Get all waitlist entries
  app.get("/api/waitlist", async (_req: Request, res: Response) => {
    try {
      const entries = await storage.getAllWaitlistEntries();
      return res.status(200).json({ entries, count: entries.length });
    } catch (error) {
      console.error("Error retrieving waitlist entries:", error);
      return res.status(500).json({ message: "Failed to retrieve waitlist entries" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
