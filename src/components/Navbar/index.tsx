"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data/nat";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Menu, X, Truck } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false); // Estado del menu mobile

  // Cierra menu y hace scroll suave a la seccion destino
  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border"
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo y nombre de la empresa */}
            <motion.a
              href="#inicio"
              className="flex items-center gap-2 group"
              onClick={(e) => {
                e.preventDefault();
                handleNav("#inicio");
              }}
            >
              <div className="flex flex-col">
                <Image
                  src={siteData.logo}
                  alt={siteData.brand.name}
                  width={100}
                  height={100}
                  priority
                  className="object-contain"
                />
              </div>
            </motion.a>

            {/* Navegacion desktop */}
            <nav className="hidden lg:flex items-center gap-8">
              {siteData.navLinks.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(item.href);
                  }}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: "#ff5e0c" }} />
                </motion.a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              {/* Boton CTA - solo desktop */}
              <Button
                variant="default"
                className="hidden lg:flex text-white border-0"
                style={{ backgroundColor: "#ff5e0c" }}
                onClick={() => handleNav("#contacto")}
              >
                Cotizar ahora
              </Button>

              {/* Boton hamburguesa - solo mobile */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setOpen(!open)}
              >
                {open ? <X className="size-5" /> : <Menu className="size-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Menu mobile desplegable */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-card border-t border-border overflow-hidden"
            >
              <nav className="container px-4 py-4 flex flex-col gap-2">
                {siteData.navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(link.href);
                    }}
                    className="py-3 px-4 text-foreground hover:bg-muted rounded-lg transition-colors text-left"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Overlay oscuro cuando el menu mobile esta abierto */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
            style={{ top: "64px" }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
