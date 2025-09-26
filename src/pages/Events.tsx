import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Startup Networking Night",
      date: "Dec 15, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Main Lounge",
      attendees: 25,
      description: "Connect with fellow entrepreneurs and startup founders over drinks and casual networking."
    },
    {
      title: "Design Thinking Workshop",
      date: "Dec 18, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Conference Room A",
      attendees: 15,
      description: "Learn the fundamentals of design thinking and apply them to your business challenges."
    },
    {
      title: "Tech Talk: AI in Business",
      date: "Dec 22, 2024",
      time: "12:00 PM - 1:00 PM",
      location: "Event Space",
      attendees: 40,
      description: "Industry experts discuss the latest AI trends and their impact on modern business."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6 dark:text-white light:text-foreground">
              Events
            </h1>
            <p className="text-xl dark:text-white light:text-foreground max-w-2xl mx-auto">
              Join our community events, workshops, and networking sessions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-poppins">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{event.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{event.attendees} attending</span>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-primary hover:scale-105 transition-all duration-300">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-poppins font-semibold mb-4 dark:text-white light:text-foreground">
              Want to host your own event?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Our flexible event spaces are perfect for workshops, seminars, and corporate events.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:scale-105 transition-all duration-300">
              Book Event Space
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;