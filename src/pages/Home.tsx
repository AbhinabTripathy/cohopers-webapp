import { useState } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ClientLogos } from "@/components/ClientLogos";
import { Achievements } from "@/components/Achievements";
import { Footer } from "@/components/Footer";

const Home = () => {
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
      <Achievements />
      <Footer />
    </div>
  );
};

export default Home;