import { Navbar } from "@/components/Navbar";
import { Contact as ContactComponent } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6 dark:text-white light:text-foreground">
              Contact Us
            </h1>
            <p className="text-xl dark:text-white light:text-foreground max-w-2xl mx-auto">
              Get in touch with us for tours, memberships, or any questions
            </p>
          </div>
        </div>
        <ContactComponent />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;