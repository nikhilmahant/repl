import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="bg-gradient-to-r from-blue-700 to-blue-500 py-20 md:py-32 text-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Dr. Sudheendra Huddar
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-blue-100">
            Psychiatrist & Addiction Specialist
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            Compassionate care for mental health and addiction recovery. 
            With over 15 years of experience, Dr. Huddar provides personalized 
            treatment to help you live a healthier, happier life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-100 hover:text-blue-800 px-8 py-6 text-base"
              onClick={() => scrollToSection('appointment')}
            >
              Book Appointment
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-700 px-8 py-6 text-base"
              onClick={() => scrollToSection('services')}
            >
              Our Services
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className="rounded-full bg-blue-600 w-80 h-80 flex items-center justify-center">
            <span className="text-lg font-medium text-blue-100">Doctor's Portrait</span>
          </div>
        </div>
      </div>
    </section>
  );
}