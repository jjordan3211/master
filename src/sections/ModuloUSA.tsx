import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Smartphone, Package, Star, Shield, Zap } from "lucide-react";

const platforms = [
  {
    name: "Amazon USA",
    image: "/images/amazon_logo_history_5.jpg",
    description: "La tienda online más grande del mundo. Millones de productos con envío rápido.",
    features: [
      "Prime para envíos gratuitos",
      "Productos originales garantizados",
      "Devoluciones sin complicaciones",
    ],
    icon: ShoppingCart,
    color: "from-yellow-400 to-orange-500",
    highlight: "Más popular",
  },
  {
    name: "eBay",
    image: "/images/ebay.png",
    description: "Subastas y compras directas. Encuentra productos únicos y coleccionables.",
    features: [
      "Subastas para mejores precios",
      "Productos nuevos y usados",
      "Vendedores de todo el mundo",
    ],
    icon: Star,
    color: "from-red-500 via-blue-500 to-yellow-500",
    highlight: "Subastas",
  },
  {
    name: "Swappa",
    image: "/images/swappa.jpg",
    description: "Especialistas en tecnología usada verificada. iPhones, MacBooks, consolas.",
    features: [
      "Dispositivos verificados y testeados",
      "Precios 30-50% más bajos",
      "Garantía de funcionamiento",
    ],
    icon: Smartphone,
    color: "from-green-500 to-green-600",
    highlight: "Tecnología",
  },
];

export default function ModuloUSA() {
  return (
    <section id="modulo-usa" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 mb-4 text-sm">
            🇺🇸 MÓDULO USA
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#001F3F] mb-6">
            Importa desde Estados Unidos
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Accede a productos de calidad americana. Desde tecnología hasta artículos 
            de colección, aprende a comprar en las mejores plataformas.
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {platforms.map((platform, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white"
            >
              {/* Highlight Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-[#FF8C00] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {platform.highlight}
                </span>
              </div>

              <div className={`h-2 bg-gradient-to-r ${platform.color}`} />
              <CardContent className="p-6">
                {/* Platform Image */}
                <div className="flex justify-center mb-6">
                  <div className="relative w-32 h-32 rounded-2xl overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-500 bg-white flex items-center justify-center p-4">
                    <img
                      src={platform.image}
                      alt={platform.name}
                      className="w-full h-full object-contain"
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
                <div className="space-y-3">
                  {platform.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${platform.color} flex items-center justify-center flex-shrink-0`}>
                        {idx === 0 && <Zap className="w-4 h-4 text-white" />}
                        {idx === 1 && <Shield className="w-4 h-4 text-white" />}
                        {idx === 2 && <Package className="w-4 h-4 text-white" />}
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Banner */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Shield, title: "Productos Originales", desc: "100% auténticos garantizados" },
            { icon: Zap, title: "Envío Rápido", desc: "Recibe en 7-15 días" },
            { icon: Package, title: "Casillero Gratis", desc: "Dirección en Miami incluida" },
            { icon: Star, title: "Mejores Precios", desc: "Ahorra hasta 60% vs local" },
          ].map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="w-12 h-12 bg-[#001F3F] rounded-xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-6 h-6 text-[#FF8C00]" />
              </div>
              <h4 className="font-bold text-[#001F3F] mb-2">{benefit.title}</h4>
              <p className="text-gray-500 text-sm">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
