import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";

const navLinks = [
  { name: "Módulo China", href: "#modulo-china" },
  { name: "Módulo USA", href: "#modulo-usa" },
  { name: "Logística", href: "#logistica-pro" },
  { name: "Finanzas", href: "#finanzas-pagos" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const whatsappNumber = "584224517053";
  const whatsappMessage = encodeURIComponent(
    "¡Hola! Estoy interesado en inscribirme en Master Import.ve."
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <img
                src="/images/Gemini_Generated_Image_b9hsj3b9hsj3b9hs.png"
                alt="Master Import.ve"
                className={`transition-all duration-300 ${
                  isScrolled ? "h-10" : "h-12"
                }`}
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className={`font-medium transition-colors duration-300 ${
                    isScrolled
                      ? "text-[#001F3F] hover:text-[#FF8C00]"
                      : "text-white/90 hover:text-[#FF8C00]"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className={`font-semibold transition-all duration-300 ${
                    isScrolled
                      ? "bg-[#FF8C00] hover:bg-[#e67d00] text-white"
                      : "bg-white text-[#001F3F] hover:bg-white/90"
                  }`}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Inscribirme
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled
                  ? "text-[#001F3F] hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-30 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={`absolute top-0 right-0 w-full max-w-sm h-full bg-white shadow-2xl transition-transform duration-500 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 pt-20">
            <div className="space-y-4">
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left text-lg font-medium text-[#001F3F] hover:text-[#FF8C00] py-3 border-b border-gray-100 transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>

            <div className="mt-8">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-[#FF8C00] hover:bg-[#e67d00] text-white font-semibold py-6">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  ¡Quiero inscribirme!
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
