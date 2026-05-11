"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { siteData } from "@/data/nat";

export default function Contact() {
  return (
    <section id="contacto" className="section-padding bg-muted">
      <div className="container">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-foreground mb-4"
          >
            {siteData.contact.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-description"
          >
            {siteData.contact.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informacion de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background p-8 md:p-12 rounded-3xl border border-border shadow-sm"
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">
              {siteData.contact.infoTitle}
            </h3>

            <div className="space-y-6 mb-12">
              {/* Direccion */}
              <div className="flex items-start gap-4">
                <div className="mt-1 p-3 bg-muted rounded-xl shrink-0 icon-container-base">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">
                    Ubicacion
                  </h4>
                  <p className="text-muted-foreground">
                    {siteData.contact.address}
                  </p>
                </div>
              </div>

              {/* Telefono */}
              <div className="flex items-start gap-4">
                <div className="mt-1 p-3 bg-muted rounded-xl shrink-0 icon-container-base">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">
                    Telefono
                  </h4>
                  <a
                    href={`tel:${siteData.contact.phone}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {siteData.contact.phone}
                  </a>
                </div>
              </div>

              {/* Correo */}
              <div className="flex items-start gap-4">
                <div className="mt-1 p-3 bg-muted rounded-xl shrink-0 icon-container-base">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">
                    Correo
                  </h4>
                  <a
                    href={`mailto:${siteData.contact.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {siteData.contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Boton WhatsApp */}
            <a
              href={siteData.contact.whatsapp}
              className="inline-flex items-center justify-center gap-2 w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-colors shadow-md"
            >
              <MessageCircle size={24} />
              Cotizar por WhatsApp
            </a>
          </motion.div>

          {/* Placeholder del mapa */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[400px] lg:h-auto bg-border rounded-3xl overflow-hidden border border-border relative"
          >
            <div className="absolute inset-0 flex items-center justify-center flex-col text-muted-foreground bg-muted">
              <MapPin size={48} className="mb-4 opacity-50" />
              <p className="font-medium">{siteData.contact.mapPlaceholder}</p>
              <p className="text-sm">(Insertar iframe aqui)</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
