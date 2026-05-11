"use client";

import { motion } from "framer-motion";
import { PackageSearch, Settings, ArrowRight, Truck } from "lucide-react";
import { siteData } from "@/data/nat";

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Columna: Logistica (fondo claro) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-muted rounded-3xl p-8 md:p-12 border border-border"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-background border border-border rounded-xl icon-container-base">
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
                    className="text-primary shrink-0 mt-1"
                  />
                  <span className="text-foreground/80 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Columna: Transporte (fondo oscuro) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-foreground text-background rounded-3xl p-8 md:p-12"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-background rounded-xl">
                <Truck size={32} className="text-foreground" />
              </div>
              <h4 className="text-3xl font-bold text-background">
                {siteData.services.transporte.title}
              </h4>
            </div>
            <p className="text-background/70 mb-8 text-lg">
              {siteData.services.transporte.description}
            </p>
            <div className="grid gap-6">
              {siteData.services.transporte.types.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 rounded-xl hover:bg-background/10 transition-colors border border-transparent hover:border-background/20"
                >
                  <div className="mt-1">
                    <PackageSearch size={24} className="text-background" />
                  </div>
                  <div>
                    <h5 className="font-bold text-background text-lg mb-1">
                      {item.type}
                    </h5>
                    <p className="text-background/60">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
