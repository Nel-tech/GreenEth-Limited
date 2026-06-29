import Navbar from "../components/landing/nav";
import Hero from "../components/landing/Hero";
import About from "../components/landing/About";
import Services from "../components/landing/Services";
import Products from "../components/landing/products";
import Contact from "../components/landing/Contact";
import Footer from "../components/landing/footer";
import WhatsAppBtn from "../components/ui/WhatsAppBtn";

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#F7F5EF] font-sans selection:bg-[#C8922A] selection:text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Contact />
      </main>

      <Footer />
      <WhatsAppBtn />
    </div>
  );
}