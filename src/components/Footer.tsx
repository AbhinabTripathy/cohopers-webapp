import { Instagram, Linkedin, Twitter, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative py-16 border-t border-glass-border">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl transform -translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-poppins font-bold gradient-text">
              Cohopers
            </h3>
            <p className="text-muted-foreground">
              Premium coworking space where innovation meets collaboration. 
              Join 200+ professionals in our 14,000+ sq ft modern workspace.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 glass rounded-lg hover:bg-glass-border transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 glass rounded-lg hover:bg-glass-border transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 glass rounded-lg hover:bg-glass-border transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 glass rounded-lg hover:bg-glass-border transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Membership Plans</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Amenities</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Events</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors">Hot Desk</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors">Dedicated Desk</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors">Private Office</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors">Meeting Rooms</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors">Event Space</a></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Bhubaneswar, Odisha
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  hello@cohopers.in
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-glass-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Cohopers by 9C Technology Labs Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}