"use client";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Eye } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

const featuredProjects = [
  {
    title: "SPK Penentuan Kelas Siswa",
    category: "Skripsi • Sistem Keputusan",
    description: "Sistem web berbasis Laravel Filament untuk penentuan kelas siswa menggunakan metode PIPRECIA dan MAUT.",
    tech: ["Laravel", "Filament PHP", "MySQL", "Tailwind CSS"],
    image: "/Project-1.jpeg",
    link: "#",
    github: "#",
  },
  {
    title: "Clustering Penyakit Menular",
    category: "Skripsi • Machine Learning",
    description: "Dashboard interaktif (Python & Laravel) untuk pengelompokan data penyakit menular di Kalbar menggunakan K-Means.",
    tech: ["Laravel", "Python", "K-Means", "Pandas", "MySQL"],
    image: "/Project-2.jpeg",
    link: "#",
    github: "#",
  },
  {
    title: "Platform Rental Mobil",
    category: "Web Development",
    description: "Website responsif dengan sistem pemesanan online dan simulasi biaya sewa yang modern.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    image: "/Project-3.png",
    link: "#",
    github: "#",
  },
  {
    title: "Website TK AL-Mukaddimah",
    category: "Web Development",
    description: "Profil digital interaktif sekolah yang dilengkapi dengan fitur pendaftaran murid baru secara online.",
    tech: ["Vue", "Tailwind CSS", "Framer Motion"],
    image: "/Project-4.png",
    link: "#",
    github: "#",
  },
];

const allProjects = [
  ...featuredProjects,
  {
    title: "Rekomendasi Kos Pontianak",
    category: "Machine Learning",
    description: "Sistem rekomendasi kos untuk mahasiswa menggunakan metode Collaborative Filtering berbasis Python & Streamlit.",
    tech: ["Python", "Streamlit", "Scikit-Learn"],
    image: "/Project-5.png",
    link: "#",
    github: "#",
  },
  {
    title: "Prediksi Tuberkulosis (TB)",
    category: "Machine Learning",
    description: "Model prediksi kasus TB di Pontianak menggunakan algoritma Support Vector Regression (SVR).",
    tech: ["Python", "Streamlit", "SVR", "Pandas"],
    image: "/Project-6.jpeg",
    link: "#",
    github: "#",
  },
  {
    title: "Klasifikasi Tanaman Obat",
    category: "Deep Learning",
    description: "Deteksi dan klasifikasi citra daun tanaman obat liar menggunakan Convolutional Neural Network (CNN).",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV"],
    image: "/Project-7.png",
    link: "#",
    github: "#",
  },
  {
    title: "ERP Internal Firman's Group",
    category: "Enterprise Web App",
    description: "Sistem terpusat untuk manajemen operasional, inventaris, dan SDM menggunakan Laravel Filament.",
    tech: ["Laravel", "Filament PHP", "Livewire", "MySQL"],
    image: "/Project-8.png",
    link: "#",
    github: "#",
  },
  {
    title: "Prediksi Harga Mobil Bekas",
    category: "Machine Learning",
    description: "Perbandingan performa Regresi Linear dan SVR dalam memprediksi estimasi harga kendaraan bekas.",
    tech: ["Python", "Streamlit", "Scikit-Learn"],
    image: "/Project-9.png",
    link: "#",
    github: "#",
  },
  {
    title: "Analisis Sentimen Coffee Shop",
    category: "Machine Learning",
    description: "Klasifikasi ulasan pelanggan menggunakan algoritma Naïve Bayes dan K-Nearest Neighbor (KNN).",
    tech: ["Python", "NLTK", "Naïve Bayes", "KNN"],
    image: "/Project-10.png",
    link: "#",
    github: "#",
  },
];

export default function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const displayProjects = showAllProjects ? allProjects : featuredProjects;

  return (
    <section id="proyek" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D3A1F] mb-3">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6B7B4A] to-[#7D8F5A]">
                Karya
              </span>{" "}
              Pilihan
            </h2>
            <p className="text-[#5A6B3E] max-w-2xl text-sm md:text-base">
              {showAllProjects 
                ? "Kumpulan portofolio lengkap, dari web development hingga implementasi AI."
                : "Sorotan proyek unggulan yang memadukan teknologi modern dan solusi bisnis."}
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-[#6B7B4A] to-[#7D8F5A] rounded-full mt-4"></div>
          </div>
          
          {!showAllProjects && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-2 px-4 py-2 bg-[#6B7B4A]/10 border border-[#6B7B4A]/30 rounded-full"
            >
              <span className="text-[#6B7B4A] font-bold">{allProjects.length}+</span>
              <span className="text-[#5A6B3E] text-sm font-medium">Proyek Selesai</span>
            </motion.div>
          )}
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {displayProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="group relative bg-gradient-to-br from-[#E8E0D0]/50 to-[#DDD5C5]/40 backdrop-blur-sm rounded-3xl border border-[#576238]/20 hover:border-[#6B7B4A]/60 transition-all duration-300 overflow-hidden flex flex-col shadow-lg hover:shadow-[#6B7B4A]/15"
          >
            <div className="relative h-56 w-full overflow-hidden border-b border-[#576238]/10">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D3A1F] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
              
              <div className="absolute top-4 left-4">
                <span className="inline-block px-3 py-1.5 bg-[#2D3A1F]/80 backdrop-blur text-[#C8D6A5] text-[10px] font-bold uppercase tracking-wider rounded-full border border-[#6B7B4A]/40 shadow-sm">
                  {project.category}
                </span>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-extrabold text-[#2D3A1F] group-hover:text-[#6B7B4A] transition-colors line-clamp-2">
                  {project.title}
                </h3>
                
                <div className="flex gap-2 ml-3 shrink-0">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-[#D0C8B8]/70 rounded-full hover:bg-[#6B7B4A]/20 text-[#5A6B3E] hover:text-[#6B7B4A] transition-all"
                  >
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-[#D0C8B8]/70 rounded-full hover:bg-[#6B7B4A]/20 text-[#5A6B3E] hover:text-[#6B7B4A] transition-all"
                  >
                    <FaGithub size={16} />
                  </a>
                </div>
              </div>
              
              <p className="text-[#5A6B3E] mb-5 text-sm leading-relaxed flex-1">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.slice(0, 4).map((tech, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-bold px-2.5 py-1.5 bg-[#E8E0D0] text-[#4A532E] rounded-md border border-[#576238]/20"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="text-[11px] font-bold px-2.5 py-1.5 bg-[#D0C8B8]/60 text-[#5A6B3E] rounded-md border border-[#576238]/20">
                    +{project.tech.length - 4}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {!showAllProjects && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => setShowAllProjects(true)}
            className="group inline-flex items-center gap-3 px-8 py-3.5 bg-gradient-to-r from-[#6B7B4A]/10 to-[#7D8F5A]/10 hover:from-[#6B7B4A]/20 hover:to-[#7D8F5A]/20 border border-[#6B7B4A]/30 text-[#4A532E] hover:text-[#2D3A1F] rounded-full font-bold transition-all duration-300 shadow-sm"
          >
            <Eye size={18} className="group-hover:scale-110 transition-transform" />
            Lihat Semua Proyek
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      )}

      {showAllProjects && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => setShowAllProjects(false)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#E8E0D0]/80 hover:bg-[#DDD5C5] border border-[#576238]/20 text-[#4A532E] hover:text-[#2D3A1F] rounded-full text-sm font-bold transition-all"
          >
            Tampilkan Lebih Sedikit
          </button>
        </motion.div>
      )}
    </section>
  );
}