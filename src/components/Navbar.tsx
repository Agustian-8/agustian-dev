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
        scrolled ? "bg-[#F0EADC]/90 backdrop-blur-xl border-b border-[#576238]/20 shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* BAGIAN LOGO YANG DIUBAH (Ditengahkan) */}
        <div className="flex-shrink-0 z-50">
          <Link href="/" className="flex flex-col items-center leading-none group">
            <span className="text-3xl font-black tracking-tighter text-[#2D3A1F] group-hover:text-[#576238] transition-colors">
              AT<span className="text-[#576238]">.</span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#5A6B3E] mt-1 pl-[0.2em]">
              AGUSTIAN
            </span>
          </Link>
        </div>

        <ul className="hidden md:flex flex-1 justify-center space-x-8 text-sm font-medium text-[#4A532E]">
          {navLinks.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                onClick={() => setActiveLink(link.key)}
                className={`relative group py-2 transition-colors ${
                  activeLink === link.key ? "text-[#2D3A1F] font-bold" : "hover:text-[#576238]"
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-[#576238] transition-all duration-300 ${
                  activeLink === link.key ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 z-50">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#E8E0D0] hover:bg-[#DDD5C5] text-[#4A532E] rounded-full text-xs font-bold transition-colors border border-[#576238]/20 shadow-sm"
            aria-label="Toggle Language"
          >
            <Globe size={14} />
            {language === "id" ? "ID" : "EN"}
          </button>
          <a
            href={waLink} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 bg-[#E8F5E9] hover:bg-[#C8E6C9] text-[#128C7E] rounded-full transition-colors shadow-sm"
          >
            <FaWhatsapp size={20} />
          </a>
          <button className="md:hidden text-[#2D3A1F] p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 w-full bg-[#F0EADC]/95 backdrop-blur-xl border-b border-[#576238]/20"
        >
          <ul className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className={`block py-2 transition-colors ${
                    activeLink === link.key ? "text-[#2D3A1F] font-bold border-l-4 border-[#576238] pl-3" : "text-[#4A532E] hover:text-[#576238] pl-4"
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