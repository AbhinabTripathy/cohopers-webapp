import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Users, Square, MapPin, Award, Coffee, Zap } from "lucide-react";

const achievements = [
  {
    icon: Users,
    value: 200,
    suffix: "+",
    label: "Active Members",
    color: "text-primary"
  },
  {
    icon: Square,
    value: 14000,
    suffix: "+",
    label: "Sq Ft Space",
    color: "text-secondary"
  },
  {
    icon: MapPin,
    value: 24,
    suffix: "/7",
    label: "Access Available",
    color: "text-accent"
  },
  {
    icon: Award,
    value: 50,
    suffix: "+",
    label: "Events Hosted",
    color: "text-primary"
  },
  {
    icon: Coffee,
    value: 1000,
    suffix: "+",
    label: "Cups of Coffee",
    color: "text-secondary"
  },
  {
    icon: Zap,
    value: 99.9,
    suffix: "%",
    label: "Uptime",
    color: "text-accent"
  }
];

export function Achievements() {
  return (
    <section className="py-24 relative">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/15 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
            Our <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Numbers that speak for our commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.label}
              className="glass rounded-2xl p-6 text-center hover-scale group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center mb-4">
                <achievement.icon className={`h-8 w-8 ${achievement.color}`} />
              </div>
              <div className={`text-3xl md:text-4xl font-bold mb-2 ${achievement.color}`}>
                <AnimatedCounter end={achievement.value} suffix={achievement.suffix} />
              </div>
              <p className="text-sm text-muted-foreground font-medium">
                {achievement.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}