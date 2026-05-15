"use client";

import { motion } from "framer-motion";
import { Truck, Mail, Phone, MapPin } from "lucide-react";
import { siteData } from "@/data/nat";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Columna: Marca */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-background text-foreground">
                <Truck size={24} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm leading-tight uppercase tracking-wider text-background">
                  {siteData.brand.name}
                </span>
                <span className="text-xs tracking-widest uppercase text-background/60">
                  {siteData.brand.suffix}
                </span>
              </div>
            </div>
            <p className="text-sm text-background/60">{siteData.siteDescription}</p>
          </motion.div>

          {/* Columna: Navegacion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Navegacion</h4>
            <ul className="space-y-2">
              {siteData.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                    style={{ "--primary": "white" } as React.CSSProperties}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Columna: Servicios */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Nuestros Servicios</h4>
            <ul className="space-y-2">
              <li>
                <a href="#servicios" className="text-background/70 hover:text-primary transition-colors text-sm" style={{ "--primary": "white" } as React.CSSProperties}>
                  Gestion de envios
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-background/70 hover:text-primary transition-colors text-sm" style={{ "--primary": "white" } as React.CSSProperties}>
                  Coordinacion de rutas
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-background/70 hover:text-primary transition-colors text-sm" style={{ "--primary": "white" } as React.CSSProperties}>
                  Transporte especializado
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-background/70 hover:text-primary transition-colors text-sm" style={{ "--primary": "white" } as React.CSSProperties}>
                  Logistica integrada
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-background/70 hover:text-primary transition-colors text-sm" style={{ "--primary": "white" } as React.CSSProperties}>
                  Atencion personalizada
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Columna: Contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-sm text-background/70">
              <div className="flex items-center gap-2">
                <MapPin className="size-4" style={{ color: "white" }} />
                <p>{siteData.contact.address}</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="size-4" style={{ color: "white" }} />
                <a
                  href={`mailto:${siteData.contact.email}`}
                  className="hover:text-primary transition-colors"
                  style={{ "--primary": "white" } as React.CSSProperties}
                >
                  {siteData.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="size-4" style={{ color: "white" }} />
                <a
                  href={`tel:${siteData.contact.phone}`}
                  className="hover:text-primary transition-colors"
                  style={{ "--primary": "white" } as React.CSSProperties}
                >
                  {siteData.contact.phone}
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-background/10 text-center text-background/50 text-sm"
        >
          <p>{siteData.footer.copyright}</p>
        </motion.div>
      </div>
    </footer>
  );
}
