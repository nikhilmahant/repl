import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-6">Dr. Sudheendra Huddar</h3>
            <p className="mb-4 text-blue-100">
              Providing compassionate and effective psychiatric care for those dealing with mental health challenges and addiction.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-blue-200 hover:text-white">About Dr. Huddar</a>
              </li>
              <li>
                <a href="#services" className="text-blue-200 hover:text-white">Services</a>
              </li>
              <li>
                <a href="#specialties" className="text-blue-200 hover:text-white">Specialties</a>
              </li>
              <li>
                <a href="#testimonials" className="text-blue-200 hover:text-white">Testimonials</a>
              </li>
              <li>
                <a href="#faq" className="text-blue-200 hover:text-white">FAQ</a>
              </li>
              <li>
                <a href="#contact" className="text-blue-200 hover:text-white">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="mr-3 text-blue-300 flex-shrink-0 mt-1" size={18} />
                <span className="text-blue-100">contact@drhuddar.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="mr-3 text-blue-300 flex-shrink-0 mt-1" size={18} />
                <span className="text-blue-100">+91 1234567890</span>
              </li>
              <li className="text-blue-100">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 text-blue-300 flex-shrink-0 mt-1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <div>
                    <p>123 Medical Center Drive</p>
                    <p>Bangalore, Karnataka 560001</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Office Hours</h3>
            <ul className="space-y-2 text-blue-100">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 1:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
            <div className="mt-6">
              <Button variant="outline" className="bg-transparent text-white border-white hover:bg-blue-800">
                <a href="#appointment">Book Appointment</a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-200">
          <p>&copy; {currentYear} Dr. Sudheendra Huddar. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4 text-sm">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}