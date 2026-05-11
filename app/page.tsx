import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import LogisticsSolutions from "@/components/LogisticsSolutions";
import Services from "@/components/Services";
import ClientsAndSectors from "@/components/ClientsAndSectors";
import Workflow from "@/components/Workflow";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <LogisticsSolutions />
        <Services />
        <ClientsAndSectors />
        <Workflow />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
