"use client";
import { motion } from "framer-motion";
import { ArrowRight, User, FileText, Brain } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="beranda" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#576238] rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#6B7B4A] rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#7D8F5A] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#576238]/15 border border-[#576238]/30 text-[#576238] text-xs font-bold uppercase tracking-wider mb-6">
              {t.hero.badge}
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight text-[#2D3A1F] leading-tight">
            {t.hero.greeting}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#576238] via-[#6B7B4A] to-[#7D8F5A]">
              Agustian
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="text-base md:text-lg text-[#5A6B3E] mb-4 max-w-2xl leading-relaxed">
            {t.hero.description1}
            <span className="text-[#2D3A1F] font-medium">{t.hero.descriptionHighlight1}</span>
            {t.hero.description2}
            <span className="text-[#2D3A1F] font-medium">{t.hero.descriptionHighlight2}</span>
            {t.hero.description3}
            <span className="text-[#2D3A1F] font-medium">{t.hero.descriptionHighlight3}</span>
            {t.hero.description4}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-lg md:text-xl text-[#6B7B4A] mb-6 h-8 font-semibold flex items-center gap-2">
            <Brain size={20} className="opacity-80" />
            <div key={t.hero.typewriter[0]}>
              <Typewriter options={{ strings: t.hero.typewriter, autoStart: true, loop: true, cursorClassName: "text-[#576238]", delay: 60 }} />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a href="#portofolio" className="group flex items-center gap-2 bg-gradient-to-r from-[#576238] to-[#6B7B4A] text-white hover:shadow-lg hover:shadow-[#576238]/30 px-7 py-3 rounded-full font-bold transition-all">
              {t.hero.btnPortfolio} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/CV_AGUSTIAN.pdf" download="CV_AGUSTIAN.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#E8E0D0]/80 text-[#2D3A1F] hover:bg-[#DDD5C5] px-6 py-3 rounded-full font-bold transition-all border border-[#576238]/20">
              <FileText size={18} /> {t.hero.btnCV}
            </a>
            <div className="flex gap-3">
              <a href="https://github.com/Agustian-8" target="_blank" rel="noreferrer" className="p-3 bg-[#E8E0D0]/80 hover:bg-[#DDD5C5] hover:text-[#576238] rounded-full transition-all text-[#4A532E] border border-[#576238]/20">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/agustian" target="_blank" rel="noreferrer" className="p-3 bg-[#E8E0D0]/80 hover:bg-[#DDD5C5] hover:text-[#576238] rounded-full transition-all text-[#4A532E] border border-[#576238]/20">
                <User size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.6 }} className="relative flex justify-center md:justify-end">
          <div className="relative w-64 h-80 md:w-72 md:h-96 lg:w-80 lg:h-[450px]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#576238] to-[#6B7B4A] rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative w-full h-full rounded-3xl border-2 border-[#576238]/20 overflow-hidden shadow-2xl">
              <Image src="/foto-agustian.png" alt="Agustian" fill className="object-cover hover:scale-105 transition-transform duration-500" priority sizes="(max-width: 768px) 256px, (max-width: 1024px) 288px, 320px" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#6B7B4A]/10 rounded-full blur-2xl"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#576238]/10 rounded-full blur-2xl"></div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob { 0% { transform: translate(0px, 0px) scale(1); } 33% { transform: translate(30px, -50px) scale(1.1); } 66% { transform: translate(-20px, 20px) scale(0.9); } 100% { transform: translate(0px, 0px) scale(1); } }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </section>
  );
}