import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappNumber = "584224517053";
  const whatsappMessage = encodeURIComponent(
    "¡Hola! Vi tu página web y estoy interesado en Master Import.ve. ¿Me puedes dar más información?"
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contactar por WhatsApp"
    >
      {/* Pulse Effect */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25" />
      
      {/* Button */}
      <div className="relative w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-green-500/40">
        <MessageCircle className="w-8 h-8 text-white" />
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-[#001F3F] text-white text-sm font-medium px-4 py-2 rounded-lg whitespace-nowrap shadow-lg">
          ¡Escríbenos!
          <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-[#001F3F]" />
        </div>
      </div>
    </a>
  );
}
