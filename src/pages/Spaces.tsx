import { Navbar } from "@/components/Navbar";
import { Features } from "@/components/Features";
import { SpaceSwiper } from "@/components/SpaceSwiper";
import { Footer } from "@/components/Footer";

const Spaces = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6 dark:text-white light:text-foreground">
              Our Spaces
            </h1>
            <p className="text-xl dark:text-white light:text-foreground max-w-2xl mx-auto">
              Discover our variety of workspaces designed for every work style and need
            </p>
          </div>
        </div>
        <Features />
        <SpaceSwiper />
      </div>
      <Footer />
    </div>
  );
};

export default Spaces;