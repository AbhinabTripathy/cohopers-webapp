import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Calendar, ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section className="py-24 relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/15 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
            Ready to <span className="gradient-text">Get Started</span>?
          </h2>
          <p className="text-xl text-muted-foreground">
            Join the community of innovators and entrepreneurs. Book a tour or get in touch today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-poppins font-semibold mb-8">
                Visit Our Space
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 glass rounded-2xl p-6">
                  <div className="p-3 bg-gradient-primary rounded-xl">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Location</h4>
                    <p className="text-muted-foreground">
                      Cohopers Premium Coworking<br />
                      9C Technology Labs Pvt. Ltd.<br />
                      Bhubaneswar, Odisha
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 glass rounded-2xl p-6">
                  <div className="p-3 bg-gradient-card rounded-xl">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Phone</h4>
                    <p className="text-muted-foreground">+91 XXXXX XXXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 glass rounded-2xl p-6">
                  <div className="p-3 bg-gradient-card rounded-xl">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Email</h4>
                    <p className="text-muted-foreground">hello@cohopers.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 glass rounded-2xl p-6">
                  <div className="p-3 bg-gradient-primary rounded-xl">
                    <Clock className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Hours</h4>
                    <p className="text-muted-foreground">
                      Mon - Fri: 9:00 AM - 8:00 PM<br />
                      Sat - Sun: 10:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="space-y-4">
              <Button size="lg" className="w-full bg-gradient-primary hover:scale-105 transition-all duration-300 glow group">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Tour
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="w-full glass border-glass-border hover:bg-glass">
                Call Now
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass rounded-3xl p-8">
            <h3 className="text-2xl font-poppins font-semibold mb-6">
              Send us a Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <Input 
                    placeholder="John" 
                    className="glass border-glass-border focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <Input 
                    placeholder="Doe" 
                    className="glass border-glass-border focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="glass border-glass-border focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <Input 
                  type="tel" 
                  placeholder="+91 XXXXX XXXXX" 
                  className="glass border-glass-border focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Interested In
                </label>
                <select className="w-full p-3 glass border border-glass-border rounded-lg focus:ring-2 focus:ring-primary bg-background">
                  <option>Hot Desk Membership</option>
                  <option>Dedicated Desk</option>
                  <option>Private Office</option>
                  <option>Day Pass</option>
                  <option>Meeting Room Rental</option>
                  <option>Event Space</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us about your requirements..."
                  rows={4}
                  className="glass border-glass-border focus:ring-primary resize-none"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-primary hover:scale-105 transition-all duration-300 glow group"
              >
                Send Message
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}