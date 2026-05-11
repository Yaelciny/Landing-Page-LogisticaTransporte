"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/nat";

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

        {/* Tarjetas de sectores */}
        <div className="flex flex-wrap justify-center gap-6">
          {siteData.clients.sectors.map((sector, idx) => {
            const Icon = sector.icon;
            return (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-muted border border-border p-8 rounded-2xl flex flex-col items-center text-center w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] hover:border-primary hover:shadow-md transition-all group hover:-translate-y-1"
              >
                <div className="mb-4 text-primary group-hover:scale-110 transition-transform">
                  <Icon size={32} />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {sector.name}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
