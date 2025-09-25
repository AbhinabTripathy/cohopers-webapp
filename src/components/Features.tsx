import { Wifi, Coffee, Shield, Zap, Headphones, Car } from "lucide-react";
import meetingRoom from "@/assets/meeting-room.jpg";
import loungeArea from "@/assets/lounge-area.jpg";
import privatePods from "@/assets/private-pods.jpg";

const features = [
  {
    icon: Wifi,
    title: "High-Speed Internet",
    description: "Lightning-fast fiber internet with backup connections ensuring 99.9% uptime",
    color: "text-primary"
  },
  {
    icon: Coffee,
    title: "Premium Café",
    description: "Unlimited coffee, tea, and snacks to fuel your productivity throughout the day",
    color: "text-secondary"
  },
  {
    icon: Shield,
    title: "24/7 Security",
    description: "Round-the-clock security with smart access controls and CCTV surveillance",
    color: "text-accent"
  },
  {
    icon: Zap,
    title: "Power Backup",
    description: "Uninterrupted power supply with backup generators for seamless work",
    color: "text-primary"
  },
  {
    icon: Headphones,
    title: "Meeting Rooms",
    description: "State-of-the-art meeting rooms with AV equipment and video conferencing",
    color: "text-secondary"
  },
  {
    icon: Car,
    title: "Parking Space",
    description: "Ample parking space for cars and bikes with 24/7 security monitoring",
    color: "text-accent"
  }
];

const workspaceImages = [
  {
    src: meetingRoom,
    alt: "Modern meeting room with glass walls",
    title: "Meeting Rooms"
  },
  {
    src: privatePods,
    alt: "Private office pods for focused work",
    title: "Private Pods"
  },
  {
    src: loungeArea,
    alt: "Comfortable lounge area for relaxation",
    title: "Lounge Area"
  }
];

export function Features() {
  return (
    <section className="py-24 relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
            Premium <span className="gradient-text">Workspace</span> Features
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to work, create, and collaborate in one modern space
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="glass rounded-2xl p-8 hover-scale group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-3 rounded-2xl bg-gradient-card mb-6 ${feature.color}`}>
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-poppins font-semibold mb-4 group-hover:gradient-text transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Workspace showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {workspaceImages.map((image, index) => (
            <div 
              key={image.title}
              className="relative group overflow-hidden rounded-2xl hover-scale"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-poppins font-semibold text-foreground mb-2">
                  {image.title}
                </h3>
                <div className="w-16 h-1 bg-gradient-primary rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}