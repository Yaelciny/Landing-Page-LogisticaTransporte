// Imagenes principales del sitio
import { StaticImageData } from "next/image";
import banner1 from "@/assets/banners/Banner-1.webp";
import banner2 from "@/assets/banners/Banner-2.webp";
import banner3 from "@/assets/banners/Banner-3.webp";
import servicio1 from "@/assets/servicios/caja-seca.webp";
import servicio2 from "@/assets/servicios/carga-especializada.webp";
import servicio3 from "@/assets/servicios/plataformas.webp";
import servicio4 from "@/assets/servicios/portacontenedores.webp";
import servicio5 from "@/assets/servicios/torton.webp";
import sector1 from "@/assets/sectores/Distribuidora.webp";
import sector2 from "@/assets/sectores/Industrial.webp";
import sector3 from "@/assets/sectores/Comercializadora.webp";
import sector4 from "@/assets/sectores/Logistica-fletes.webp";
import sector5 from "@/assets/sectores/transporte.webp";
import logo from "@/assets/logo/logo.webp"
import logoblanco from "@/assets/logo/logoblanco.webp"


// Datos principales del sitio - edita aqui los textos e iconos de la pagina
import {
  Clock,
  ShieldCheck,
  CheckCircle,
  Map,
  Zap,
  Activity,
  Box,
  Factory,
  Store,
  ShoppingCart,
  Globe2,
  Briefcase,
  Target,
  TrendingUp,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";


// Interfaces que definen la estructura de cada tipo de dato
export interface Brand {
  name: string;
  suffix: string;
  full: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Banner {
  id: number;
  title: string;
  subtitle: string;
  image: StaticImageData;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ExperienceItem {
  id: number;
  text: string;
}

export interface AboutCard {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface AboutSection {
  title: string;
  description: string;
  cards: AboutCard[];
}

export interface Solution {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface SolutionsSection {
  subtitle: string;
  title: string;
  description: string;
  points: Solution[];
}

export interface TransportType {
  id: number;
  type: string;
  description: string;
  image: StaticImageData;
}

export interface ServicesSection {
  subtitle: string;
  title: string;
  logistica: {
    title: string;
    description: string;
    items: string[];
  };
  transporte: {
    title: string;
    description: string;
    types: TransportType[];
  };
}

export interface Sector {
  id: number;
  name: string;
  icon: LucideIcon;
  image: StaticImageData;
}

export interface ClientsSection {
  title: string;
  description: string;
  sectors: Sector[];
}

export interface WorkflowStep {
  id: number;
  num: string;
  title: string;
  description: string;
}

export interface WorkflowSection {
  title: string;
  subtitle: string;
  steps: WorkflowStep[];
}

export interface ContactInfo {
  title: string;
  subtitle: string;
  infoTitle: string;
  address: string;
  phone: string;
  email: string;
  whatsapp: string;
  mapPlaceholder: string;
  mapUrl: string;
}

export interface FooterData {
  copyright: string;
  tagline: string;
}

export interface SiteData {
  logo: StaticImageData;
  logoblanco: StaticImageData;
  brand: Brand;
  siteName: string;
  siteDescription: string;
  navLinks: NavLink[];
  banners: Banner[];
  features: Feature[];
  experienceTitle: string;
  experience: ExperienceItem[];
  about: AboutSection;
  solutions: SolutionsSection;
  services: ServicesSection;
  clients: ClientsSection;
  workflow: WorkflowSection;
  contact: ContactInfo;
  footer: FooterData;
}

// === DATOS EDITABLES ===
// Cambia aqui los textos, enlaces, telefonos, etc. de toda la pagina
export const brand: Brand = {
  name: "Especialistas en Transportes",
  suffix: "Del Bajío",
  full: "Especialistas en Transportes del Bajío",
};

export const navLinks: NavLink[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre Nosotros", href: "#nosotros" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Servicios", href: "#servicios" },
  { label: "Clientes", href: "#clientes" },
  { label: "Forma de Trabajo", href: "#trabajo" },
  { label: "Contacto", href: "#contacto" },
];

// Objeto principal que agrupa todos los datos del sitio
export const siteData: SiteData = {
  logo,
  logoblanco,
  brand,
  siteName: brand.full,
  siteDescription:
    "Soluciones integrales en logística y transporte para mover su operación con seguridad y eficiencia en todo México.",
  navLinks,
  banners: [
    {
      id: 1,
      title: "Especialistas en Transportes del Bajío",
      subtitle:
        "Soluciones integrales en logística y transporte para mover su operación con seguridad y eficiencia en todo México.",
      image: banner1,
    },
    {
      id: 2,
      title: "Eficiencia que mantiene su operación en marcha",
      subtitle:
        "Coordinamos cada envío con precisión para cumplir tiempos y optimizar recursos.",
      image: banner2,
    },
    {
      id: 3,
      title: "Control y confianza en cada traslado",
      subtitle:
        "Monitoreo constante y atención personalizada en cada etapa del proceso.",
      image: banner3,
    },
  ],
  features: [
    {
      id: 1,
      title: "Coordinación Eficiente",
      description: "Planeación estratégica en cada envío.",
      icon: Clock,
    },
    {
      id: 2,
      title: "Monitoreo Continuo",
      description: "Seguimiento en tiempo real de su mercancía.",
      icon: ShieldCheck,
    },
    {
      id: 3,
      title: "Seguridad Operativa",
      description: "Protocolos que garantizan el cuidado de su carga.",
      icon: CheckCircle,
    },
  ],
  experienceTitle: "Experiencia, Confianza y Rapidez",
  experience: [
    { id: 1, text: "Atención para empresas, distribuidores y clientes particulares." },
    { id: 2, text: "Integración de soluciones logísticas y de transporte." },
    { id: 3, text: "Adaptabilidad a distintos tipos de carga y operación." },
    { id: 4, text: "Servicio profesional enfocado en resultados." },
  ],
  about: {
    title: brand.full,
    description:
      "Somos una empresa enfocada en brindar soluciones integrales de logística y transporte, facilitando el movimiento eficiente de mercancías en el Bajío y a nivel nacional. Nos posicionamos como un aliado estratégico que asegura la continuidad operativa de nuestros clientes.",
    cards: [
      {
        id: 1,
        title: "Nuestra Misión",
        description:
          "Optimizar cada proceso logístico y de transporte mediante soluciones confiables, seguras y eficientes que permitan a nuestros clientes enfocarse en el crecimiento de su negocio.",
        icon: Target,
      },
      {
        id: 2,
        title: "Trayectoria",
        description:
          "Contamos con experiencia en rutas y operaciones a nivel nacional, atendiendo diversos sectores con un enfoque en puntualidad, control y cumplimiento.",
        icon: TrendingUp,
      },
      {
        id: 3,
        title: "Valor Agregado",
        description:
          "No solo trasladamos mercancía, diseñamos soluciones. Analizamos cada operación para optimizar tiempos, costos y recursos, garantizando eficiencia en cada envío.",
        icon: Lightbulb,
      },
    ],
  },
  solutions: {
    subtitle: "Soluciones Logísticas",
    title: "Gestión Estratégica de Logística",
    description:
      "Entendemos que la logística es clave para la continuidad operativa. Por ello, desarrollamos estrategias que permiten anticipar, coordinar y optimizar cada movimiento.",
    points: [
      {
        id: 1,
        title: "Optimización de rutas",
        description: "Análisis estratégico para mejorar tiempos y reducir costos.",
        icon: Map,
      },
      {
        id: 2,
        title: "Logística de respuesta rápida",
        description: "Capacidad de reacción ante requerimientos urgentes.",
        icon: Zap,
      },
      {
        id: 3,
        title: "Seguimiento en tiempo real",
        description: "Control constante de cada envío.",
        icon: Activity,
      },
      {
        id: 4,
        title: "Distribución inteligente",
        description: "Planeación basada en volumen, tipo de carga y destino.",
        icon: Box,
      },
    ],
  },
  services: {
    subtitle: "Nuestros Servicios",
    title: "Logística y Transporte",
    logistica: {
      title: "Logística",
      description:
        "Planeación y Coordinación Operativa para garantizar el éxito de su cadena de suministro.",
      items: [
        "Gestión integral de envíos",
        "Coordinación de rutas y tiempos de entrega",
        "Optimización de recursos logísticos",
        "Seguimiento y control de operaciones",
        "Soluciones adaptadas a cada cliente",
      ],
    },
    transporte: {
      title: "Transporte",
      description:
        "Infraestructura y Tipos de Unidad adaptados a las necesidades de su carga.",
      types: [
        {
          id: 1,
          type: "Caja Seca",
          description: "Transporte de mercancía general con protección total.",
          image: servicio1
        },
        {
          id: 2,
          type: "Torton",
          description: "Solución para cargas de mayor volumen.",
          image: servicio5
        },
        {
          id: 3,
          type: "Plataforma",
          description: "Ideal para maquinaria y estructuras.",
          image: servicio3
        },
        {
          id: 4,
          type: "Portacontenedores",
          description: "Traslado eficiente desde puerto a destino.",
          image: servicio4
        },
        {
          id: 5,
          type: "Carga Especializada",
          description: "Manejo de materiales delicados o de cuidado especial.",
          image: servicio2
        },
      ],
    },
  },
  clients: {
    title: "¿A quién atendemos?",
    description:
      "Nuestra versatilidad nos permite adaptarnos a las exigencias de diversos sectores, garantizando resultados óptimos para cada cliente.",
    sectors: [
      {
        id: 1,
        name: "Empresas industriales",
        icon: Factory,
        image: sector2
      },
      {
        id: 2,
        name: "Distribuidores",
        icon: Store,
        image: sector1
      },
      {
        id: 3,
        name: "Comercializadoras",
        icon: ShoppingCart,
        image: sector3
      },
      {
        id: 4,
        name: "Empresas de logística y fletes",
        icon: Globe2,
        image: sector4
      },
      {
        id: 5,
        name: "Requerimientos de transporte especializado",
        icon: Briefcase,
        image: sector5
      },
    ],
  },
  workflow: {
    title: "¿Cómo operamos?",
    subtitle: "Nuestra forma de trabajo paso a paso",
    steps: [
      {
        id: 1,
        num: "01",
        title: "Recepción de solicitud",
        description: "Contacto inicial para conocer sus necesidades logísticas.",
      },
      {
        id: 2,
        num: "02",
        title: "Análisis de carga y requerimientos",
        description: "Evaluación detallada para determinar la mejor solución.",
      },
      {
        id: 3,
        num: "03",
        title: "Planeación logística",
        description:
          "Selección del vehículo ideal y trazado de ruta óptima.",
      },
      {
        id: 4,
        num: "04",
        title: "Seguimiento del traslado",
        description: "Monitoreo constante desde el origen hasta el destino.",
      },
      {
        id: 5,
        num: "05",
        title: "Entrega puntual y segura",
        description:
          "Confirmación de entrega cumpliendo con los estándares acordados.",
      },
    ],
  },
  contact: {
    title: "Contacto",
    subtitle: "Estamos listos para mover su operación.",
    infoTitle: "Información de Contacto",
    address: "Blvd. Brisa de Sarandi #315 Col. Brisas del Campestre CP 37669 León, Gto.",
    phone: "479 428 8704",
    email: "ventas@etbtrucking.com.mx",
    whatsapp: "#",
    mapPlaceholder: "Mapa de Google Maps",
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.390133063356!2d-101.7658604883323!3d21.17665548042865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bc6dcb105c5c7%3A0x752b84dba73e2af4!2sBlvd.%20Brisa%20de%20Sarand%C3%AD%20315%2C%2037669%20Le%C3%B3n%20de%20los%20Aldama%2C%20Gto.!5e0!3m2!1ses-419!2smx!4v1779818585533!5m2!1ses-419!2smx',
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} Especialistas en Transportes del Bajío. Todos los derechos reservados.`,
    tagline: "Desarrollado para asegurar su operación.",
  },
};
