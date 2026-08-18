"use client";
import React, { createContext, useState, useContext } from "react";

type Language = "id" | "en";

const translations = {
  id: {
    nav: {
      beranda: "Beranda", tentang: "Tentang", keahlian: "Keahlian",
      portofolio: "Portofolio", kontak: "Kontak",
    },
    hero: {
      badge: "Web Developer • IT Staff • Freelancer",
      greeting: "Halo, Saya",
      description1: "Membangun solusi digital yang fungsional, mulai dari ",
      descriptionHighlight1: "website bisnis",
      description2: ", ",
      descriptionHighlight2: "sistem enterprise",
      description3: ", dan ",
      descriptionHighlight3: "Tugas Akhir Informatika",
      description4: ".",
      typewriter: [
        "Full-Stack Web Development.", "Machine Learning & Data Science.",
        "Pengembangan Sistem ERP.", "Jasa Project & Skripsi IT.", "UI/UX Design.",
      ],
      btnPortfolio: "Lihat Portofolio",
      btnCV: "CV",
    },
    about: {
      title1: "Tentang", title2: "Saya",
      subtitle: "Sinergi antara logika pemrograman, desain sistem, dan analisis data.",
      role: "Web Developer & Data Enthusiast",
      collab1: "Siap Berkolaborasi", collab2: "Freelance & Full-time",
      eduTitle: "S1 Teknik Informatika",
      eduDesc: "Universitas Muhammadiyah Pontianak (IPK 3.69). Aktif dalam riset Machine Learning dan pengembangan web.",
      expTitle: "IT & System Specialist",
      expDesc: "Berpengalaman merancang dan mengelola sistem ERP internal menggunakan Laravel dan database relasional.",
      focusTitle: "Fokus Utama",
      focusDesc: "Membangun aplikasi web yang scalable, user-friendly, dan terintegrasi dengan pemrosesan data (Python/ML).",
      btnDownload: "Unduh Curriculum Vitae",
    },
    skills: {
      title: "Tech Stack",
      subtitle: "Teknologi dan tools yang saya gunakan untuk mengubah ide menjadi produk digital fungsional.",
    },
    projects: {
      title1: "Karya", title2: "Pilihan",
      descAll: "Kumpulan portofolio lengkap, dari web development hingga implementasi AI.",
      descFeatured: "Sorotan proyek unggulan yang memadukan teknologi modern dan solusi bisnis.",
      completed: "Proyek Selesai",
      btnAll: "Lihat Semua Proyek", btnLess: "Tampilkan Lebih Sedikit",
    },
    contact: {
      success: "WhatsApp terbuka! Lanjutkan chat di sana 🚀",
      title1: "Mari", title2: "Berkolaborasi",
      subtitle: "Ada ide proyek seru atau butuh bantuan IT? Spill aja dulu idemu, nanti kita obrolin solusinya.",
      contactMe: "Hubungi Saya",
      contactDesc: "Isi form & langsung diarahkan ke WhatsApp. Respon cepat!",
      locLabel: "Lokasi", locValue: "Pontianak, Kalimantan Barat",
      status: "Online — respon dalam hitungan menit",
      formTitle: "Kirim Pesan", formSub: "Via WhatsApp",
      phName: "Nama Lengkap", phMessage: "Ceritakan proyek Anda...",
      btnSubmit: "Lanjutkan ke WhatsApp",
    },
    footer: {
      desc: "Mewujudkan ide menjadi solusi digital. Mari berkolaborasi.",
      navTitle: "Navigasi", contactTitle: "Hubungi Saya",
      location: "Pontianak, Indonesia",
      copyright: "Agustian | Built with passion.",
    }
  },
  en: {
    nav: {
      beranda: "Home", tentang: "About", keahlian: "Skills",
      portofolio: "Portfolio", kontak: "Contact",
    },
    hero: {
      badge: "Web Developer • IT Staff • Freelancer",
      greeting: "Hello, I'm",
      description1: "Building functional digital solutions, from ",
      descriptionHighlight1: "business websites",
      description2: ", ",
      descriptionHighlight2: "enterprise systems",
      description3: ", to ",
      descriptionHighlight3: "IT Final Projects",
      description4: ".",
      typewriter: [
        "Full-Stack Web Development.", "Machine Learning & Data Science.",
        "ERP System Development.", "IT Project & Thesis Services.", "UI/UX Design.",
      ],
      btnPortfolio: "View Portfolio",
      btnCV: "Resume",
    },
    about: {
      title1: "About", title2: "Me",
      subtitle: "The synergy between programming logic, system design, and data analysis.",
      role: "Web Developer & Data Enthusiast",
      collab1: "Ready to Collaborate", collab2: "Freelance & Full-time",
      eduTitle: "Bachelor of Informatics",
      eduDesc: "Muhammadiyah University of Pontianak (GPA 3.69). Active in Machine Learning research and web development.",
      expTitle: "IT & System Specialist",
      expDesc: "Experienced in designing and managing internal ERP systems using Laravel and relational databases.",
      focusTitle: "Main Focus",
      focusDesc: "Building scalable, user-friendly web applications integrated with data processing (Python/ML).",
      btnDownload: "Download Curriculum Vitae",
    },
    skills: {
      title: "Tech Stack",
      subtitle: "Technologies and tools I use to turn ideas into functional digital products.",
    },
    projects: {
      title1: "Featured", title2: "Works",
      descAll: "Complete portfolio collection, from web development to AI implementation.",
      descFeatured: "Highlight of featured projects combining modern technology and business solutions.",
      completed: "Projects Completed",
      btnAll: "View All Projects", btnLess: "Show Less",
    },
    contact: {
      success: "WhatsApp opened! Continue chatting there 🚀",
      title1: "Let's", title2: "Collaborate",
      subtitle: "Got a cool project idea or need IT help? Spill your ideas, let's figure out the solution.",
      contactMe: "Contact Me",
      contactDesc: "Fill the form & directly redirected to WhatsApp. Fast response!",
      locLabel: "Location", locValue: "Pontianak, West Kalimantan",
      status: "Online — responds in minutes",
      formTitle: "Send Message", formSub: "Via WhatsApp",
      phName: "Full Name", phMessage: "Tell me about your project...",
      btnSubmit: "Continue to WhatsApp",
    },
    footer: {
      desc: "Turning ideas into digital solutions. Let's collaborate.",
      navTitle: "Navigation", contactTitle: "Contact Me",
      location: "Pontianak, Indonesia",
      copyright: "Agustian | Built with passion.",
    }
  }
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: typeof translations.id; 
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("id");
  const toggleLanguage = () => setLanguage((prev) => (prev === "id" ? "en" : "id"));
  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) throw new Error("useLanguage error");
  return context;
};