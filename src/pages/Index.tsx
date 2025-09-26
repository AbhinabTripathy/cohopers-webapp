import { useState } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ClientLogos } from "@/components/ClientLogos";
import { Achievements } from "@/components/Achievements";
import { Features } from "@/components/Features";
import { SpaceSwiper } from "@/components/SpaceSwiper";
import { MeetingRoomsOffices } from "@/components/MeetingRoomsOffices";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroCarousel />
      <ClientLogos />
      <div id="achievements">
        <Achievements />
      </div>
      <div id="spaces">
        <Features />
        <SpaceSwiper />
        <MeetingRoomsOffices />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="membership">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
