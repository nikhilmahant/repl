import { Award, GraduationCap, Briefcase } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-700 font-medium">About</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Dr. Sudheendra Huddar</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            A compassionate psychiatrist with extensive experience in treating various 
            mental health conditions and addiction disorders.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-slate-600 mb-6 leading-relaxed">
                Dr. Sudheendra Huddar is a board-certified psychiatrist specializing in addiction psychiatry. 
                With over 15 years of clinical experience, he has helped thousands of patients overcome 
                mental health challenges and addiction issues.
              </p>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                Dr. Huddar takes a holistic approach to psychiatry, addressing not just the symptoms but 
                the underlying causes of mental health conditions. He combines evidence-based treatments 
                with compassionate care to help his patients achieve lasting recovery and improved quality of life.
              </p>
              
              <p className="text-slate-600 leading-relaxed">
                His expertise includes treating depression, anxiety disorders, bipolar disorder, 
                PTSD, substance use disorders, and dual diagnosis conditions.
              </p>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-6 text-blue-700">Education & Credentials</h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4">
                    <GraduationCap className="text-blue-600 h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Medical Degree</h4>
                    <p className="text-slate-600">All India Institute of Medical Sciences, New Delhi</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <Briefcase className="text-blue-600 h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Psychiatry Residency</h4>
                    <p className="text-slate-600">National Institute of Mental Health and Neurosciences (NIMHANS), Bangalore</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <Award className="text-blue-600 h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Board Certification</h4>
                    <p className="text-slate-600">Indian Psychiatric Society</p>
                    <p className="text-slate-600">Addiction Psychiatry Specialist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}