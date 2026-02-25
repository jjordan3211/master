import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CreditCard, 
  Wallet, 
  Bitcoin, 
  Shield, 
  TrendingUp, 
  Globe,
  Check,
  ArrowRightLeft,
  Zap
} from "lucide-react";

const metodosPago = [
  {
    name: "Zinli",
    icon: CreditCard,
    color: "from-purple-500 to-purple-600",
    description: "Tarjeta virtual internacional para pagos en USD.",
    features: [
      "Tarjeta Visa virtual instantánea",
      "Recarga con bolívares",
      "Sin comisión por mantenimiento",
    ],
  },
  {
    name: "Wally",
    icon: Wallet,
    color: "from-blue-500 to-cyan-500",
    description: "Billetera digital para pagos internacionales.",
    features: [
      "Transferencias P2P instantáneas",
      "Múltiples divisas disponibles",
      "App fácil de usar",
    ],
  },
  {
    name: "PayPal",
    icon: Globe,
    color: "from-blue-600 to-blue-700",
    description: "El método de pago más usado mundialmente.",
    features: [
      "Protección al comprador",
      "Aceptado en todas las plataformas",
      "Disputas y reembolsos",
    ],
  },
];

const binanceFeatures = [
  {
    icon: ArrowRightLeft,
    title: "P2P Trading",
    description: "Compra USDT directamente con bolívares de otros usuarios verificados.",
  },
  {
    icon: Shield,
    title: "Seguridad Garantizada",
    description: "El escrow de Binance protege tu dinero hasta que recibas los USDT.",
  },
  {
    icon: TrendingUp,
    title: "Mejores Tasas",
    description: "Compara entre cientos de comerciantes y elige la mejor tasa del mercado.",
  },
  {
    icon: Zap,
    title: "Transferencia Instantánea",
    description: "Los USDT están listos para usar en minutos, no días.",
  },
];

export default function FinanzasPagos() {
  return (
    <section id="finanzas-pagos" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="bg-green-100 text-green-700 hover:bg-green-200 mb-4 text-sm">
            💳 FINANZAS Y PAGOS
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#001F3F] mb-6">
            Métodos de Pago Internacional
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Aprende a usar Zinli, Wally, PayPal y domina el uso de Binance P2P 
            para fondear tus compras desde Venezuela.
          </p>
        </div>

        {/* Payment Methods Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {metodosPago.map((metodo, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white"
            >
              <div className={`h-2 bg-gradient-to-r ${metodo.color}`} />
              <CardContent className="p-6">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${metodo.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <metodo.icon className="w-8 h-8 text-white" />
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold text-[#001F3F] mb-3">
                  {metodo.name}
                </h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {metodo.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {metodo.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${metodo.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
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

        {/* Binance Highlight */}
        <div className="bg-gradient-to-br from-[#F0B90B] to-[#D4A009] rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full blur-[80px]" />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
              <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center">
                <Bitcoin className="w-10 h-10 text-[#F0B90B]" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-black mb-2">
                  Binance P2P
                </h3>
                <p className="text-black/70 text-lg">
                  El método maestro para fondear tus compras desde Venezuela
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {binanceFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-xl p-6 hover:bg-white transition-colors duration-300"
                >
                  <feature.icon className="w-8 h-8 text-[#F0B90B] mb-4" />
                  <h4 className="font-bold text-black mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 text-center">
              <p className="text-black/80 text-lg mb-4">
                Aprenderás paso a paso cómo crear tu cuenta, verificar tu identidad, 
                comprar USDT con bolívares y transferirlos a tus tarjetas.
              </p>
            </div>
          </div>
        </div>

        {/* Security Note */}
        <div className="mt-12 bg-[#001F3F] rounded-2xl p-8 text-center text-white">
          <Shield className="w-12 h-12 text-[#FF8C00] mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">Seguridad Primero</h3>
          <p className="text-white/80 max-w-2xl mx-auto">
            Te enseñaremos a identificar estafas, verificar comerciantes confiables 
            y proteger tu dinero en cada transacción. Tu seguridad es nuestra prioridad.
          </p>
        </div>
      </div>
    </section>
  );
}
