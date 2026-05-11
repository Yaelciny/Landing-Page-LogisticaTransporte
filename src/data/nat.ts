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
}

export interface FooterData {
  copyright: string;
  tagline: string;
}

export interface SiteData {
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
  name: "Transportes",
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
    },
    {
      id: 2,
      title: "Eficiencia que mantiene su operación en marcha",
      subtitle:
        "Coordinamos cada envío con precisión para cumplir tiempos y optimizar recursos.",
    },
    {
      id: 3,
      title: "Control y confianza en cada traslado",
      subtitle:
        "Monitoreo constante y atención personalizada en cada etapa del proceso.",
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
        },
        {
          id: 2,
          type: "Torton",
          description: "Solución para cargas de mayor volumen.",
        },
        {
          id: 3,
          type: "Plataforma",
          description: "Ideal para maquinaria y estructuras.",
        },
        {
          id: 4,
          type: "Portacontenedores",
          description: "Traslado eficiente desde puerto a destino.",
        },
        {
          id: 5,
          type: "Carga Especializada",
          description: "Manejo de materiales delicados o de cuidado especial.",
        },
      ],
    },
  },
  clients: {
    title: "¿A quién atendemos?",
    description:
      "Nuestra versatilidad nos permite adaptarnos a las exigencias de diversos sectores, garantizando resultados óptimos para cada cliente.",
    sectors: [
      { id: 1, name: "Empresas industriales", icon: Factory },
      { id: 2, name: "Distribuidores", icon: Store },
      { id: 3, name: "Comercializadoras", icon: ShoppingCart },
      { id: 4, name: "Empresas de logística y fletes", icon: Globe2 },
      { id: 5, name: "Requerimientos de transporte especializado", icon: Briefcase },
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
    address: "Hey Hey Studio, León, Guanajuato",
    phone: "477 123 4567",
    email: "ejemplo@gmail.com",
    whatsapp: "#",
    mapPlaceholder: "Mapa de Google Maps",
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} Especialistas en Transportes del Bajío. Todos los derechos reservados.`,
    tagline: "Desarrollado para asegurar su operación.",
  },
};
