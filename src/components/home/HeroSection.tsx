"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section 
      className="relative min-h-[90vh] flex items-start lg:items-center bg-navy-700 overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/images/hero/hero-bg.png')" }}
    >
      {/* Theme-tinted overlay — color from theme, image still visible */}
      <div className="absolute inset-0 hero-overlay z-0" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8 pt-36 pb-12 lg:py-0 w-full z-10">
        {/* Mobile stamp — hidden here, moved to absolute position below */}

        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-white/15 border border-white/25 text-white px-5 py-1.5 rounded-full text-body-sm font-semibold mb-6 backdrop-blur-md"
          >
            Cairo University
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-white text-h1 sm:text-display lg:text-display-xl tracking-tight leading-tight"
          >
            Welcome to the Faculty of{" "}
            <span className="hero-accent-text font-serif italic font-normal">Engineering</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-h4 lg:text-h3 text-white/80 leading-relaxed font-sans font-light"
          >
            Empowering the future generation of engineers with innovation, knowledge, and excellence since 1816. Sixteen specialized departments shaping tomorrow.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Button href="/departments" size="lg" className="hero-cta-primary bg-gold-400 hover:bg-white hover:text-navy-700!">
              Explore Programs
            </Button>
            <Button
              href="/study"
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white hover:text-navy-700"
            >
              Study at CUFE
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mobile stamp — top right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 150 }}
        className="lg:hidden absolute right-4 top-4 z-20"
      >
        <Image
          src="/images/rank/rank-stamp_yellow_solid.png"
          alt="Ranked No. 1 in Africa — Faculty of Engineering, Cairo University"
          width={160}
          height={160}
          className="w-32 sm:w-36 h-auto drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] rotate-10"
          priority
        />
      </motion.div>

      {/* Tablet stamp — bottom right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.5, type: "spring", stiffness: 150 }}
        className="hidden lg:block xl:hidden absolute right-12 top-1/2 -translate-y-1/2 z-20"
      >
        <Image
          src="/images/rank/rank-stamp_yellow_solid.png"
          alt="Ranked No. 1 in Africa — Faculty of Engineering, Cairo University"
          width={176}
          height={176}
          className="w-48 h-auto drop-shadow-[0_0_25px_rgba(255,255,255,0.3)] rotate-10"
        />
      </motion.div>

      {/* Desktop stamp — vertically centered right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.5, type: "spring", stiffness: 150 }}
        className="hidden xl:block absolute right-48 top-1/2 -translate-y-1/2 z-20"
      >
        <Image
          src="/images/rank/rank-stamp_yellow_solid.png"
          alt="Ranked No. 1 in Africa — Faculty of Engineering, Cairo University"
          width={240}
          height={240}
          className="w-52 h-auto drop-shadow-[0_0_25px_rgba(255,255,255,0.3)] rotate-10"
          priority
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="h-6 w-6 text-white/40 animate-bounce" />
      </motion.div>
    </section>
  );
}
