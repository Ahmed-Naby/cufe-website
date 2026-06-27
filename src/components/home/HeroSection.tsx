"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Trophy } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    let width = 0;
    let height = 0;
    const mouse = { x: -1000, y: -1000 };

    const resize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = canvas.width = rect.width;
      height = canvas.height = rect.height;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const density = width < 768 ? 35 : 85;
      for (let i = 0; i < density; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: 2,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) { p.x = 0; p.vx *= -1; }
        else if (p.x > width) { p.x = width; p.vx *= -1; }

        if (p.y < 0) { p.y = 0; p.vy *= -1; }
        else if (p.y > height) { p.y = height; p.vy *= -1; }

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(216, 155, 75, ${0.15 * (1 - dist / 150)})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p2.x - p.x;
          const dy = p2.y - p.y;
          const d = Math.sqrt(dx * dx + dy * dy);

          if (d < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(216, 155, 75, ${0.1 * (1 - d / 110)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.25)";
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      className="relative min-h-[70vh] min-[500px]:min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center bg-navy-700 overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/images/hero/hero-bg.png')", backgroundColor: "#0b121f" }}
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

      {/* Blueprint particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 right-0 lg:right-1/3 w-full lg:w-1/2 h-1/4 z-1 pointer-events-none opacity-45"
      />

      {/* Centered layout container */}
      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 pt-44 sm:pt-36 pb-20 sm:pb-36 lg:py-0 w-full z-15 flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <div
              className="inline-flex items-center gap-3 sm:gap-4 rounded-[20px] px-5 py-4 sm:px-6 sm:py-5"
              style={{ background: "rgba(255,255,255,.08)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,.15)", boxShadow: "0 10px 25px rgba(0,0,0,.15), inset 0 1px 0 rgba(255,255,255,.08)" }}
            >
              <Trophy className="w-6 h-6 sm:w-7 sm:h-7 text-gold-400 shrink-0" />
              <div className="text-left">
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
            className="mt-4 sm:mt-6 text-base sm:text-h4 lg:text-h3 text-white/80 font-sans font-light max-w-2xl"
            style={{ lineHeight: 1.55 }}
          >
            Empowering the future generation of engineers with innovation, knowledge, and excellence since 1816. Sixteen specialized departments shaping tomorrow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 relative z-10 w-full sm:w-auto justify-center"
          >
            <Button href="/departments" size="lg" className="hero-cta-primary bg-gold-400 hover:bg-white hover:text-navy-700! h-14.5 font-bold hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200">
              Explore Programs
            </Button>
            <Button
              href="/study"
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white hover:text-[#212529] h-14.5 hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200"
            >
              Study at CUFE
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Static Rank Seal stamp — floating in top-right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
        animate={{ opacity: 0.85, scale: 1, rotate: 10 }}
        transition={{ 
          opacity: { duration: 1, delay: 0.5 },
          scale: { duration: 0.8, type: "spring", stiffness: 100 }
        }}
        className="absolute top-6 sm:top-12 md:top-20 lg:top-24 right-4 sm:right-8 md:right-16 z-10 pointer-events-none"
      >
        <Image
          src="/images/rank/rank-stamp_yellow_solid.png"
          alt="Ranked No. 1 in Africa — Faculty of Engineering, Cairo University"
          width={216}
          height={216}
          className="w-28 sm:w-40 md:w-44 h-auto drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]"
          priority
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
