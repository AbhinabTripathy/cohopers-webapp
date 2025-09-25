import { Button } from "@/components/ui/button";
import { Check, Star, Crown, Rocket } from "lucide-react";

const plans = [
  {
    name: "Hot Desk",
    icon: Star,
    price: "₹2,999",
    period: "/month",
    description: "Perfect for freelancers and occasional users",
    features: [
      "Access to hot desks",
      "High-speed WiFi",
      "Coffee & tea",
      "Meeting room credits (2hrs/month)",
      "Community events access"
    ],
    popular: false,
    gradient: "bg-gradient-card"
  },
  {
    name: "Dedicated Desk",
    icon: Crown,
    price: "₹5,999",
    period: "/month",
    description: "Your own personal workspace",
    features: [
      "24/7 dedicated desk",
      "Personal storage locker",
      "High-speed WiFi",
      "Unlimited coffee & snacks",
      "Meeting room credits (8hrs/month)",
      "Printing credits",
      "Community events access",
      "Guest day passes (2/month)"
    ],
    popular: true,
    gradient: "bg-gradient-primary"
  },
  {
    name: "Private Office",
    icon: Rocket,
    price: "₹15,999",
    period: "/month",
    description: "Complete privacy for teams",
    features: [
      "Private office (up to 4 people)",
      "24/7 access",
      "High-speed dedicated internet",
      "Unlimited meeting room access",
      "Personal fridge & storage",
      "Printing & scanning",
      "Reception services",
      "Priority support",
      "Guest day passes (10/month)"
    ],
    popular: false,
    gradient: "bg-gradient-card"
  }
];

export function Membership() {
  return (
    <section className="py-24 relative">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/15 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
            Choose Your <span className="gradient-text">Membership</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Flexible plans designed for every stage of your journey
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={plan.name}
              className={`
                relative glass rounded-3xl p-8 hover-scale group
                ${plan.popular ? 'ring-2 ring-primary glow' : ''}
              `}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan icon */}
              <div className={`inline-flex p-4 rounded-2xl ${plan.gradient} mb-6`}>
                <plan.icon className="h-8 w-8 text-foreground" />
              </div>

              {/* Plan details */}
              <h3 className="text-2xl font-poppins font-bold mb-2">
                {plan.name}
              </h3>
              <p className="text-muted-foreground mb-6">
                {plan.description}
              </p>

              {/* Pricing */}
              <div className="mb-8">
                <span className="text-4xl font-poppins font-bold text-primary">
                  {plan.price}
                </span>
                <span className="text-muted-foreground">
                  {plan.period}
                </span>
              </div>

              {/* Features list */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button 
                className={`
                  w-full py-6 text-lg font-semibold transition-all duration-300
                  ${plan.popular 
                    ? 'bg-gradient-primary hover:scale-105 glow' 
                    : 'glass border-glass-border hover:bg-glass'
                  }
                `}
              >
                {plan.popular ? 'Get Started' : 'Choose Plan'}
              </Button>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-12 glass rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-poppins font-semibold mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-muted-foreground mb-6">
            We offer tailored plans for teams and enterprises. 
            Contact us to discuss your specific requirements.
          </p>
          <Button variant="outline" size="lg" className="glass border-glass-border">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
}