"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data/nat";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const banners = siteData.banners;

  const next = useCallback(
    () => setCurrent((prev) => (prev + 1) % banners.length),
    [banners.length]
  );
  const prev = useCallback(
    () => setCurrent((prev) => (prev - 1 + banners.length) % banners.length),
    [banners.length]
  );

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <section
      id="inicio"
      className="relative h-dvh overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Imagen de fondo con crossfade */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9 }}
          className="absolute inset-0"
        >
          <Image
            src={banners[current].image}
            alt={banners[current].title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        </motion.div>
      </AnimatePresence>

      {/* Contenido centrado — pt compensa la altura del navbar fijo */}
      <div className="relative z-10 h-full flex items-center justify-center pt-16 md:pt-20">
        <div className="container">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 drop-shadow-lg">
              {banners[current].title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-200 max-w-3xl mx-auto mb-8 md:mb-10 drop-shadow-md">
              {banners[current].subtitle}
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("contacto")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg transition-all hover:scale-105 hover:shadow-primary active:scale-95"
            >
              Cotizar ahora
            </button>
          </motion.div>
        </div>
      </div>

      {/* Flechas de navegacion */}
      <button
        onClick={prev}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm transition-all"
        aria-label="Banner anterior"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm transition-all"
        aria-label="Siguiente banner"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${i === current
              ? "bg-primary w-8 sm:w-10 h-2.5 sm:h-3"
              : "bg-white/40 hover:bg-white/60 w-2.5 sm:w-3 h-2.5 sm:h-3"
              }`}
            aria-label={`Ir al banner ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
