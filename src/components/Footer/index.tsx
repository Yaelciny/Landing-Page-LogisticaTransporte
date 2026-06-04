"use client";

import { motion } from "framer-motion";
import { Truck, Mail, Phone, MapPin } from "lucide-react";
import { siteData } from "@/data/nat";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 md:py-20 relative">
      {/* Decorative gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, #ff5e0c, #7a7a7a, transparent)' }} />
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Columna: Marca */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Image
                src={siteData.logoblanco}
                alt={siteData.brand.name}
                width={120}
                height={120}
                priority
                style={{ width: 'auto', height: 'auto', maxHeight: '56px' }}
              />
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
                    className="text-background/70 hover:text-background transition-colors text-sm"
                    style={{ '--hover-color': '#ff5e0c' } as React.CSSProperties}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ff5e0c')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '')}
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
                <a href="#servicios" className="text-background/70 transition-colors text-sm" onMouseEnter={(e) => (e.currentTarget.style.color = '#ff5e0c')} onMouseLeave={(e) => (e.currentTarget.style.color = '')}>
                  Gestion de envios
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-background/70 transition-colors text-sm" onMouseEnter={(e) => (e.currentTarget.style.color = '#ff5e0c')} onMouseLeave={(e) => (e.currentTarget.style.color = '')}>
                  Coordinacion de rutas
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-background/70 transition-colors text-sm" onMouseEnter={(e) => (e.currentTarget.style.color = '#ff5e0c')} onMouseLeave={(e) => (e.currentTarget.style.color = '')}>
                  Transporte especializado
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-background/70 transition-colors text-sm" onMouseEnter={(e) => (e.currentTarget.style.color = '#ff5e0c')} onMouseLeave={(e) => (e.currentTarget.style.color = '')}>
                  Logistica integrada
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-background/70 transition-colors text-sm" onMouseEnter={(e) => (e.currentTarget.style.color = '#ff5e0c')} onMouseLeave={(e) => (e.currentTarget.style.color = '')}>
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
                <MapPin className="size-8" style={{ color: '#ff5e0c' }} />
                <p>{siteData.contact.address}</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="size-4" style={{ color: '#ff5e0c' }} />
                <a
                  href={`mailto:${siteData.contact.email}`}
                  className="transition-colors"
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ff5e0c')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '')}
                >
                  {siteData.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="size-4" style={{ color: '#ff5e0c' }} />
                <a
                  href={`tel:${siteData.contact.phone}`}
                  className="transition-colors"
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ff5e0c')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '')}
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
