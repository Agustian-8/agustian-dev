"use client";
import { motion } from "framer-motion";
import { ArrowRight, User, FileText } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="beranda" className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/foto-saya.png"
          alt="Agustian"
          fill
          className="object-cover object-top opacity-75" 
          priority
          sizes="100vw"
        />
        {/* Gradient Overlay untuk meredupkan bagian bawah dan atas agar teks terbaca */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/95"></div>
      </div>

      {/* Teks Raksasa "PORTFOLIO / PORTOFOLIO" - Diturunkan ke area dagu */}
      <div className="absolute top-[58%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full text-center pointer-events-none flex justify-center mt-4">
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="font-extrabold tracking-tighter uppercase"
          style={{
            fontSize: "clamp(3.5rem, 14vw, 15rem)", 
            lineHeight: "1",
            // Warna diubah menjadi transparan gelap dengan outline putih elegan (bukan merah)
            color: "rgba(20, 20, 20, 0.4)", 
            WebkitTextStroke: "2px rgba(255, 255, 255, 0.8)", 
            textShadow: "0px 20px 40px rgba(0,0,0,0.5)", 
          }}
        >
          {t.nav.portofolio}
        </motion.h1>
      </div>

      {/* Konten Teks & Tombol (Foreground) - Didorong lebih ke bawah dengan pb-6 */}
      <div className="relative z-20 w-full h-full max-w-[1400px] mx-auto px-6 pb-6 pt-20 flex flex-col justify-end">
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
          
          {/* Kiri: Nama & Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-xl text-gray-200"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
              {t.hero.greeting} <span className="text-white">Agustian</span>
            </h2>
            <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-gray-300 font-medium">
              {t.hero.badge}
            </p>
          </motion.div>

          {/* Kanan: Tombol Aksi */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-start lg:items-end gap-3 w-full lg:w-auto"
          >
            <a href="#portofolio" className="group flex items-center justify-center lg:justify-start gap-2 bg-white/10 backdrop-blur-md border border-white/40 text-white hover:bg-white hover:text-black px-8 py-3 w-full lg:w-auto font-bold transition-all uppercase tracking-wider text-sm">
              {t.hero.btnPortfolio} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex gap-3 w-full lg:w-auto">
              <a href="/CV_AGUSTIAN.pdf" download="CV_AGUSTIAN.pdf" target="_blank" rel="noopener noreferrer" className="flex-1 lg:flex-none flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/40 text-white hover:bg-white hover:text-black px-6 py-2.5 font-bold transition-all uppercase text-xs">
                <FileText size={16} /> {t.hero.btnCV}
              </a>
              <a href="https://github.com/Agustian-8" target="_blank" rel="noreferrer" className="flex items-center justify-center w-11 h-11 bg-white/10 backdrop-blur-md border border-white/40 hover:bg-white hover:text-black transition-all text-white">
                <FaGithub size={18} />
              </a>
              <a href="https://linkedin.com/in/agustian" target="_blank" rel="noreferrer" className="flex items-center justify-center w-11 h-11 bg-white/10 backdrop-blur-md border border-white/40 hover:bg-white hover:text-black transition-all text-white">
                <User size={18} />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}