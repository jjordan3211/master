import { Instagram, MessageCircle, MapPin, Phone } from "lucide-react";

const navLinks = [
  { name: "Inicio", href: "#" },
  { name: "Módulo China", href: "#modulo-china" },
  { name: "Módulo USA", href: "#modulo-usa" },
  { name: "Logística Pro", href: "#logistica-pro" },
  { name: "Finanzas", href: "#finanzas-pagos" },
  { name: "Inscripción", href: "#inscripcion" },
];

const socialLinks = [
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/584224517053",
    color: "bg-green-500 hover:bg-green-600",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/masterimport.ve",
    color: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 hover:opacity-90",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#001F3F] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/images/Gemini_Generated_Image_b9hsj3b9hsj3b9hs.png"
                alt="Master Import.ve"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-white/70 leading-relaxed mb-6 max-w-md">
              La academia #1 en Venezuela para aprender a importar desde USA y China. 
              Más de 500 estudiantes ya están emprendiendo con éxito.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 ${social.color} rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110`}
                  aria-label={social.name}
                >
                  <social.icon className="w-6 h-6 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#FF8C00]">Navegación</h4>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#FF8C00] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#FF8C00]">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#FF8C00] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/70">WhatsApp</p>
                  <a
                    href="https://wa.me/584224517053"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#FF8C00] transition-colors"
                  >
                    +58 422 451 7053
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Instagram className="w-5 h-5 text-[#FF8C00] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/70">Instagram</p>
                  <a
                    href="https://instagram.com/masterimport.ve"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#FF8C00] transition-colors"
                  >
                    @masterimport.ve
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FF8C00] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/70">Cobertura</p>
                  <p className="text-white">Todo Venezuela</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Master Import.ve. Todos los derechos reservados.
            </p>
            <p className="text-white/50 text-sm">
              Hecho con ❤️ para emprendedores venezolanos
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
