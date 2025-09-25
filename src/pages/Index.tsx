import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Membership } from "@/components/Membership";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <Membership />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
