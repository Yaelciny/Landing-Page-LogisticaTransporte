"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/nat";

export default function About() {
  return (
    <section id="nosotros" className="section-padding bg-background">
      <div className="container">
        {/* Encabezado de la seccion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header-wrapper"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 uppercase tracking-tight">
            {siteData.about.title}
          </h2>
          <p className="section-description max-w-4xl mx-auto font-light leading-relaxed">
            {siteData.about.description}
          </p>
        </motion.div>

        {/* Tarjetas: Mision, Trayectoria, Valor Agregado */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteData.about.cards.map((card, idx) => {
            const Icon = card.icon;
            const isDark = idx === 1; // La tarjeta del medio tiene fondo oscuro
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * (idx + 1) }}
                className={`p-8 rounded-2xl transition-all group hover:-translate-y-1 ${
                  isDark
                    ? "bg-foreground text-background border border-foreground hover:shadow-lg"
                    : "bg-muted border border-border hover:shadow-md"
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${
                    isDark
                      ? "bg-background text-foreground"
                      : "bg-background border border-border icon-container-base"
                  }`}
                >
                  <Icon
                    size={28}
                    className={isDark ? "text-foreground" : ""}
                  />
                </div>
                <h3
                  className={`text-2xl font-bold mb-4 ${
                    isDark ? "text-background" : "text-foreground"
                  }`}
                >
                  {card.title}
                </h3>
                <p
                  className={`leading-relaxed ${
                    isDark ? "text-background/80" : "text-muted-foreground"
                  }`}
                >
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
