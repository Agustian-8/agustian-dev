"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext"; 

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Beranda");
  const { language, toggleLanguage, t } = useLanguage();

  const navLinks = [
    { name: t.nav.beranda, href: "#beranda", key: "Beranda" },
    { name: t.nav.tentang, href: "#tentang", key: "Tentang" },
    { name: t.nav.keahlian, href: "#keahlian", key: "Keahlian" },
    { name: t.nav.portofolio, href: "#portofolio", key: "Portofolio" },
    { name: t.nav.kontak, href: "#kontak", key: "Kontak" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const scrollPosition = window.scrollY + 150; 
      navLinks.forEach((link) => {
        const sectionId = link.href.replace("#", "");
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveLink(link.key);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]); 

  const waNumber = "628951425508";
  const waLink = `https://wa.me/${waNumber}`;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-xl border-b border-[#576238]/10 shadow-sm py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO - Berubah warna saat di-scroll */}
        <div className="flex-shrink-0 z-50">
          <Link href="/" className="flex flex-col items-center leading-none group cursor-pointer">
            <span className={`text-3xl font-black tracking-tighter transition-colors ${scrolled ? "text-[#2D3A1F] group-hover:text-[#576238]" : "text-white group-hover:text-gray-300"}`}>
              AT<span className={scrolled ? "text-[#576238]" : "text-gray-400"}>.</span>
            </span>
            <span className={`text-[10px] font-bold tracking-[0.2em] mt-1 pl-[0.2em] transition-colors ${scrolled ? "text-[#576238]" : "text-gray-400"}`}>
              AGUSTIAN
            </span>
          </Link>
        </div>

        {/* MENU DESKTOP - Berubah warna saat di-scroll */}
        <ul className="hidden md:flex flex-1 justify-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                onClick={() => setActiveLink(link.key)}
                className={`relative group py-2 transition-colors cursor-pointer ${
                  activeLink === link.key 
                    ? (scrolled ? "text-[#2D3A1F] font-bold" : "text-white font-bold") 
                    : (scrolled ? "text-[#4A532E] hover:text-[#576238]" : "text-gray-300 hover:text-white")
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                  activeLink === link.key ? "w-full" : "w-0 group-hover:w-full"
                } ${scrolled ? "bg-[#576238]" : "bg-white"}`}></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* TOMBOL KANAN */}
        <div className="flex items-center gap-3 z-50">
          {/* Tombol Translate (Ditambahkan cursor-pointer) */}
          <button
            onClick={toggleLanguage}
            className={`cursor-pointer flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-colors border backdrop-blur-md ${
              scrolled 
                ? "bg-[#f1f1f1] hover:bg-[#e2e2e2] text-[#2D3A1F] border-[#576238]/20" 
                : "bg-white/10 hover:bg-white/20 text-white border-white/20"
            }`}
            aria-label="Toggle Language"
          >
            <Globe size={14} />
            {language === "id" ? "ID" : "EN"}
          </button>
          
          <a
            href={waLink} target="_blank" rel="noopener noreferrer"
            className={`cursor-pointer flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full transition-colors backdrop-blur-md ${
              scrolled
                ? "bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/20"
                : "bg-white/10 hover:bg-white/20 text-[#25D366] border border-white/20"
            }`}
          >
            <FaWhatsapp size={20} />
          </a>
          
          {/* Tombol Mobile Menu (Ditambahkan cursor-pointer) */}
          <button 
            className={`md:hidden p-2 transition-colors cursor-pointer ${scrolled ? "text-[#2D3A1F]" : "text-white"}`} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MENU MOBILE */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-[#576238]/10 shadow-lg"
        >
          <ul className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className={`block py-2 transition-colors cursor-pointer ${
                    activeLink === link.key 
                    ? "text-[#2D3A1F] font-bold border-l-4 border-[#576238] pl-3" 
                    : "text-[#4A532E] hover:text-[#576238] pl-4"
                  }`}
                  onClick={() => { setActiveLink(link.key); setMobileMenuOpen(false); }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}