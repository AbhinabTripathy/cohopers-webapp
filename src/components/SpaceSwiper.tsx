import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Clock, X, ChevronLeft, ChevronRight, Star, Crown, Rocket } from "lucide-react";

const spaces = [
  {
    id: 1,
    name: "Hot Desk",
    icon: Star,
    price: "₹2,999",
    period: "/month",
    image: "/placeholder.svg",
    features: [
      { name: "Access to hot desks", available: true },
      { name: "High-speed WiFi", available: true },
      { name: "Coffee & tea", available: true },
      { name: "Meeting room credits (2hrs/month)", available: true },
      { name: "Community events access", available: true },
      { name: "Personal storage locker", available: false },
      { name: "24/7 access", available: false },
      { name: "Printing credits", available: "soon" }
    ],
    popular: false,
    gradient: "bg-gradient-card"
  },
  {
    id: 2,
    name: "Dedicated Desk",
    icon: Crown,
    price: "₹5,999",
    period: "/month",
    image: "/placeholder.svg",
    features: [
      { name: "24/7 dedicated desk", available: true },
      { name: "Personal storage locker", available: true },
      { name: "High-speed WiFi", available: true },
      { name: "Unlimited coffee & snacks", available: true },
      { name: "Meeting room credits (8hrs/month)", available: true },
      { name: "Printing credits", available: true },
      { name: "Community events access", available: true },
      { name: "Guest day passes (2/month)", available: true },
      { name: "Priority support", available: "soon" }
    ],
    popular: true,
    gradient: "bg-gradient-primary"
  },
  {
    id: 3,
    name: "Private Office",
    icon: Rocket,
    price: "₹15,999",
    period: "/month",
    image: "/placeholder.svg",
    features: [
      { name: "Private office (up to 4 people)", available: true },
      { name: "24/7 access", available: true },
      { name: "High-speed dedicated internet", available: true },
      { name: "Unlimited meeting room access", available: true },
      { name: "Personal fridge & storage", available: true },
      { name: "Printing & scanning", available: true },
      { name: "Reception services", available: true },
      { name: "Priority support", available: true },
      { name: "Guest day passes (10/month)", available: true },
      { name: "Custom branding", available: "soon" }
    ],
    popular: false,
    gradient: "bg-gradient-card"
  }
];

const AvailabilityIcon = ({ status }: { status: boolean | "soon" | string }) => {
  if (status === true) {
    return <Check className="h-4 w-4 text-green-500" />;
  } else if (status === "soon") {
    return <Clock className="h-4 w-4 text-yellow-500" />;
  } else {
    return <X className="h-4 w-4 text-red-500" />;
  }
};

export function SpaceSwiper() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % spaces.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + spaces.length) % spaces.length);
  };

  const currentSpace = spaces[currentIndex];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
            Space <span className="gradient-text">Types</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Swipe through our flexible workspace options
          </p>
        </div>

        <div className="max-w-lg mx-auto relative">
          {/* Swipe Card */}
          <div className="relative">
            <div 
              className={`
                glass rounded-3xl p-8 hover-scale group relative overflow-hidden
                ${currentSpace.popular ? 'ring-2 ring-primary glow' : ''}
              `}
            >
              {/* Popular badge */}
              {currentSpace.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan icon */}
              <div className={`inline-flex p-4 rounded-2xl ${currentSpace.gradient} mb-6`}>
                <currentSpace.icon className="h-8 w-8 text-foreground" />
              </div>

              {/* Plan details */}
              <h3 className="text-2xl font-poppins font-bold mb-2">
                {currentSpace.name}
              </h3>

              {/* Pricing */}
              <div className="mb-8">
                <span className="text-4xl font-poppins font-bold text-primary">
                  {currentSpace.price}
                </span>
                <span className="text-muted-foreground">
                  {currentSpace.period}
                </span>
              </div>

              {/* Features list with availability */}
              <div className="space-y-3 mb-8">
                {currentSpace.features.map((feature, index) => (
                  <div key={index} className="flex items-center justify-between glass rounded-lg p-3">
                    <span className="text-sm font-medium">
                      {feature.name}
                    </span>
                    <AvailabilityIcon status={feature.available} />
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                className={`
                  w-full py-6 text-lg font-semibold transition-all duration-300
                  ${currentSpace.popular 
                    ? 'bg-gradient-primary hover:scale-105 glow' 
                    : 'glass border-glass-border hover:bg-glass'
                  }
                `}
              >
                {currentSpace.popular ? 'Get Started' : 'Choose Plan'}
              </Button>
            </div>

            {/* Navigation buttons */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 glass border-glass-border"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 glass border-glass-border"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {spaces.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/50 hover:bg-muted-foreground'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex justify-center items-center gap-6 mt-8 glass rounded-2xl p-4 max-w-md mx-auto">
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-500" />
            <span className="text-sm">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-yellow-500" />
            <span className="text-sm">Coming Soon</span>
          </div>
          <div className="flex items-center gap-2">
            <X className="h-4 w-4 text-red-500" />
            <span className="text-sm">Not Available</span>
          </div>
        </div>
      </div>
    </section>
  );
}