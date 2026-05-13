"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/nat";
import { ImageIcon } from "lucide-react";

export default function ClientsAndSectors() {
  return (
    <section id="clientes" className="section-padding bg-background">
      <div className="container">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-foreground mb-6"
          >
            {siteData.clients.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-description max-w-2xl mx-auto"
          >
            {siteData.clients.description}
          </motion.p>
        </div>

        {/* Tarjetas de sectores con placeholders de imagen */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.clients.sectors.map((sector, idx) => {
            const Icon = sector.icon;
            return (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group overflow-hidden rounded-2xl border border-border hover:shadow-lg transition-all hover:-translate-y-1"
              >
                {/* Placeholder de imagen */}
                <div className="relative h-48 bg-muted border-b border-border flex flex-col items-center justify-center gap-3">
                  <ImageIcon size={48} className="text-muted-foreground/40" />
                  <p className="text-sm text-muted-foreground/60 font-medium">Imagen: {sector.name}</p>
                </div>

                {/* Contenido */}
                <div className="p-6 bg-background flex items-center gap-4">
                  <div className="p-3 bg-muted rounded-xl border border-border shrink-0 group-hover:scale-110 transition-transform icon-container-base">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground leading-tight">
                    {sector.name}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
