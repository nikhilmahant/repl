import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const faqItems: FAQItem[] = [
    {
      question: "What conditions does Dr. Huddar treat?",
      answer: "Dr. Huddar specializes in treating a wide range of mental health conditions including depression, anxiety disorders, bipolar disorder, PTSD, and various addiction disorders including substance use disorders, alcohol addiction, and behavioral addictions."
    },
    {
      question: "How long does a typical appointment last?",
      answer: "Initial consultations typically last 60 minutes to allow for a comprehensive evaluation. Follow-up appointments are usually 30 minutes for medication management and 45-50 minutes for therapy sessions."
    },
    {
      question: "Do I need a referral to see Dr. Huddar?",
      answer: "No, a referral is not required to schedule an appointment with Dr. Huddar. You can directly contact our office to book a consultation."
    },
    {
      question: "What should I expect during my first visit?",
      answer: "During your initial consultation, Dr. Huddar will conduct a comprehensive psychiatric evaluation to understand your symptoms, medical history, and concerns. This helps in developing a personalized treatment plan tailored to your specific needs."
    },
    {
      question: "Does Dr. Huddar prescribe medication?",
      answer: "Yes, as a psychiatrist, Dr. Huddar is qualified to prescribe medications when appropriate. He takes a thoughtful approach to medication management, carefully considering the benefits and potential side effects for each individual patient."
    },
    {
      question: "Are telepsychiatry/virtual appointments available?",
      answer: "Yes, Dr. Huddar offers telepsychiatry services for patients who cannot visit in person. Virtual appointments are conducted through a secure and private platform to ensure confidentiality."
    },
    {
      question: "Is my information kept confidential?",
      answer: "Absolutely. Dr. Huddar adheres strictly to patient confidentiality laws and ethical guidelines. Your personal information and medical records are kept private and secure."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-700 font-medium">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Find answers to common questions about Dr. Huddar's practice and services.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-200 py-2">
                <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}