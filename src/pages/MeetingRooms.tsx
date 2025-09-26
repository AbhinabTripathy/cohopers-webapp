import { Navbar } from "@/components/Navbar";
import { MeetingRoomsOffices } from "@/components/MeetingRoomsOffices";
import { Footer } from "@/components/Footer";

const MeetingRooms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6 dark:text-white light:text-foreground">
              Meeting Rooms & Offices
            </h1>
            <p className="text-xl dark:text-white light:text-foreground max-w-2xl mx-auto">
              Professional meeting rooms and private offices equipped with state-of-the-art technology
            </p>
          </div>
        </div>
        <MeetingRoomsOffices />
      </div>
      <Footer />
    </div>
  );
};

export default MeetingRooms;