import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import heroImage from "@/assets/coworking-hero.jpg";
import meetingRoom from "@/assets/meeting-room.jpg";
import loungeArea from "@/assets/lounge-area.jpg";
import privatePods from "@/assets/private-pods.jpg";

const Gallery = () => {
  const galleryImages = [
    {
      src: heroImage,
      title: "Main Workspace",
      description: "Open collaborative workspace with modern design"
    },
    {
      src: meetingRoom,
      title: "Meeting Room",
      description: "State-of-the-art meeting room with AV equipment"
    },
    {
      src: privatePods,
      title: "Private Pods",
      description: "Focused work pods for individual productivity"
    },
    {
      src: loungeArea,
      title: "Lounge Area",
      description: "Comfortable relaxation and networking space"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6 dark:text-white light:text-foreground">
              Gallery
            </h1>
            <p className="text-xl dark:text-white light:text-foreground max-w-2xl mx-auto">
              Take a visual tour of our beautiful coworking space
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-poppins font-semibold mb-2">{image.title}</h3>
                    <p className="text-sm">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;