"use client";

import { motion } from "framer-motion";
import { Placeholder } from "@/components/ui/Placeholder";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CottagesShowcase() {
  const cottages = [
    {
      id: "garden-cottage",
      name: "Garden Cottage",
      tag: "Garden-View",
      desc: "For couples & solo travellers",
      bullets: ["Private sit-out", "Ensuite bath", "Direct garden access"],
      imageLabel: "Garden Cottage Image",
      image: "/images/b.png"
    },
    {
      id: "premium-cottage",
      name: "Premium Cottage",
      tag: "Extra Space",
      desc: "For families & extended stays",
      bullets: ["Spacious layout", "Panoramic windows", "Premium amenities"],
      imageLabel: "Premium Cottage Image",
      image: "/images/c.png"
    }
  ];

  return (
    <section className="py-24 bg-[var(--color-cream)]">
      <div className="max-w-[1024px] mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)] mb-4 block font-semibold">Stay</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-forest)]">Garden Cottages</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 md:mt-0"
          >
            <Link href="/stay" className="uppercase text-xs tracking-widest px-6 py-3 rounded-full border border-[var(--color-forest)]/20 text-[var(--color-forest)] hover:bg-[var(--color-forest)]/5 transition-colors">
              View All Accommodations
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {cottages.map((cottage, idx) => (
            <motion.div 
              key={cottage.id}
              className="group flex flex-col cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <Placeholder src={cottage.image} label={cottage.imageLabel} ratio="4/3" className="h-full group-hover:scale-105 transition-transform duration-1000 ease-[0.22,1,0.36,1]" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-[var(--color-forest)] font-semibold shadow-sm">
                  {cottage.tag}
                </div>
              </div>
              
              <div className="flex flex-col flex-1 px-2">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-2xl text-[var(--color-forest)]">{cottage.name}</h3>
                  <span className="text-[var(--color-muted)] text-sm italic">{cottage.desc}</span>
                </div>
                
                <ul className="flex flex-wrap gap-x-4 gap-y-2 mb-6 text-sm text-[var(--color-muted)] opacity-80">
                  {cottage.bullets.map((b, i) => (
                    <li key={i} className="flex items-center before:content-['·'] before:mr-2 before:text-[var(--color-gold)]">
                      {b}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto flex items-center justify-between border-t border-[var(--color-gold)]/20 pt-4">
                  <Link href={`/stay/${cottage.id}`} className="group/link inline-flex items-center text-sm uppercase tracking-widest text-[var(--color-forest)] font-medium">
                    <span className="relative">
                      View Cottage
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--color-gold)] transition-all duration-300 group-hover/link:w-full" />
                    </span>
                    <ArrowRight size={16} className="ml-2 text-[var(--color-gold)] transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                  <button className="text-xs uppercase tracking-widest text-[var(--color-gold)] hover:text-[var(--color-forest)] transition-colors">
                    Book a Stay
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
