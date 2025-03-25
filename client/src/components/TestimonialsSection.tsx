import { Star, StarHalf } from "lucide-react";

interface Testimonial {
  rating: number;
  text: string;
  name: string;
  title: string;
}

function TestimonialCard({ rating, text, name, title }: Testimonial) {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="fill-amber-400 text-amber-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="fill-amber-400 text-amber-400" />);
    }
    
    return stars;
  };

  return (
    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 hover:shadow-md transition">
      <div className="flex items-center mb-4">
        <div className="text-amber-400 flex">
          {renderStars(rating)}
        </div>
      </div>
      <p className="text-slate-600 mb-6 italic">
        "{text}"
      </p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-blue-200 mr-4 flex items-center justify-center text-blue-700 font-bold">
          {name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-slate-500">{title}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      rating: 5,
      text: "Dr. Huddar's approach to treating my anxiety has been life-changing. He took the time to understand my unique situation and develop a treatment plan that worked for me. His compassionate care made all the difference.",
      name: "Priya S.",
      title: "Anxiety Patient"
    },
    {
      rating: 5,
      text: "After struggling with addiction for years, I found real help with Dr. Huddar. His expertise in addiction psychiatry and personalized treatment approach helped me reclaim my life. I'm forever grateful.",
      name: "Rahul M.",
      title: "Recovery Patient"
    },
    {
      rating: 4.5,
      text: "My family member has been seeing Dr. Huddar for depression, and the improvement has been remarkable. Dr. Huddar is not only knowledgeable but also genuinely cares about his patients' well-being.",
      name: "Ananya K.",
      title: "Family Member"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-700 font-medium">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">What Patients Are Saying</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Read about the experiences of patients who have received care from Dr. Huddar.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              rating={testimonial.rating}
              text={testimonial.text}
              name={testimonial.name}
              title={testimonial.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}