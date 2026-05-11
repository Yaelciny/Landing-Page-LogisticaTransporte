import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";

// Carga diferida (lazy) de secciones para mejorar rendimiento
const Hero = dynamic(() => import("@/components/Hero"));
const About = dynamic(() => import("@/components/About"));
const LogisticsSolutions = dynamic(() => import("@/components/LogisticsSolutions"));
const Services = dynamic(() => import("@/components/Services"));
const ClientsAndSectors = dynamic(() => import("@/components/ClientsAndSectors"));
const Workflow = dynamic(() => import("@/components/Workflow"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));

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
    </>
  );
}
