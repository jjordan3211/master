import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Check, 
  MessageCircle, 
  Instagram, 
  Sparkles,
  Users,
  Clock,
  Award
} from "lucide-react";

const beneficios = [
  "Acceso de por vida al contenido",
  "Actualizaciones constantes",
  "Grupo privado de estudiantes",
  "Soporte vía WhatsApp",
  "Material descargable",
  "Certificado de finalización",
];

const includes = [
  {
    icon: Users,
    title: "Comunidad Privada",
    desc: "Grupo exclusivo de estudiantes para networking",
  },
  {
    icon: Clock,
    title: "Horarios Flexibles",
    desc: "Estudia a tu ritmo, cuando quieras",
  },
  {
    icon: Award,
    title: "Certificación",
    desc: "Recibe tu diploma al completar el curso",
  },
];

export default function Inscripcion() {
  const whatsappNumber = "584224517053";
  const whatsappMessage = encodeURIComponent(
    "¡Hola! Estoy interesado en inscribirme en Master Import.ve. ¿Me puedes dar más información?"
  );

  return (
    <section id="inscripcion" className="py-20 md:py-28 bg-gradient-to-br from-[#001F3F] via-[#002a52] to-[#001F3F] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF8C00] rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF8C00] rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="bg-[#FF8C00] text-white hover:bg-[#e67d00] mb-4 text-sm">
              <Sparkles className="w-4 h-4 mr-1" />
              INSCRIPCIÓN ABIERTA
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              ¡Comienza tu camino como Importador Pro!
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Únete a más de 500 estudiantes que ya están importando desde USA y China 
              hasta la puerta de su casa en Venezuela.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Benefits Card */}
            <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#001F3F] mb-6">
                  ¿Qué incluye el curso?
                </h3>

                <ul className="space-y-4 mb-8">
                  {beneficios.map((beneficio, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <div className="w-6 h-6 bg-[#FF8C00] rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700">{beneficio}</span>
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-3 gap-4">
                  {includes.map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-[#001F3F] rounded-xl flex items-center justify-center mx-auto mb-3">
                        <item.icon className="w-6 h-6 text-[#FF8C00]" />
                      </div>
                      <h4 className="font-semibold text-[#001F3F] text-sm mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-500 text-xs">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="border-0 shadow-2xl bg-white">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <p className="text-gray-500 mb-2">Inversión en tu futuro</p>
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-4xl md:text-5xl font-bold text-[#001F3F]">
                      Desde $50
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">
                    Pago único - Acceso de por vida
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full bg-[#FF8C00] hover:bg-[#e67d00] text-white font-bold text-lg py-6 rounded-xl shadow-lg shadow-[#FF8C00]/30 transition-all duration-300 hover:scale-[1.02]">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      ¡Quiero inscribirme ahora!
                    </Button>
                  </a>

                  <a
                    href="https://instagram.com/masterimport.ve"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button
                      variant="outline"
                      className="w-full border-[#001F3F] text-[#001F3F] hover:bg-[#001F3F] hover:text-white font-semibold py-6 rounded-xl transition-all duration-300"
                    >
                      <Instagram className="w-5 h-5 mr-2" />
                      Síguenos en Instagram
                    </Button>
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-500">
                    ¿Tienes dudas? Escríbenos por WhatsApp y te respondemos al instante.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/60">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-[#FF8C00]" />
              <span>Garantía de satisfacción</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-[#FF8C00]" />
              <span>Pago seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-[#FF8C00]" />
              <span>Soporte 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
