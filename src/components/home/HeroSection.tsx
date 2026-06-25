"use client";

import { motion } from "framer-motion";
import { ChevronDown, Trophy } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section
      className="relative min-h-[70vh] min-[500px]:min-h-[85vh] sm:min-h-[90vh] flex items-start lg:items-center bg-navy-700 overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
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

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-4 sm:pb-56 md:pb-64 lg:pb-12 lg:py-0 w-full z-15">
        <div className="max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 sm:mb-8 -mt-24 sm:-mt-8 lg:-mt-12 -ml-1 sm:-ml-2"
          >
            <div
              className="inline-flex items-center gap-3 sm:gap-4 rounded-[20px] px-5 py-4 sm:px-6 sm:py-5"
              style={{ background: "rgba(255,255,255,.08)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,.15)", boxShadow: "0 10px 25px rgba(0,0,0,.15), inset 0 1px 0 rgba(255,255,255,.08)" }}
            >
              <Trophy className="w-6 h-6 sm:w-7 sm:h-7 text-gold-400 shrink-0" />
              <div>
                <p className="text-white font-bold text-2xl sm:text-3xl tracking-tight leading-none">
                  #141 <span className="text-white/70 font-normal text-sm sm:text-base align-baseline">Worldwide</span>
                </p>
                <p className="text-white/50 text-[10px] sm:text-[11px] mt-1.5 tracking-wide uppercase">
                  Engineering & Technology · QS 2026
                </p>
                <p className="mt-1.5">
                  <span className="font-bold text-base sm:text-lg" style={{ color: "#FFC72C" }}>No. 1</span><span className="text-white font-medium text-xs sm:text-sm ml-2">in Egypt & Africa</span>
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block bg-white/15 border border-white/25 text-white px-4 sm:px-5 py-1.5 rounded-full text-body-sm font-semibold mb-4 sm:mb-6 backdrop-blur-md"
          >
            Cairo University
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-white text-3xl sm:text-h1 md:text-display lg:text-display-xl tracking-tight leading-tight"
          >
            Welcome to the Faculty of{" "}
            <span className="hero-accent-text font-serif italic font-normal">Engineering</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 sm:mt-6 text-base sm:text-h4 lg:text-h3 text-white/80 font-sans font-light"
            style={{ lineHeight: 1.55 }}
          >
            Empowering the future generation of engineers with innovation, knowledge, and excellence since 1816. Sixteen specialized departments shaping tomorrow.
          </motion.p>
          {/* Students image — inline on mobile only */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="sm:hidden -mt-2 flex justify-center pointer-events-none"
            style={{ maskImage: "linear-gradient(to bottom, white 35%, transparent 80%)", WebkitMaskImage: "linear-gradient(to bottom, white 35%, transparent 80%)" }}
          >
            <Image
              src="/images/students/students12.png"
              alt="Students studying together on campus"
              width={700}
              height={500}
              className="w-[85vw] h-auto object-contain"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="-mt-16 sm:mt-12 pb-4 sm:pb-32 lg:pb-0 flex flex-col sm:flex-row gap-3 sm:gap-4 relative z-10"
          >
            <Button href="/departments" size="lg" className="hero-cta-primary bg-gold-400 hover:bg-white hover:text-navy-700! h-14.5 font-bold">
              Explore Programs
            </Button>
            <Button
              href="/study"
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white hover:text-[#212529]"
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
        className="lg:hidden absolute right-3 sm:right-4 top-3 sm:top-4 z-20"
      >
        <Image
          src="/images/rank/rank-stamp_yellow_solid.png"
          alt="Ranked No. 1 in Africa — Faculty of Engineering, Cairo University"
          width={160}
          height={160}
          className="w-20 sm:w-32 md:w-36 h-auto drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] rotate-10"
          priority
        />
      </motion.div>

      {/* Tablet stamp — top right, above students */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.5, type: "spring", stiffness: 150 }}
        className="hidden lg:block xl:hidden absolute right-12 top-10 z-20"
      >
        <Image
          src="/images/rank/rank-stamp_yellow_solid.png"
          alt="Ranked No. 1 in Africa — Faculty of Engineering, Cairo University"
          width={176}
          height={176}
          className="w-44 h-auto drop-shadow-[0_0_25px_rgba(255,255,255,0.3)] rotate-10"
        />
      </motion.div>

      {/* Desktop stamp — top right, above students */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.5, type: "spring", stiffness: 150 }}
        className="hidden xl:block absolute right-28 top-10 z-20"
      >
        <Image
          src="/images/rank/rank-stamp_yellow_solid.png"
          alt="Ranked No. 1 in Africa — Faculty of Engineering, Cairo University"
          width={240}
          height={240}
          className="w-50 h-auto drop-shadow-[0_0_25px_rgba(255,255,255,0.3)] rotate-10"
          priority
        />
      </motion.div>

      {/* Students image — desktop (lg+) */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="hidden lg:block absolute -bottom-40 right-[6%] xl:right-[6%] 2xl:right-[8%] z-10 pointer-events-none"
        style={{ maskImage: "linear-gradient(to bottom, white 35%, transparent 80%)", WebkitMaskImage: "linear-gradient(to bottom, white 35%, transparent 80%)" }}
      >
        <Image
          src="/images/students/students12.png"
          alt="Students studying together on campus"
          width={900}
          height={700}
          className="w-[52vw] lg:max-w-160 xl:max-w-184 2xl:max-w-208 h-auto object-contain object-bottom-right"
          priority
        />
      </motion.div>

      {/* Students image — mobile/tablet */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="hidden sm:block lg:hidden absolute -bottom-8 min-[800px]:bottom-0 left-1/2 -translate-x-1/2 min-[480px]:translate-x-0 min-[480px]:left-auto min-[480px]:right-0 z-10 pointer-events-none"
        style={{ maskImage: "linear-gradient(to bottom, white 35%, transparent 80%)", WebkitMaskImage: "linear-gradient(to bottom, white 35%, transparent 80%)" }}
      >
        <Image
          src="/images/students/students12.png"
          alt="Students studying together on campus"
          width={700}
          height={500}
          className="w-[95vw] min-[480px]:w-[60vw] sm:w-[55vw] md:w-[50vw] h-auto object-contain object-bottom mx-auto"
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-white/40 animate-bounce" />
      </motion.div>
    </section>
  );
}
