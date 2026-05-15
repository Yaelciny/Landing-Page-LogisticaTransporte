"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/nat";
import Image from "next/image";

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
                className="relative h-80 group overflow-hidden rounded-2xl border border-border transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <Image
                  src={sector.image}
                  alt={sector.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay oscuro degradado para legibilidad del texto */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">{sector.name}</h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
