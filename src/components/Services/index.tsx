"use client";

import { motion } from "framer-motion";
import { Settings, ArrowRight, Truck } from "lucide-react";
import { siteData } from "@/data/nat";
import Image from "next/image";


export default function Services() {
  return (
    <section
      id="servicios"
      className="section-padding bg-background border-t border-border"
    >
      <div className="container">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-3"
          >
            {siteData.services.subtitle}
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-foreground"
          >
            {siteData.services.title}
          </motion.h3>
        </div>

        {/* Columna: Logistica (fondo claro) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-muted rounded-3xl p-8 md:p-12 border border-border"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-xl border" style={{ backgroundColor: '#ff5e0c1a', borderColor: '#ff5e0c33', color: '#ff5e0c' }}>
                <Settings size={32} />
              </div>
              <h4 className="text-3xl font-bold text-foreground">
                {siteData.services.logistica.title}
              </h4>
            </div>
            <p className="text-muted-foreground mb-8 text-lg">
              {siteData.services.logistica.description}
            </p>
            <ul className="space-y-4">
              {siteData.services.logistica.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <ArrowRight
                    size={20}
                    className="shrink-0 mt-1"
                    style={{ color: '#ff5e0c' }}
                  />
                  <span className="text-foreground/80 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Columna: Transporte info (fondo oscuro) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-foreground text-background rounded-3xl p-8 md:p-12 flex flex-col justify-center relative overflow-hidden"
          >
            {/* Subtle orange accent line at top */}
            <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, #ff5e0c, #7a7a7a, transparent)' }} />
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-background rounded-xl">
                <Truck size={32} className="text-foreground" />
              </div>
              <h4 className="text-3xl font-bold text-background">
                {siteData.services.transporte.title}
              </h4>
            </div>
            <p className="text-background/70 mb-6 text-lg">
              {siteData.services.transporte.description}
            </p>
            <p className="text-background/50 text-sm">
              Contamos con unidades para cada tipo de carga. Explora nuestras opciones a continuación.
            </p>
          </motion.div>
        </div>

        {/* Galeria de tipos de transporte con placeholders de imagen */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteData.services.transporte.types.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative h-80 group overflow-hidden rounded-2xl border border-border transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Placeholder de imagen */}
                <Image
                  src={item.image}
                  alt={item.type}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay oscuro degradado para legibilidad del texto */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">{item.type}</h3>
                  <p className="text-white/70 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
