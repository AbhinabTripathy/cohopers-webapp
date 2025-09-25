import { Button } from "@/components/ui/button";
import { Clock, Users, Wifi, Monitor, Calendar, Building2 } from "lucide-react";

const meetingRooms = [
  {
    name: "Quick Meet",
    capacity: "2-4 people",
    duration: "1-2 hours",
    price: "₹299/hour",
    features: ["Video conferencing", "Whiteboard", "WiFi", "AC"],
    icon: Clock
  },
  {
    name: "Conference Room",
    capacity: "6-12 people",
    duration: "Half/Full day",
    price: "₹599/hour",
    features: ["Projector", "Video conferencing", "Catering", "Whiteboard"],
    icon: Users
  },
  {
    name: "Board Room",
    capacity: "8-16 people",
    duration: "Full day events",
    price: "₹999/hour",
    features: ["Premium AV setup", "Catering", "Reception", "Parking"],
    icon: Monitor
  }
];

const managedOffices = [
  {
    name: "Startup Suite",
    capacity: "5-10 people",
    price: "₹25,999/month",
    features: ["Furnished office", "Reception services", "Utilities included", "Parking"],
    icon: Building2
  },
  {
    name: "Scale Office",
    capacity: "10-20 people",
    price: "₹45,999/month",
    features: ["Premium location", "Meeting rooms", "Dedicated support", "Branding"],
    icon: Building2
  },
  {
    name: "Enterprise Floor",
    capacity: "20+ people",
    price: "Custom pricing",
    features: ["Entire floor", "Custom design", "Dedicated facilities", "Premium services"],
    icon: Building2
  }
];

export function MeetingRoomsOffices() {
  return (
    <section className="py-24 relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Meeting Rooms Section */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Meeting <span className="gradient-text">Rooms</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Professional spaces for your important meetings and presentations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {meetingRooms.map((room, index) => (
              <div 
                key={room.name}
                className="glass rounded-2xl p-6 hover-scale group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex p-3 rounded-2xl bg-gradient-card mb-6">
                  <room.icon className="h-6 w-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-poppins font-semibold mb-2">
                  {room.name}
                </h3>
                
                <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{room.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{room.duration}</span>
                  </div>
                </div>

                <div className="text-2xl font-bold text-primary mb-4">
                  {room.price}
                </div>

                <ul className="space-y-2 mb-6">
                  {room.features.map((feature, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button className="w-full glass border-glass-border hover:bg-glass">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Now
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Managed Offices Section */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Managed <span className="gradient-text">Offices</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready-to-use private offices with all amenities included
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {managedOffices.map((office, index) => (
              <div 
                key={office.name}
                className="glass rounded-2xl p-6 hover-scale group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex p-3 rounded-2xl bg-gradient-card mb-6">
                  <office.icon className="h-6 w-6 text-secondary" />
                </div>
                
                <h3 className="text-xl font-poppins font-semibold mb-2">
                  {office.name}
                </h3>
                
                <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>{office.capacity}</span>
                </div>

                <div className="text-2xl font-bold text-secondary mb-4">
                  {office.price}
                </div>

                <ul className="space-y-2 mb-6">
                  {office.features.map((feature, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-gradient-primary hover:scale-105 transition-all duration-300">
                  Contact Sales
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}