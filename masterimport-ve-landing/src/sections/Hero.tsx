import { Button } from "@/components/ui/button";
import { ArrowRight, Plane, Ship, TrendingUp } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#001F3F] via-[#002a52] to-[#001F3F]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF8C00] rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF8C00] rounded-full blur-[150px]" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/images/Gemini_Generated_Image_b9hsj3b9hsj3b9hs.png" 
              alt="Master Import.ve" 
              className="h-24 md:h-32 w-auto drop-shadow-2xl"
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <TrendingUp className="w-4 h-4 text-[#FF8C00]" />
            <span className="text-white/90 text-sm font-medium">
              Academia de Importaciones #1 en Venezuela
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Domina las Importaciones de{" "}
            <span className="inline-flex items-center gap-2">
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">🇺🇸</span>
            </span>{" "}
            y{" "}
            <span className="inline-flex items-center gap-2">
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">🇨🇳</span>
            </span>
            <br />
            <span className="text-[#FF8C00]">hasta la puerta de tu casa</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-4 max-w-3xl mx-auto leading-relaxed">
            Aprende a comprar en las plataformas que usan los grandes mayoristas 
            y emprende con éxito en Venezuela
          </p>

          {/* Location Badge */}
          <div className="flex items-center justify-center gap-2 text-white/60 mb-10">
            <Plane className="w-5 h-5 text-[#FF8C00]" />
            <span>Envíos a todo el país • Incluyendo Zulia/Cabimas</span>
            <Ship className="w-5 h-5 text-[#FF8C00]" />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection("inscripcion")}
              className="bg-[#FF8C00] hover:bg-[#e67d00] text-white font-bold text-lg px-8 py-6 rounded-xl shadow-lg shadow-[#FF8C00]/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#FF8C00]/40"
            >
              ¡Quiero inscribirme ahora!
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => scrollToSection("modulo-china")}
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 font-semibold text-lg px-8 py-6 rounded-xl transition-all duration-300"
            >
              Conocer el programa
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: "500+", label: "Estudiantes formados" },
              { value: "6", label: "Plataformas cubiertas" },
              { value: "100%", label: "Práctico y aplicable" },
              { value: "24/7", label: "Soporte continuo" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#FF8C00] mb-1">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
