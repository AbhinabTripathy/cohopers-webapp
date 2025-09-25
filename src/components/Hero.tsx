import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { ArrowRight, Users, Square, MapPin } from "lucide-react";
import heroImage from "@/assets/coworking-hero.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-bg" />
      
      {/* Background image overlay */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Modern coworking space interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-40 right-20 w-24 h-24 bg-secondary/30 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-accent/25 rounded-full blur-md animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-poppins font-bold leading-tight">
            <span className="block">Where</span>
            <span className="block gradient-text">Innovation</span>
            <span className="block">Meets Collaboration</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join 200+ Gen Z professionals, entrepreneurs, and innovators in our 
            14,000+ sq ft premium coworking space designed for the future of work.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="group text-lg px-8 py-6 bg-gradient-primary hover:scale-105 transition-all duration-300 glow">
              Book a Tour
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 glass border-glass-border hover:bg-glass">
              View Membership Plans
            </Button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8">
            <div className="glass rounded-2xl p-6 hover-scale">
              <div className="flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">
                <AnimatedCounter end={200} suffix="+" />
              </div>
              <p className="text-muted-foreground">Active Members</p>
            </div>

            <div className="glass rounded-2xl p-6 hover-scale">
              <div className="flex items-center justify-center mb-4">
                <Square className="h-8 w-8 text-secondary" />
              </div>
              <div className="text-4xl font-bold text-secondary mb-2">
                <AnimatedCounter end={14000} suffix="+" />
              </div>
              <p className="text-muted-foreground">Sq Ft Space</p>
            </div>

            <div className="glass rounded-2xl p-6 hover-scale">
              <div className="flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-accent" />
              </div>
              <div className="text-4xl font-bold text-accent mb-2">
                <AnimatedCounter end={24} suffix="/7" />
              </div>
              <p className="text-muted-foreground">Access Available</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}