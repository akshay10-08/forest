"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const bgImages = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.jpeg"
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % bgImages.length);
    }, 3500); // Changes fairly quickly as requested
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[100svh] min-h-[700px] flex flex-col items-center justify-center overflow-hidden bg-[var(--color-forest)]">
      {/* Background Media Slideshow */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentImageIndex}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <Image
            src={bgImages[currentImageIndex]}
            alt="Hero Background"
            fill
            className="object-cover blur-[2px]"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Legibility Stack */}
      <div className="absolute inset-0 z-0 bg-black/25 pointer-events-none" />
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(22,48,31,0.9) 0%, rgba(22,48,31,0.4) 40%, transparent 70%)"
        }}
      />
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at center, rgba(22,48,31,0.5) 0%, transparent 65%)"
        }}
      />

      {/* Hero Content Stack */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-[720px] mx-auto px-6 text-center mt-12">
        
        {/* Logo Crest */}
        <div className="w-32 h-32 md:w-48 md:h-48 mb-6 rounded-full border border-[var(--color-gold)]/40 flex items-center justify-center bg-white/10 backdrop-blur-sm shadow-lg overflow-hidden relative">
          <Image 
            src="/images/logo.png" 
            alt="Royal Forest Resort Logo" 
            fill
            className="object-contain p-2 md:p-4"
          />
        </div>

        {/* Wordmark */}
        <motion.h2 
          className="font-serif text-3xl md:text-5xl font-medium tracking-wide mb-4 text-shadow-gold"
          style={{
            background: "linear-gradient(180deg, #F6E27A, #E0A12E 45%, #B8860B)",
            WebkitBackgroundClip: "text",
            color: "transparent"
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Royal Forest Resort
        </motion.h2>

        {/* Sub-line */}
        <div className="flex items-center space-x-4 mb-6 opacity-90">
          <div className="h-[1px] w-8 md:w-12 bg-[var(--color-gold)]" />
          <span className="text-[8px] md:text-[10px] tracking-[0.3em] uppercase text-[var(--color-ivory)]">
            Mandhana · Bithoor Road, Kanpur
          </span>
          <div className="h-[1px] w-8 md:w-12 bg-[var(--color-gold)]" />
        </div>

        {/* Headline */}
        <motion.h1 
          className="font-serif text-[clamp(2.25rem,4.8vw,3.75rem)] leading-[1.12] tracking-[-0.01em] text-[var(--color-ivory)] text-shadow-hero mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Where <span className="text-[var(--color-gold)] italic">Nature</span> Meets Luxury.
        </motion.h1>

        {/* Eyebrow stat line */}
        <motion.p 
          className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[var(--color-ivory)]/85 mb-8 text-shadow-hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Nature Resort · Garden Cottages · One of Kanpur&apos;s Largest Pools
        </motion.p>

        {/* CTAs */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button className="w-full sm:w-auto uppercase text-xs md:text-sm tracking-widest px-8 py-3.5 rounded-full bg-[var(--color-gold)] text-white hover:bg-[var(--color-gold-soft)] hover:text-[var(--color-forest)] transition-all shadow-lg font-medium">
            Plan Your Event
          </button>
          <button className="w-full sm:w-auto uppercase text-xs md:text-sm tracking-widest px-8 py-3.5 rounded-full border border-[var(--color-ivory)]/40 text-[var(--color-ivory)] hover:bg-white/10 transition-all backdrop-blur-sm">
            Book a Stay
          </button>
        </motion.div>
      </div>
    </section>
  );
}
