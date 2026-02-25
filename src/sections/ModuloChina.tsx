import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Factory, Gem, TrendingDown, Check } from "lucide-react";

const platforms = [
  {
    name: "1688.com",
    image: "/images/1200x630wa.jpg",
    description: "La plataforma B2B más grande de China. Precios de fábrica sin intermediarios.",
    features: [
      "Precios 40-60% más bajos que Alibaba",
      "Acceso directo a fabricantes",
      "MOQ (mínimos) más flexibles",
    ],
    icon: TrendingDown,
    color: "from-orange-500 to-orange-600",
  },
  {
    name: "Alibaba.com",
    image: "/images/alibaba.png",
    description: "El gigante mundial del comercio B2B. Millones de productos verificados.",
    features: [
      "Proveedores verificados y auditados",
      "Trade Assurance protege tu dinero",
      "Negociación en múltiples idiomas",
    ],
    icon: Factory,
    color: "from-orange-400 to-orange-500",
  },
  {
    name: "Nihao Jewelry",
    image: "/images/nihao.png",
    description: "Especialistas en bisutería, accesorios y joyería de moda al por mayor.",
    features: [
      "Catálogo exclusivo de joyería",
      "Tendencias de moda actualizadas",
      "Perfecto para emprendedores",
    ],
    icon: Gem,
    color: "from-purple-500 to-purple-600",
  },
];

export default function ModuloChina() {
  return (
    <section id="modulo-china" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="bg-[#FF8C00]/10 text-[#FF8C00] hover:bg-[#FF8C00]/20 mb-4 text-sm">
            🇨🇳 MÓDULO CHINA
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#001F3F] mb-6">
            Compra directo desde China
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Aprende a negociar con chinos y conseguir precios de fábrica. 
            Domina las plataformas que usan los grandes importadores.
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {platforms.map((platform, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${platform.color}`} />
              <CardContent className="p-6">
                {/* Platform Image */}
                <div className="flex justify-center mb-6">
                  <div className="relative w-32 h-32 rounded-2xl overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <img
                      src={platform.image}
                      alt={platform.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Platform Info */}
                <h3 className="text-xl font-bold text-[#001F3F] text-center mb-3">
                  {platform.name}
                </h3>
                <p className="text-gray-600 text-center mb-6 text-sm leading-relaxed">
                  {platform.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {platform.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${platform.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Negotiation Highlight */}
        <div className="bg-gradient-to-r from-[#001F3F] to-[#003366] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF8C00]/20 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FF8C00]/10 rounded-full blur-[60px]" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-[#FF8C00] rounded-2xl flex items-center justify-center shadow-lg shadow-[#FF8C00]/30">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Cómo negociar con chinos y conseguir precios de fábrica
              </h3>
              <p className="text-white/80 text-lg leading-relaxed">
                Aprenderás las técnicas de negociación cultural, cómo usar WeChat para comunicarte 
                directamente con proveedores, y los trucos para obtener los mejores precios 
                incluso en pequeñas cantidades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
