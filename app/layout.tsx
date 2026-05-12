import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteData } from "@/data/nat";

const SITE_URL = "https://www.especialistasentransportesdelbajio.com";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteData.siteName,
    template: `%s | ${siteData.brand.name} ${siteData.brand.suffix}`,
  },
  description: siteData.siteDescription,
  keywords: [
    "transporte del Bajío",
    "logística Guanajuato",
    "transporte de carga México",
    "fletes León Guanajuato",
    "caja seca",
    "torton",
    "plataforma",
    "portacontenedores",
    "carga especializada",
    "distribución inteligente",
    "logística integral",
    "servicio de transporte",
  ],
  openGraph: {
    title: siteData.siteName,
    description: siteData.siteDescription,
    url: SITE_URL,
    siteName: siteData.siteName,
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.siteName,
    description: siteData.siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteData.siteName,
  description: siteData.siteDescription,
  url: SITE_URL,
  telephone: siteData.contact.phone,
  email: siteData.contact.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "León",
    addressRegion: "Guanajuato",
    addressCountry: "MX",
  },
  sameAs: [
    `https://wa.me/${siteData.contact.whatsapp.replace(/[^0-9]/g, "")}`,
  ],
  areaServed: "México",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Logística y Transporte",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Transporte en Caja Seca",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Transporte en Torton",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Transporte en Plataforma",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Transporte Portacontenedores",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Carga Especializada",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <head>
        <meta name="geo.region" content="MX-GUA" />
        <meta name="geo.placename" content="León, Guanajuato" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
