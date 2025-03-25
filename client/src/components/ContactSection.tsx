import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-700 font-medium">Contact</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Get in Touch</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Have questions or want to schedule an appointment? Contact us using the information below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold mb-6 text-blue-700">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4 text-blue-700">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-slate-600">+91 1234567890</p>
                  <p className="text-sm text-slate-500 mt-1">Available during office hours</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4 text-blue-700">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-slate-600">contact@drhuddar.com</p>
                  <p className="text-sm text-slate-500 mt-1">We'll respond as soon as possible</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4 text-blue-700">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Office Address</h4>
                  <p className="text-slate-600">123 Medical Center Drive</p>
                  <p className="text-slate-600">Bangalore, Karnataka 560001</p>
                  <p className="text-sm text-slate-500 mt-1">Near City Hospital</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4 text-blue-700">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Office Hours</h4>
                  <p className="text-slate-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p className="text-slate-600">Saturday: 9:00 AM - 1:00 PM</p>
                  <p className="text-slate-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9976502456173!2d77.59596881482186!3d12.971598990855843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167e6117f3fd%3A0x1bb7944c76c4a1a3!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1616679354283!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              loading="lazy"
              title="Office Location"
              className="h-full w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}