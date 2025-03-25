import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import AppointmentSection from "@/components/AppointmentSection";
import WaitlistSection from "@/components/WaitlistSection";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-blue-50 text-slate-800">
      <Header />
      <main className="pt-24 flex-grow">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SpecialtiesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FAQSection />
        <WaitlistSection />
        <ContactSection />
        <AppointmentSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}