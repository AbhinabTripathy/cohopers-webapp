import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import heroImage from "@/assets/coworking-hero.jpg";
import meetingRoom from "@/assets/meeting-room.jpg";
import loungeArea from "@/assets/lounge-area.jpg";
import privatePods from "@/assets/private-pods.jpg";

const slides = [
  {
    image: heroImage,
    title: "Where Innovation Meets Collaboration",
    subtitle: "Join 200+ Gen Z professionals in our 14,000+ sq ft premium workspace designed for the future",
    cta: "Book a Tour"
  },
  {
    image: meetingRoom,
    title: "State-of-the-Art Meeting Rooms",
    subtitle: "Professional spaces equipped with latest AV technology for seamless collaboration",
    cta: "Explore Rooms"
  },
  {
    image: privatePods,
    title: "Focus in Private Pods",
    subtitle: "Dedicated spaces for deep work and concentration in a distraction-free environment",
    cta: "Try Private Pods"
  },
  {
    image: loungeArea,
    title: "Relax & Network",
    subtitle: "Comfortable lounge areas perfect for informal meetings and building connections",
    cta: "Join Community"
  }
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Theme Toggle - Fixed position */}
      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Carousel Container */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <img 
              src={slide.image} 
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-background/30" />
            
            {/* Animated gradient background */}
            <div className="absolute inset-0 gradient-bg opacity-30" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="icon"
        onClick={prevSlide}
        className="absolute left-6 z-40 glass border-glass-border hover:bg-glass"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        onClick={nextSlide}
        className="absolute right-6 z-40 glass border-glass-border hover:bg-glass"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Content */}
      <div className="relative z-30 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-poppins font-bold leading-tight">
            <span className="gradient-text">
              {slides[currentSlide].title}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {slides[currentSlide].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="group text-lg px-8 py-6 bg-gradient-primary hover:scale-105 transition-all duration-300 glow">
              {slides[currentSlide].cta}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 glass border-glass-border hover:bg-glass">
              View Membership Plans
            </Button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-primary scale-125' 
                  : 'bg-muted-foreground/50 hover:bg-muted-foreground'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}