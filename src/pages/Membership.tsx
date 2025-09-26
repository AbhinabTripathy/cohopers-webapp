import { Navbar } from "@/components/Navbar";
import { Membership as MembershipComponent } from "@/components/Membership";
import { Footer } from "@/components/Footer";

const Membership = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6 dark:text-white light:text-foreground">
              Membership Plans
            </h1>
            <p className="text-xl dark:text-white light:text-foreground max-w-2xl mx-auto">
              Choose the perfect plan that fits your work style and needs
            </p>
          </div>
        </div>
        <MembershipComponent />
      </div>
      <Footer />
    </div>
  );
};

export default Membership;