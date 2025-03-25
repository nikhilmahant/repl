import { Brain, Heart, Users, Pill, Clock, Video } from "lucide-react";

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-600 hover:shadow-lg transition duration-300">
      <div className="flex items-center mb-4">
        <div className="bg-blue-100 p-3 rounded-lg mr-4 text-blue-700">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-slate-600">{description}</p>
    </div>
  );
}

export default function ServicesSection() {
  const services = [
    {
      icon: <Brain size={24} />,
      title: "Psychiatric Evaluation",
      description: "Comprehensive assessment of mental health conditions to develop personalized treatment plans."
    },
    {
      icon: <Pill size={24} />,
      title: "Medication Management",
      description: "Careful prescription and monitoring of medications to alleviate symptoms and improve quality of life."
    },
    {
      icon: <Heart size={24} />,
      title: "Addiction Treatment",
      description: "Evidence-based approaches to treating substance use disorders and behavioral addictions."
    },
    {
      icon: <Users size={24} />,
      title: "Family Therapy",
      description: "Involving loved ones in the treatment process to strengthen support systems and improve outcomes."
    },
    {
      icon: <Clock size={24} />,
      title: "Follow-up Care",
      description: "Ongoing support and monitoring to ensure continued progress and prevent relapse."
    },
    {
      icon: <Video size={24} />,
      title: "Telepsychiatry",
      description: "Convenient online consultations for patients who cannot visit in person."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-700 font-medium">Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Our Professional Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Dr. Huddar offers a wide range of psychiatric services tailored to meet your individual needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}