import { CheckCircle } from "lucide-react";

interface StepProps {
  number: number;
  title: string;
  description: string;
}

function Step({ number, title, description }: StepProps) {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
      <div className="flex-shrink-0 bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  );
}

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-700 font-medium">Process</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">How Treatment Works</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Understanding what to expect when seeking psychiatric care can help ease any concerns about the process.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <Step 
              number={1} 
              title="Initial Consultation" 
              description="Your journey begins with a comprehensive initial assessment where Dr. Huddar will evaluate your specific situation, medical history, and concerns to understand your needs better."
            />
            
            <Step 
              number={2} 
              title="Personalized Treatment Plan" 
              description="Based on your assessment, Dr. Huddar develops a customized treatment plan that may include therapy, medication management, lifestyle changes, or a combination of approaches."
            />
            
            <Step 
              number={3} 
              title="Ongoing Treatment & Support" 
              description="Regular follow-up appointments help monitor your progress, adjust treatments as needed, and provide continuous support throughout your recovery journey."
            />
            
            <Step 
              number={4} 
              title="Progress Evaluation" 
              description="Dr. Huddar regularly evaluates your progress, making adjustments to your treatment plan as needed to ensure the best possible outcomes."
            />
          </div>
          
          <div className="mt-16 bg-blue-50 p-8 rounded-lg border border-blue-100">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">Our Commitment to Your Care</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle className="text-blue-700 mr-3 mt-1 flex-shrink-0" size={20} />
                <p className="text-slate-700">Compassionate, non-judgmental care in a safe environment</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-blue-700 mr-3 mt-1 flex-shrink-0" size={20} />
                <p className="text-slate-700">Evidence-based treatments tailored to your unique needs</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-blue-700 mr-3 mt-1 flex-shrink-0" size={20} />
                <p className="text-slate-700">Collaborative approach that respects your input and preferences</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-blue-700 mr-3 mt-1 flex-shrink-0" size={20} />
                <p className="text-slate-700">Ongoing support throughout your mental health journey</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}