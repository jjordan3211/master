import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ModuloChina from "./sections/ModuloChina";
import ModuloUSA from "./sections/ModuloUSA";
import LogisticaPro from "./sections/LogisticaPro";
import FinanzasPagos from "./sections/FinanzasPagos";
import Inscripcion from "./sections/Inscripcion";
import Footer from "./sections/Footer";
import WhatsAppButton from "./sections/WhatsAppButton";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <ModuloChina />
        <ModuloUSA />
        <LogisticaPro />
        <FinanzasPagos />
        <Inscripcion />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
