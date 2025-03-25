import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Adjust for header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-blue-700 font-bold text-2xl">Dr. Sudheendra Huddar</div>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <a 
                href="#about" 
                onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} 
                className="text-slate-600 hover:text-blue-700 transition"
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#services" 
                onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} 
                className="text-slate-600 hover:text-blue-700 transition"
              >
                Services
              </a>
            </li>
            <li>
              <a 
                href="#specialties" 
                onClick={(e) => { e.preventDefault(); scrollToSection('specialties'); }} 
                className="text-slate-600 hover:text-blue-700 transition"
              >
                Specialties
              </a>
            </li>
            <li>
              <a 
                href="#how-it-works" 
                onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }} 
                className="text-slate-600 hover:text-blue-700 transition"
              >
                Process
              </a>
            </li>
            <li>
              <a 
                href="#testimonials" 
                onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }} 
                className="text-slate-600 hover:text-blue-700 transition"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a 
                href="#waitlist" 
                onClick={(e) => { e.preventDefault(); scrollToSection('waitlist'); }} 
                className="text-slate-600 hover:text-blue-700 transition"
              >
                Join Waitlist
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} 
                className="text-slate-600 hover:text-blue-700 transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        
        <div className="hidden md:block">
          <Button 
            onClick={() => scrollToSection('appointment')}
            className="bg-blue-700 hover:bg-blue-800"
          >
            Book Appointment
          </Button>
        </div>
        
        <button className="md:hidden" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} 
                  className="block text-slate-600 hover:text-blue-700 transition py-2"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} 
                  className="block text-slate-600 hover:text-blue-700 transition py-2"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#specialties" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('specialties'); }} 
                  className="block text-slate-600 hover:text-blue-700 transition py-2"
                >
                  Specialties
                </a>
              </li>
              <li>
                <a 
                  href="#how-it-works" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }} 
                  className="block text-slate-600 hover:text-blue-700 transition py-2"
                >
                  Process
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }} 
                  className="block text-slate-600 hover:text-blue-700 transition py-2"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a 
                  href="#waitlist" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('waitlist'); }} 
                  className="block text-slate-600 hover:text-blue-700 transition py-2"
                >
                  Join Waitlist
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} 
                  className="block text-slate-600 hover:text-blue-700 transition py-2"
                >
                  Contact
                </a>
              </li>
              <li>
                <Button
                  className="w-full bg-blue-700 hover:bg-blue-800"
                  onClick={() => scrollToSection('appointment')}
                >
                  Book Appointment
                </Button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}