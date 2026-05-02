"use client";
import { motion } from "framer-motion";
import { Handshake } from "lucide-react";
import { GraduationCap, Briefcase, Target, Download } from "lucide-react";
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
          Lebih Dekat dengan <span className="text-[#576238]">Agustian</span>
        </h2>
        <p className="text-[#5A6B3E] max-w-2xl mx-auto">
          Kombinasi unik antara logika pemrograman, desain sistem, dan
          ketertarikan pada data.
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
              alt="Agustian sedang bekerja"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 384px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D3A1F]/80 via-[#2D3A1F]/20 to-transparent"></div>
            
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white font-semibold text-lg drop-shadow-lg">Agustian</p>
              <p className="text-[#C8D6A5] text-sm drop-shadow-lg">Web Developer & Data Enthusiast</p>
            </div>
          </div>
          
                  <div className="absolute -bottom-6 -right-6 bg-[#E8E0D0]/90 backdrop-blur p-4 rounded-xl border border-[#6B7B4A]/30 shadow-lg hidden md:block z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#6B7B4A]/10 rounded-full">
              <Handshake size={22} className="text-[#6B7B4A]" />
            </div>
            <div>
              <p className="text-[#6B7B4A] text-sm font-bold">Siap Berkolaborasi</p>
              <p className="text-[#2D3A1F] text-xs">Freelance & Full-time</p>
            </div>
          </div>
        </div>
        </motion.div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {[
              {
                icon: <GraduationCap size={24} className="text-[#576238]" />,
                title: "S1 Teknik Informatika",
                desc: "Universitas Muhammadiyah Pontianak, lulus 2024 dengan IPK 3.69. Aktif dalam riset Machine Learning.",
              },
              {
                icon: <Briefcase size={24} className="text-[#6B7B4A]" />,
                title: "IT & System Specialist",
                desc: "Membangun dan mengelola sistem ERP internal perusahaan. Mahir dalam Laravel, Filament PHP, dan database.",
              },
              {
                icon: <Target size={24} className="text-[#7D8F5A]" />,
                title: "Fokus Utama",
                desc: "Mengintegrasikan kemampuan analisis data (Python, ML) ke dalam aplikasi web yang scalable dan user-friendly.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex gap-4 p-4 bg-[#E8E0D0]/30 rounded-xl border border-[#576238]/15 hover:bg-[#E8E0D0]/50 transition-all"
              >
                <div className="p-3 bg-[#F0EADC]/70 rounded-lg h-fit">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-[#2D3A1F] font-bold text-lg">
                    {item.title}
                  </h3>
                  <p className="text-[#5A6B3E] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="/CV_Agustian.pdf"
            target="_blank"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-[#576238]/15 border border-[#576238]/40 text-[#576238] rounded-full text-sm font-medium hover:bg-[#576238]/25 transition-all"
          >
            <Download size={16} /> Download Curriculum Vitae (CV)
          </motion.a>
        </div>
      </div>
    </section>
  );
}