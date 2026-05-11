"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data/nat";
import { CheckCircle } from "lucide-react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Cambia de banner cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % siteData.banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="inicio"
      className="relative pt-20 bg-muted min-h-screen flex flex-col justify-center"
    >
      {/* Carrusel de banners */}
      <div className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Fondo de cuadricula decorativo */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,var(--color-background)_70%,transparent_100%)]"></div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute text-center px-4 max-w-4xl mx-auto z-10"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight leading-tight">
              {siteData.banners[currentSlide].title}
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto">
              {siteData.banners[currentSlide].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Indicadores del carrusel */}
        <div className="absolute bottom-10 flex gap-3 z-10">
          {siteData.banners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === idx
                  ? "bg-primary w-8"
                  : "bg-border hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Seccion inferior: caracteristicas y experiencia */}
      <div className="relative z-20 bg-background border-t border-border py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Tarjetas de caracteristicas */}
            <div className="grid gap-6">
              {siteData.features.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4 p-6 bg-muted rounded-xl border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="p-3 bg-background border border-border rounded-lg shrink-0 icon-container-base">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-foreground font-bold text-xl mb-1">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bloque de experiencia */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-muted p-8 md:p-10 rounded-2xl border border-border"
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                {siteData.experienceTitle}
              </h2>
              <div className="space-y-4">
                {siteData.experience.map((exp) => (
                  <div key={exp.id} className="flex items-center gap-3">
                    <CheckCircle
                      size={20}
                      className="text-primary shrink-0"
                    />
                    <p className="text-foreground/80 text-lg">{exp.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
