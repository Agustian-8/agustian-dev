"use client";
import { motion } from "framer-motion";
import { Mail, User, MapPin } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-[#576238]/20 bg-[#E8E0D0]/80 pt-16 pb-8 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-[#576238]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold tracking-tighter text-[#2D3A1F] mb-4">
              Agustian<span className="text-[#576238]">.</span>
            </h2>
            <p className="text-[#5A6B3E] text-sm max-w-xs">
              Membangun solusi digital yang elegan dan fungsional. Mari
              berkolaborasi untuk proyek Anda selanjutnya.
            </p>
          </div>

          <div>
            <h3 className="text-[#2D3A1F] font-semibold mb-4">Navigasi</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#beranda"
                  className="text-[#5A6B3E] hover:text-[#576238] transition"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="#tentang"
                  className="text-[#5A6B3E] hover:text-[#576238] transition"
                >
                  Tentang
                </Link>
              </li>
              <li>
                <Link
                  href="#keahlian"
                  className="text-[#5A6B3E] hover:text-[#576238] transition"
                >
                  Keahlian
                </Link>
              </li>
              <li>
                <Link
                  href="#proyek"
                  className="text-[#5A6B3E] hover:text-[#576238] transition"
                >
                  Proyek
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#2D3A1F] font-semibold mb-4">Hubungi Saya</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-[#5A6B3E]">
                <Mail size={16} className="text-[#576238]" />
                <a
                  href="mailto:aguus.tian2001@gmail.com"
                  className="hover:text-[#576238] transition"
                >
                  aguus.tian2001@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-[#5A6B3E]">
                <MapPin size={16} className="text-[#576238]" />
                <span>Pontianak, Indonesia</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-6">
              <a
                href="https://github.com/Agustian-8"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-[#D0C8B8]/80 hover:bg-[#C0B8A8] hover:text-[#576238] rounded-full transition-all text-[#5A6B3E] border border-[#576238]/20"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://linkedin.com/in/agustian"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-[#D0C8B8]/80 hover:bg-[#C0B8A8] hover:text-[#576238] rounded-full transition-all text-[#5A6B3E] border border-[#576238]/20"
              >
                <User size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center border-t border-[#576238]/20 pt-8">
          <p className="text-sm font-medium text-[#7D8F5A]">
            © {new Date().getFullYear()} Agustian | Built with passion.
          </p>
        </div>
      </div>
    </footer>
  );
}