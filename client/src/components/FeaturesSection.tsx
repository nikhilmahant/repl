import { Bolt, Lock, Users, LineChart, Sparkles, Smartphone } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureProps) {
  return (
    <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 hover:shadow-md transition">
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-600">
        {description}
      </p>
    </div>
  );
}

export default function FeaturesSection() {
  const features = [
    {
      icon: <Bolt className="text-primary text-xl" />,
      title: "Lightning Fast",
      description: "Experience exceptional speed with our optimized platform, designed to make your workflow smoother than ever."
    },
    {
      icon: <Lock className="text-primary text-xl" />,
      title: "Bank-Level Security",
      description: "Your data is protected with enterprise-grade encryption and security measures that exceed industry standards."
    },
    {
      icon: <Users className="text-primary text-xl" />,
      title: "Seamless Collaboration",
      description: "Work together with your team in real-time, without the usual friction points that slow you down."
    },
    {
      icon: <LineChart className="text-primary text-xl" />,
      title: "Powerful Analytics",
      description: "Gain insights from comprehensive analytics that help you make data-driven decisions."
    },
    {
      icon: <Sparkles className="text-primary text-xl" />,
      title: "AI-Powered",
      description: "Leverage the power of artificial intelligence to automate repetitive tasks and boost productivity."
    },
    {
      icon: <Smartphone className="text-primary text-xl" />,
      title: "Cross-Platform",
      description: "Access your work from any device with our seamless cross-platform experience."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium">Features</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Why You'll Love Our Product</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We've designed our platform with your needs in mind. Here's what makes our product stand out from the competition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
