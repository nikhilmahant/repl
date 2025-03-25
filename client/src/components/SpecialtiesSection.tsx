import { CircleCheck } from "lucide-react";

export default function SpecialtiesSection() {
  const specialties = [
    "Depression and Mood Disorders",
    "Anxiety Disorders",
    "Bipolar Disorder",
    "Post-Traumatic Stress Disorder (PTSD)",
    "Substance Use Disorders",
    "Alcohol Addiction",
    "Opioid Addiction",
    "Prescription Drug Abuse",
    "Dual Diagnosis Treatment",
    "Gaming and Internet Addiction",
    "Addiction in Adolescents",
    "Executive Burnout"
  ];

  return (
    <section id="specialties" className="py-20 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-200 font-medium">Specialties</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Areas of Expertise</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Dr. Huddar specializes in treating a wide range of mental health conditions and addiction disorders.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 max-w-5xl mx-auto">
          {specialties.map((specialty, index) => (
            <div key={index} className="flex items-center">
              <CircleCheck className="text-blue-200 mr-2 flex-shrink-0" size={20} />
              <span className="text-lg">{specialty}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-blue-100 mb-6">
            Whether you're struggling with a mental health condition, addiction, or both, 
            Dr. Huddar provides compassionate and effective treatment tailored to your unique needs.
          </p>
          <p className="text-blue-100">
            Dr. Huddar stays up-to-date with the latest advancements in psychiatric care 
            to offer you the most effective evidence-based treatments available.
          </p>
        </div>
      </div>
    </section>
  );
}