import { HeroCarousel } from "@/components/HeroCarousel";
import { ClientLogos } from "@/components/ClientLogos";
import { Achievements } from "@/components/Achievements";
import { Features } from "@/components/Features";
import { SpaceSwiper } from "@/components/SpaceSwiper";
import { MeetingRoomsOffices } from "@/components/MeetingRoomsOffices";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroCarousel />
      <ClientLogos />
      <Achievements />
      <Features />
      <SpaceSwiper />
      <MeetingRoomsOffices />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
