"use client";

import { motion } from "framer-motion";
import { ChevronRight, ChevronDown } from "lucide-react";
import { siteData } from "@/data/nat";

export default function Workflow() {
  const steps = siteData.workflow.steps;

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
          {/* Línea conectora horizontal con gradiente (solo desktop) */}
          <div
            className="hidden md:block absolute top-[32px] left-[10%] right-[10%] h-[2px] -translate-y-1/2 z-0"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, #ff5e0c 15%, #7a7a7a 50%, #ff5e0c 85%, transparent 100%)",
              opacity: 0.4,
            }}
          />

          {/* Línea conectora vertical con gradiente (solo móvil) */}
          <div
            className="md:hidden absolute top-0 bottom-0 left-1/2 w-[2px] -translate-x-1/2 z-0"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, #ff5e0c 5%, #7a7a7a 50%, #ff5e0c 95%, transparent 100%)",
              opacity: 0.4,
            }}
          />

          <div className="flex flex-col md:grid md:grid-cols-5 gap-0 md:gap-0 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Chevron conector horizontal (solo desktop, no en el ultimo) */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-[32px] -right-[12px] -translate-y-1/2 z-20 items-center justify-center w-6 h-6 rounded-full bg-muted">
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                )}

                {/* Circulo del paso */}
                <div
                  className="w-16 h-16 bg-background border-2 border-border rounded-full flex items-center justify-center text-2xl font-bold text-foreground mb-4 group-hover:shadow-md group-hover:scale-110 transition-all z-10 shadow-sm"
                  style={{ '--hover-color': '#ff5e0c' } as React.CSSProperties}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#ff5e0c';
                    e.currentTarget.style.color = '#ff5e0c';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '';
                    e.currentTarget.style.color = '';
                  }}
                >
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground max-w-[200px]">
                  {step.description}
                </p>

                {/* Chevron conector vertical (solo movil, no en el ultimo) */}
                {idx < steps.length - 1 && (
                  <div className="flex md:hidden items-center justify-center w-8 h-8 my-3 rounded-full bg-muted z-10">
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


