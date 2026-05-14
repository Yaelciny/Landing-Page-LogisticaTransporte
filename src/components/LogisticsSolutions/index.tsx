"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/nat";
import Image from "next/image";
import gestionLogistica from "@/assets/logistica/gestion-logistica.png"

export default function LogisticsSolutions() {
  return (
    <section id="soluciones" className="section-padding bg-foreground relative overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Texto descriptivo de la seccion */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-widest text-background/70 uppercase mb-3">
              {siteData.solutions.subtitle}
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-background mb-6 leading-tight">
              {siteData.solutions.title}
            </h3>
            <p className="section-description text-background/70 leading-relaxed mb-8">
              {siteData.solutions.description}
            </p>

            {/* Placeholder de imagen */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative h-64 md:h-80 rounded-4xl overflow-hidden border-dashed flex flex-col items-center justify-center gap-3 hover:scale-105 transition-transform duration-500"
            >
              <Image
                src={gestionLogistica}
                alt="Centro de operaciones logísticas"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center"
              />
            </motion.div>
          </motion.div>

          {/* Tarjetas de soluciones */}
          <div className="grid sm:grid-cols-2 gap-6">
            {siteData.solutions.points.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-background/5 p-6 rounded-2xl border border-background/5 hover:border-primary transition-all group hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="w-16 h-16 bg-background/20 border border-background/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:icon-container-base transition-all shadow-sm">
                    <Icon size={32} className="text-background/70" />
                  </div>
                  <h4 className="text-xl font-bold text-background mb-2">
                    {item.title}
                  </h4>
                  <p className="text-background/70">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
