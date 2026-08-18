"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, MapPin, CheckCircle, Copy } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [showSuccess, setShowSuccess] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const { t } = useLanguage();

  const WHATSAPP = "6289514215508";
  const EMAIL = "aguus.tian2001@gmail.com";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Halo Agustian!%0A%0A*${formData.name}*%0A${formData.email}%0A%0A${formData.message}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
    setShowSuccess(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setShowSuccess(false), 4000);
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="kontak" className="py-24 px-6 max-w-6xl mx-auto">
      {showSuccess && (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#6B7B4A] text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 text-sm">
          <CheckCircle size={18} /> {t.contact.success}
        </motion.div>
      )}

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2D3A1F] mb-4">
          {t.contact.title1} <span className="text-[#576238]">{t.contact.title2}</span>
        </h2>
        <p className="text-[#5A6B3E]">{t.contact.subtitle}</p>
        <div className="w-16 h-1 bg-[#576238] mx-auto rounded-full mt-4"></div>
      </motion.div>

      <div className="grid md:grid-cols-5 gap-8">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:col-span-2 space-y-4">
          <div className="p-6 bg-[#6B7B4A]/5 rounded-2xl border border-[#576238]/10">
            <h3 className="font-bold text-[#2D3A1F] flex items-center gap-2 mb-4"><FaWhatsapp className="text-[#6B7B4A]" /> {t.contact.contactMe}</h3>
            <p className="text-[#5A6B3E] text-sm mb-6">{t.contact.contactDesc}</p>

            {[
              { icon: <FaWhatsapp size={20} />, label: "WhatsApp", value: "+62 895-1421-5508", type: "wa" },
              { icon: <Mail size={18} />, label: "Email", value: EMAIL, type: "email" },
              { icon: <MapPin size={18} />, label: t.contact.locLabel, value: t.contact.locValue, type: null },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-[#E8E0D0]/30 rounded-xl border border-[#576238]/10 mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#6B7B4A]/10 rounded-lg text-[#6B7B4A]">{item.icon}</div>
                  <div>
                    <p className="text-xs text-[#5A6B3E]">{item.label}</p>
                    <p className="text-[#2D3A1F] font-medium text-sm">{item.value}</p>
                  </div>
                </div>
                {item.type && (
                  <button onClick={() => copyToClipboard(item.type === "wa" ? WHATSAPP : EMAIL, item.type as string)} className="p-2 hover:bg-[#D0C8B8]/50 rounded-lg transition-all">
                    {copied === item.type ? <CheckCircle size={16} className="text-[#6B7B4A]" /> : <Copy size={16} className="text-[#5A6B3E]" />}
                  </button>
                )}
              </div>
            ))}

            <div className="flex items-center gap-2 p-3 bg-[#E8E0D0]/20 rounded-xl mt-4">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6B7B4A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#6B7B4A]"></span>
              </span>
              <span className="text-xs text-[#5A6B3E]">{t.contact.status}</span>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:col-span-3">
          <form onSubmit={handleSubmit} className="p-6 md:p-8 bg-[#E8E0D0]/20 backdrop-blur-sm rounded-2xl border border-[#576238]/10 space-y-5">
            <div className="flex items-center gap-3 pb-4 border-b border-[#576238]/10">
              <FaWhatsapp className="text-[#6B7B4A]" size={22} />
              <div>
                <h3 className="font-bold text-[#2D3A1F]">{t.contact.formTitle}</h3>
                <p className="text-xs text-[#5A6B3E]">{t.contact.formSub}</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder={t.contact.phName} className="w-full px-4 py-3 bg-[#F0EADC]/50 border border-[#576238]/20 rounded-xl text-[#2D3A1F] placeholder:text-[#7D8F5A] focus:outline-none focus:border-[#6B7B4A] transition-all" />
              <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email" className="w-full px-4 py-3 bg-[#F0EADC]/50 border border-[#576238]/20 rounded-xl text-[#2D3A1F] placeholder:text-[#7D8F5A] focus:outline-none focus:border-[#6B7B4A] transition-all" />
            </div>
            <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} placeholder={t.contact.phMessage} className="w-full px-4 py-3 bg-[#F0EADC]/50 border border-[#576238]/20 rounded-xl text-[#2D3A1F] placeholder:text-[#7D8F5A] focus:outline-none focus:border-[#6B7B4A] transition-all resize-none" />
            <button type="submit" className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#6B7B4A] to-[#7D8F5A] hover:from-[#576238] hover:to-[#6B7B4A] text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-[#6B7B4A]/20 transition-all">
              <FaWhatsapp size={20} /> {t.contact.btnSubmit} <Send size={16} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}