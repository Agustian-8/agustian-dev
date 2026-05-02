"use client";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Eye } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

const featuredProjects = [
  {
    title: "SPK Penentuan Kelas Siswa",
    category: "Skripsi • Sistem Pendukung Keputusan",
    description:
      "Implementasi kombinasi metode PIPRECIA (Pivot Pairwise Relative Criteria Importance Assessment) dan MAUT (Multi-Attribute Utility Theory) pada Sistem Pendukung Keputusan untuk penentuan kelas siswa. Aplikasi web ini merupakan hasil penelitian Tugas Akhir S1 Teknik Informatika.",
    tech: ["Laravel", "Filament PHP", "MySQL", "PIPRECIA", "MAUT", "Tailwind CSS"],
    image: "/Project-1.jpeg",
    link: "#",
    github: "#",
  },
  {
  title: "Sistem Clustering Penyakit Menular Kalbar",
  category: "Skripsi • Machine Learning • Web App",
  description:
    "Analisis algoritma K-Means Clustering untuk pengelompokan data penyakit menular pada manusia di Provinsi Kalimantan Barat. Data diolah menggunakan Jupyter Notebook (Python) dan hasil analisis diintegrasikan ke dalam dashboard interaktif berbasis Laravel Filament PHP untuk visualisasi dan manajemen data.",
  tech: ["Laravel", "Filament PHP", "Python", "Jupyter Notebook", "K-Means Clustering", "Pandas", "MySQL"],
  image: "/Project-2.jpeg",
  link: "#",
  github: "#",
  },
  {
  title: "Website Rental Mobil",
  category: "Web Development • UI/UX",
  description:
    "Pengembangan website rental mobil yang modern dan responsif. Menampilkan katalog armada lengkap dengan spesifikasi, sistem pemesanan online, simulasi biaya sewa, dan informasi layanan untuk memudahkan pelanggan.",
  tech: ["React", "Tailwind CSS", "Framer Motion", "Responsive Design"],
  image: "/Project-3.png",
  link: "#",
  github: "#",
  },
  {
  title: "Website TK AL-Mukaddimah",
  category: "Web Development • UI/UX",
  description:
    "Pengembangan website resmi TK AL-Mukaddimah yang informatif dan menarik. Menampilkan profil sekolah, program pembelajaran, fasilitas, galeri kegiatan, dan sistem pendaftaran online untuk memudahkan orang tua murid.",
  tech: ["Vue", "Tailwind CSS", "Framer Motion", "Responsive Design"],
  image: "/Project-4.png",
  link: "#",
  github: "#",
    },
];

const allProjects = [
  ...featuredProjects,
  {
  title: "Rekomendasi Tempat Kos Pontianak",
  category: "Skripsi • Machine Learning",
  description:
    "Penerapan metode Collaborative Filtering untuk sistem rekomendasi tempat kos di sekitar kampus Universitas Muhammadiyah Pontianak. Dibangun menggunakan Python dan Streamlit untuk membantu mahasiswa menemukan kos yang sesuai dengan preferensi dan budget berdasarkan rating serta ulasan pengguna.",
  tech: ["Python", "Streamlit", "Collaborative Filtering", "Pandas", "Scikit-Learn"],
  image: "/Project-5.png",
  link: "#",
  github: "#",
  },
  {
  title: "Prediksi Penderita Tuberkulosis Pontianak",
  category: "Skripsi • Machine Learning",
  description:
    "Prediksi jumlah penderita penyakit Tuberkulosis (TB) di Kota Pontianak menggunakan algoritma Support Vector Regression (SVR). Dibangun dengan Python dan Streamlit untuk membantu Dinas Kesehatan dalam perencanaan penanganan dan pencegahan penyebaran TB.",
  tech: ["Python", "Streamlit", "Support Vector Regression", "Pandas", "Scikit-Learn", "Matplotlib"],
  image: "/Project-6.jpeg",
  link: "#",
  github: "#",
  },
  {
  title: "Klasifikasi Citra Tanaman Obat Liar",
  category: "Skripsi • Deep Learning",
  description:
    "Klasifikasi citra tanaman merambat liar berkhasiat obat menggunakan algoritma Convolutional Neural Network (CNN). Dibangun dengan Python dan Streamlit untuk membantu masyarakat mengidentifikasi tanaman obat tradisional berdasarkan gambar daun.",
  tech: ["Python", "Streamlit", "CNN", "TensorFlow", "Keras", "OpenCV", "Pandas"],
  image: "/Project-7.png",
  link: "#",
  github: "#",
  },
  {
  title: "Sistem Internal Firman's Group",
  category: "Web App • Enterprise",
  description:
    "Aplikasi internal untuk manajemen operasional perusahaan Firman's Group. Mencakup modul pengelolaan data karyawan, inventaris, penggajian, dan pelaporan terintegrasi yang dibangun menggunakan Laravel Filament PHP.",
  tech: ["Laravel", "Filament PHP", "MySQL", "Livewire", "Tailwind CSS"],
  image: "/Project-8.png",
  link: "#",
  github: "#",
  },
  {
  title: "Prediksi Harga Mobil Bekas",
  category: "Skripsi • Machine Learning",
  description:
    "Perbandingan metode Regresi Linear dan Support Vector Regression (SVR) untuk prediksi harga mobil bekas. Dibangun dengan Python dan Streamlit untuk membantu masyarakat memperkirakan harga kendaraan bekas berdasarkan spesifikasi dan kondisi mobil.",
  tech: ["Python", "Streamlit", "Regresi Linear", "Support Vector Regression", "Pandas", "Scikit-Learn"],
  image: "/Project-9.png",
  link: "#",
  github: "#",
  },
  {
  title: "Analisis Sentimen Review Coffee Shop",
  category: "Skripsi • Machine Learning",
  description:
    "Perbandingan kinerja algoritma Naïve Bayes dan K-Nearest Neighbor (KNN) dalam analisis sentimen review coffee shop. Dibangun dengan Python dan Streamlit untuk mengklasifikasikan ulasan pelanggan ke dalam sentimen positif, negatif, atau netral.",
  tech: ["Python", "Streamlit", "Naïve Bayes", "K-Nearest Neighbor", "NLTK", "Pandas", "Scikit-Learn"],
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
            <p className="text-[#5A6B3E] max-w-2xl">
              {showAllProjects 
                ? "Semua proyek yang pernah saya kerjakan, dari web development hingga machine learning."
                : "Proyek unggulan yang menggabungkan teknologi modern dan solusi bisnis."
              }
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
              <span className="text-[#5A6B3E] text-sm">Proyek Selesai</span>
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
            whileHover={{ y: -8 }}
            className="group relative bg-gradient-to-br from-[#E8E0D0]/40 to-[#DDD5C5]/40 backdrop-blur-sm rounded-3xl border border-[#576238]/20 hover:border-[#6B7B4A]/50 transition-all duration-300 overflow-hidden flex flex-col shadow-xl hover:shadow-[#6B7B4A]/10"
          >
            <div className="relative h-52 w-full bg-gradient-to-br from-[#E8E0D0] to-[#DDD5C5] border-b border-[#576238]/20 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D3A1F] via-[#2D3A1F]/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
              
              <div className="absolute top-4 left-4">
                <span className="inline-block px-3 py-1.5 bg-[#2D3A1F]/80 backdrop-blur-sm text-[#C8D6A5] text-xs font-bold uppercase tracking-wider rounded-full border border-[#6B7B4A]/30">
                  {project.category}
                </span>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-[#2D3A1F] group-hover:text-[#6B7B4A] transition-colors line-clamp-2">
                  {project.title}
                </h3>
                
                <div className="flex gap-2 ml-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-[#D0C8B8]/50 rounded-full hover:bg-[#6B7B4A]/30 text-[#5A6B3E] hover:text-[#6B7B4A] transition-all hover:scale-110"
                    aria-label="Preview project"
                  >
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-[#D0C8B8]/50 rounded-full hover:bg-[#6B7B4A]/30 text-[#5A6B3E] hover:text-[#6B7B4A] transition-all hover:scale-110"
                    aria-label="View source code"
                  >
                    <FaGithub size={16} />
                  </a>
                </div>
              </div>
              
              <p className="text-[#5A6B3E] mb-5 text-sm leading-relaxed flex-1 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.slice(0, 4).map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-2.5 py-1.5 bg-[#D0C8B8]/80 text-[#4A532E] rounded-lg border border-[#576238]/20 hover:border-[#6B7B4A]/30 hover:text-[#2D3A1F] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="text-xs font-medium px-2.5 py-1.5 bg-[#D0C8B8]/80 text-[#5A6B3E] rounded-lg border border-[#576238]/20">
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
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#6B7B4A]/10 to-[#7D8F5A]/10 hover:from-[#6B7B4A]/20 hover:to-[#7D8F5A]/20 border border-[#6B7B4A]/30 hover:border-[#6B7B4A]/50 text-[#6B7B4A] hover:text-[#576238] rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-[#6B7B4A]/20"
          >
            <Eye size={20} className="group-hover:scale-110 transition-transform" />
            Lihat Semua Proyek ({allProjects.length})
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#E8E0D0]/50 hover:bg-[#E8E0D0] border border-[#576238]/20 text-[#5A6B3E] hover:text-[#2D3A1F] rounded-full text-sm font-medium transition-all"
          >
            Tampilkan Lebih Sedikit
          </button>
        </motion.div>
      )}
    </section>
  );
}