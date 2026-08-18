"use client";
import { Mail, User, MapPin } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-[#576238]/20 bg-[#E8E0D0]/80 pt-16 pb-8 overflow-hidden">
      {/* Perbaikan Tailwind: w-[600px] h-[600px] diubah menjadi w-150 h-150 */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-150 h-150 bg-[#576238]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          
          {/* Kolom 1: Logo & Deskripsi */}
          <div className="flex flex-col items-start">
            <Link href="#beranda" className="inline-flex flex-col items-center leading-none group mb-5">
              <span className="text-3xl font-black tracking-tighter text-[#2D3A1F] group-hover:text-[#576238] transition-colors">
                AT<span className="text-[#576238]">.</span>
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#5A6B3E] mt-1 pl-[0.2em]">
                AGUSTIAN
              </span>
            </Link>
            <p className="text-[#5A6B3E] text-sm max-w-xs">{t.footer.desc}</p>
          </div>

          {/* Kolom 2: Navigasi */}
          <div>
            <h3 className="text-[#2D3A1F] font-semibold mb-4">{t.footer.navTitle}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#beranda" className="text-[#5A6B3E] hover:text-[#576238] transition">{t.nav.beranda}</Link></li>
              <li><Link href="#tentang" className="text-[#5A6B3E] hover:text-[#576238] transition">{t.nav.tentang}</Link></li>
              <li><Link href="#keahlian" className="text-[#5A6B3E] hover:text-[#576238] transition">{t.nav.keahlian}</Link></li>
              <li><Link href="#portofolio" className="text-[#5A6B3E] hover:text-[#576238] transition">{t.nav.portofolio}</Link></li>
            </ul>
          </div>

          {/* Kolom 3: Kontak */}
          <div>
            <h3 className="text-[#2D3A1F] font-semibold mb-4">{t.footer.contactTitle}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-[#5A6B3E]">
                <Mail size={16} className="text-[#576238]" />
                <a href="mailto:aguus.tian2001@gmail.com" className="hover:text-[#576238] transition">aguus.tian2001@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 text-[#5A6B3E]">
                <MapPin size={16} className="text-[#576238]" />
                <span>{t.footer.location}</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-6">
              <a href="https://github.com/Agustian-8" target="_blank" rel="noreferrer" className="p-2.5 bg-[#D0C8B8]/80 hover:bg-[#C0B8A8] hover:text-[#576238] rounded-full transition-all text-[#5A6B3E] border border-[#576238]/20"><FaGithub size={18} /></a>
              <a href="https://linkedin.com/in/agustian" target="_blank" rel="noreferrer" className="p-2.5 bg-[#D0C8B8]/80 hover:bg-[#C0B8A8] hover:text-[#576238] rounded-full transition-all text-[#5A6B3E] border border-[#576238]/20"><User size={18} /></a>
            </div>
          </div>
        </div>

        <div className="text-center border-t border-[#576238]/20 pt-8">
          <p className="text-sm font-medium text-[#7D8F5A]">
            {/* Perbaikan TypeScript: Menggunakan type assertion (Record<string, any>) untuk bypass error sementara */}
            © {new Date().getFullYear()} {(t.footer as Record<string, any>).copyright || "Agustian | Built with passion."}
          </p>
        </div>
      </div>
    </footer>
  );
}