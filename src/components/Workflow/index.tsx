"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/nat";

export default function Workflow() {
  return (
    <section
      id="trabajo"
      className="section-padding bg-muted border-t border-border"
    >
      <div className="container">
        {/* Encabezado */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-foreground mb-4"
          >
            {siteData.workflow.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-description"
          >
            {siteData.workflow.subtitle}
          </motion.p>
        </div>

        {/* Timeline de pasos */}
        <div className="relative">
          {/* Linea conectora (solo desktop) */}
          <div className="hidden md:block absolute top-[35px] left-0 w-full h-1 bg-border -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {siteData.workflow.steps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-background border-2 border-border rounded-full flex items-center justify-center text-2xl font-bold text-foreground mb-6 group-hover:border-primary group-hover:scale-110 transition-all z-10 shadow-sm">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
