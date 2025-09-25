export function ClientLogos() {
  // Placeholder for client logos - you can replace with actual client logos
  const clients = [
    "TechCorp", "InnovateLab", "StartupHub", "DesignStudio", "CodeCraft", 
    "FutureWork", "DigitalAge", "CreativeSpace", "TechForward", "NextGen"
  ];

  return (
    <section className="py-16 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-poppins font-semibold text-muted-foreground mb-4">
            Trusted by Leading Companies
          </h2>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-12 whitespace-nowrap">
            {/* First set */}
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 glass rounded-xl px-8 py-4 min-w-[180px] text-center hover-scale"
              >
                <span className="text-lg font-medium text-muted-foreground">
                  {client}
                </span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 glass rounded-xl px-8 py-4 min-w-[180px] text-center hover-scale"
              >
                <span className="text-lg font-medium text-muted-foreground">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}