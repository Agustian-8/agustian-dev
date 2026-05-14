"use client";
import { motion } from "framer-motion";
import { Handshake, GraduationCap, Briefcase, Target, Download } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section id="tentang" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#2D3A1F] mb-4">
          Profil <span className="text-[#576238]">Singkat</span>
        </h2>
        <p className="text-[#5A6B3E] max-w-2xl mx-auto">
          Sinergi antara logika pemrograman, desain sistem, dan analisis data.
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-[#576238] to-[#6B7B4A] mx-auto rounded-full mt-4"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[#576238]/20 shadow-xl group">
            <Image
              src="/image-1.jpg"
              alt="Agustian bekerja"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 384px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D3A1F]/80 via-[#2D3A1F]/20 to-transparent"></div>
            
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white font-bold text-lg drop-shadow-md">Agustian</p>
              <p className="text-[#C8D6A5] text-sm drop-shadow-md">Web Developer & Data Enthusiast</p>
            </div>
          </div>
          
          <div className="absolute -bottom-6 -right-6 bg-[#E8E0D0]/95 backdrop-blur p-4 rounded-xl border border-[#6B7B4A]/30 shadow-lg hidden md:block z-10">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#6B7B4A]/10 rounded-full">
                <Handshake size={22} className="text-[#6B7B4A]" />
              </div>
              <div>
                <p className="text-[#6B7B4A] text-sm font-bold">Siap Berkolaborasi</p>
                <p className="text-[#2D3A1F] text-xs font-medium">Freelance & Full-time</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="space-y-4">
          {[
            {
              icon: <GraduationCap size={24} className="text-[#576238]" />,
              title: "S1 Teknik Informatika",
              desc: "Universitas Muhammadiyah Pontianak (IPK 3.69). Aktif dalam riset Machine Learning dan pengembangan web.",
            },
            {
              icon: <Briefcase size={24} className="text-[#6B7B4A]" />,
              title: "IT & System Specialist",
              desc: "Berpengalaman merancang dan mengelola sistem ERP internal menggunakan Laravel dan database relasional.",
            },
            {
              icon: <Target size={24} className="text-[#7D8F5A]" />,
              title: "Fokus Utama",
              desc: "Membangun aplikasi web yang scalable, user-friendly, dan terintegrasi dengan pemrosesan data (Python/ML).",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="flex gap-4 p-5 bg-[#E8E0D0]/40 rounded-xl border border-[#576238]/15 hover:bg-[#E8E0D0]/60 transition-all"
            >
              <div className="p-3 bg-[#F0EADC]/80 rounded-lg h-fit shadow-sm">
                {item.icon}
              </div>
              <div>
                <h3 className="text-[#2D3A1F] font-bold text-lg mb-1">
                  {item.title}
                </h3>
                <p className="text-[#5A6B3E] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}

          <motion.a
            href="/CV_Agustian.pdf"
            target="_blank"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-[#576238]/10 border border-[#576238]/30 text-[#576238] rounded-full text-sm font-bold hover:bg-[#576238]/20 transition-all"
          >
            <Download size={16} /> Unduh Curriculum Vitae
          </motion.a>
        </div>
      </div>
    </section>
  );
}