"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Send, User, Mail, MessageSquare, MapPin, CheckCircle, Copy, ExternalLink } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const WHATSAPP_NUMBER = "6289514215508";
  const EMAIL_ADDRESS = "aguus.tian2001@gmail.com";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const formattedMessage = `
Halo Agustian! 👋

Saya ingin menghubungi Anda melalui website portfolio.

*Data Diri:*
📛 Nama: ${formData.name}
📧 Email: ${formData.email}
📌 Subjek: ${formData.subject || "(Tidak ada subjek)"}

*Pesan:*
${formData.message}

_Dikirim dari form kontak portfolio website_
    `.trim();

    const encodedMessage = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
    
    setShowSuccess(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="kontak" className="py-24 px-6 max-w-6xl mx-auto">
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#6B7B4A]/95 backdrop-blur-sm text-white px-6 py-4 rounded-full shadow-lg flex items-center gap-3"
        >
          <CheckCircle size={20} />
          <span>WhatsApp terbuka! Kirim pesan untuk lanjutkan percakapan 🚀</span>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#2D3A1F] mb-4">
          Mari <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#576238] to-[#6B7B4A]">Berkolaborasi</span>
        </h2>
        <p className="text-[#5A6B3E] max-w-2xl mx-auto">
          Punya proyek menarik atau ingin berdiskusi? Isi form di bawah dan langsung terhubung via WhatsApp.
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-[#576238] to-[#6B7B4A] mx-auto rounded-full mt-4"></div>
      </motion.div>

      <div className="grid md:grid-cols-5 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 space-y-4"
        >
          <div className="bg-gradient-to-br from-[#6B7B4A]/10 to-[#7D8F5A]/10 p-6 rounded-2xl border border-[#576238]/20 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-[#2D3A1F] mb-4 flex items-center gap-2">
              <FaWhatsapp className="text-[#6B7B4A] text-2xl" /> Hubungi Langsung
            </h3>
            <p className="text-[#5A6B3E] text-sm mb-6 leading-relaxed">
              Isi form di samping dan Anda akan langsung diarahkan ke WhatsApp saya. Respon cepat dalam hitungan menit!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-[#6B7B4A]/10 rounded-xl border border-[#6B7B4A]/30 hover:border-[#6B7B4A]/50 transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-[#6B7B4A]/20 rounded-full">
                    <FaWhatsapp className="text-[#6B7B4A]" size={24} />
                  </div>
                  <div>
                    <p className="text-[#5A6B3E] text-xs">WhatsApp</p>
                    <p className="text-[#2D3A1F] font-medium">+62 895-1421-5508</p>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(WHATSAPP_NUMBER, "wa")}
                  className="p-2 hover:bg-[#D0C8B8]/50 rounded-lg transition-all"
                  title="Copy nomor WhatsApp"
                >
                  {copied === "wa" ? (
                    <CheckCircle size={18} className="text-[#6B7B4A]" />
                  ) : (
                    <Copy size={18} className="text-[#5A6B3E]" />
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-[#E8E0D0]/40 rounded-xl border border-[#576238]/20 hover:border-[#576238]/50 transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-[#576238]/20 rounded-full">
                    <Mail className="text-[#576238]" size={20} />
                  </div>
                  <div>
                    <p className="text-[#5A6B3E] text-xs">Email</p>
                    <p className="text-[#2D3A1F] font-medium text-sm md:text-base truncate max-w-[180px]">{EMAIL_ADDRESS}</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <button
                    onClick={() => copyToClipboard(EMAIL_ADDRESS, "email")}
                    className="p-2 hover:bg-[#D0C8B8]/50 rounded-lg transition-all"
                    title="Copy email"
                  >
                    {copied === "email" ? (
                      <CheckCircle size={18} className="text-[#6B7B4A]" />
                    ) : (
                      <Copy size={18} className="text-[#5A6B3E]" />
                    )}
                  </button>
                  <a
                    href={`mailto:${EMAIL_ADDRESS}`}
                    className="p-2 hover:bg-[#D0C8B8]/50 rounded-lg transition-all"
                    title="Buka email"
                  >
                    <ExternalLink size={18} className="text-[#5A6B3E]" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-[#E8E0D0]/40 rounded-xl border border-[#576238]/20">
                <div className="p-3 bg-[#7D8F5A]/20 rounded-full">
                  <MapPin className="text-[#7D8F5A]" size={20} />
                </div>
                <div>
                  <p className="text-[#5A6B3E] text-xs">Lokasi</p>
                  <p className="text-[#2D3A1F] font-medium">Pontianak, Kalimantan Barat</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-[#E8E0D0]/30 rounded-xl border border-[#576238]/20">
              <p className="text-[#4A532E] text-sm flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6B7B4A] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#6B7B4A]"></span>
                </span>
                <span className="font-medium text-[#2D3A1F]">Online</span> - Biasanya merespon dalam hitungan menit
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-3"
        >
          <div className="bg-[#E8E0D0]/30 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-[#576238]/20 shadow-xl">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#576238]/20">
              <div className="p-2 bg-[#6B7B4A]/20 rounded-lg">
                <FaWhatsapp className="text-[#6B7B4A]" size={20} />
              </div>
              <div>
                <h3 className="text-[#2D3A1F] font-bold text-lg">Kirim Pesan via WhatsApp</h3>
                <p className="text-[#5A6B3E] text-xs">Isi form, klik kirim, dan lanjutkan chat di WhatsApp</p>
              </div>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#4A532E] mb-2">
                    Nama Lengkap <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7D8F5A]">
                      <User size={18} />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Nama Anda"
                      className="w-full pl-10 pr-4 py-3 bg-[#F0EADC]/50 border border-[#576238]/30 rounded-xl text-[#2D3A1F] placeholder:text-[#7D8F5A] focus:outline-none focus:border-[#6B7B4A] focus:ring-1 focus:ring-[#6B7B4A] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#4A532E] mb-2">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7D8F5A]">
                      <Mail size={18} />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="email@example.com"
                      className="w-full pl-10 pr-4 py-3 bg-[#F0EADC]/50 border border-[#576238]/30 rounded-xl text-[#2D3A1F] placeholder:text-[#7D8F5A] focus:outline-none focus:border-[#6B7B4A] focus:ring-1 focus:ring-[#6B7B4A] transition-all"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#4A532E] mb-2">
                  Subjek
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7D8F5A]">
                    <MessageSquare size={18} />
                  </div>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Proyek Website / Kolaborasi / Pertanyaan"
                    className="w-full pl-10 pr-4 py-3 bg-[#F0EADC]/50 border border-[#576238]/30 rounded-xl text-[#2D3A1F] placeholder:text-[#7D8F5A] focus:outline-none focus:border-[#6B7B4A] focus:ring-1 focus:ring-[#6B7B4A] transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#4A532E] mb-2">
                  Pesan <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Ceritakan tentang proyek atau kebutuhan Anda..."
                  className="w-full px-4 py-3 bg-[#F0EADC]/50 border border-[#576238]/30 rounded-xl text-[#2D3A1F] placeholder:text-[#7D8F5A] focus:outline-none focus:border-[#6B7B4A] focus:ring-1 focus:ring-[#6B7B4A] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#6B7B4A] to-[#7D8F5A] hover:from-[#576238] hover:to-[#6B7B4A] text-white font-semibold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-[#6B7B4A]/25 group"
              >
                <FaWhatsapp size={22} className="group-hover:scale-110 transition-transform" />
                Lanjutkan ke WhatsApp
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-[#7D8F5A] text-xs text-center">
                💡 Klik tombol di atas akan membuka WhatsApp dengan pesan otomatis. Anda bisa mengedit pesan sebelum mengirim.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}