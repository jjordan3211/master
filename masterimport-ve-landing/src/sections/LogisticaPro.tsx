import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Ship, 
  Plane, 
  Clock, 
  DollarSign, 
  Package, 
  CheckCircle,
  ArrowRight
} from "lucide-react";

const casilleros = [
  {
    location: "Miami, USA",
    flag: "🇺🇸",
    description: "Tu dirección personal en Estados Unidos para recibir compras de Amazon, eBay y más.",
    features: [
      "Dirección física en Florida",
      "Almacenamiento gratuito 30 días",
      "Consolidación de paquetes",
    ],
  },
  {
    location: "China",
    flag: "🇨🇳",
    description: "Casillero estratégico en China para recibir compras de Alibaba, 1688 y más.",
    features: [
      "Verificación de productos",
      "Fotos antes del envío",
      "Reempaque para protección",
    ],
  },
];

const envios = [
  {
    type: "Marítimo",
    icon: Ship,
    color: "bg-blue-500",
    time: "25-45 días",
    savings: "Hasta 70% de ahorro",
    ideal: "Compras grandes y pesadas",
    features: [
      "Costo por kg más económico",
      "Ideal para volumen",
      "Perfecto para negocios",
    ],
  },
  {
    type: "Aéreo",
    icon: Plane,
    color: "bg-[#FF8C00]",
    time: "7-15 días",
    savings: "Rapidez garantizada",
    ideal: "Productos urgentes",
    features: [
      "Entrega express",
      "Seguimiento en tiempo real",
      "Ideal para tecnología",
    ],
  },
];

export default function LogisticaPro() {
  return (
    <section id="logistica-pro" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="bg-[#001F3F] text-white hover:bg-[#002a52] mb-4 text-sm">
            🚢 LOGÍSTICA PRO
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#001F3F] mb-6">
            Casilleros y Envíos a Venezuela
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Aprende a usar casilleros en Miami y China. Entiende la diferencia 
            estratégica entre envío marítimo y aéreo hasta tu ciudad.
          </p>
        </div>

        {/* Casilleros Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-[#001F3F] text-center mb-8">
            Tus Casilleros Internacionales
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {casilleros.map((casillero, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-[#001F3F] rounded-2xl flex items-center justify-center text-3xl">
                      {casillero.flag}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                        <MapPin className="w-4 h-4" />
                        <span>Casillero en</span>
                      </div>
                      <h4 className="text-xl font-bold text-[#001F3F]">
                        {casillero.location}
                      </h4>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {casillero.description}
                  </p>

                  <ul className="space-y-3">
                    {casillero.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-[#FF8C00] flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Shipping Methods Comparison */}
        <div>
          <h3 className="text-2xl font-bold text-[#001F3F] text-center mb-8">
            Elige tu Método de Envío
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {envios.map((envio, index) => (
              <Card
                key={index}
                className={`overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 ${
                  index === 1 ? "ring-2 ring-[#FF8C00]" : ""
                }`}
              >
                {/* Header */}
                <div className={`${envio.color} p-6 text-white`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                        <envio.icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold">{envio.type}</h4>
                        <p className="text-white/80 text-sm">{envio.ideal}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Time & Savings */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                      <Clock className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">Tiempo</p>
                      <p className="font-bold text-[#001F3F]">{envio.time}</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                      <DollarSign className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">Beneficio</p>
                      <p className="font-bold text-[#001F3F]">{envio.savings}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {envio.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <ArrowRight className={`w-5 h-5 flex-shrink-0 ${
                          index === 0 ? "text-blue-500" : "text-[#FF8C00]"
                        }`} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Coverage Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#001F3F] to-[#003366] rounded-2xl p-8 text-center text-white">
          <Package className="w-12 h-12 text-[#FF8C00] mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Cobertura Nacional</h3>
          <p className="text-white/80 text-lg">
            Envíos a todo Venezuela: Caracas, Valencia, Maracaibo, Barquisimeto, 
            Puerto Ordaz, Maturín y <span className="text-[#FF8C00] font-semibold">Zulia/Cabimas</span>
          </p>
        </div>
      </div>
    </section>
  );
}
