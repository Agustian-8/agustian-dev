"use client";
import { motion } from "framer-motion";
import { Layout, Brain, Palette, Code2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const skillCategories = [
  { title: "Frontend", icon: <Layout className="text-[#576238]" size={28} />, skills: ["JavaScript", "React", "Vue", "Tailwind CSS", "Responsive UI"], color: "from-[#576238]/15 to-[#576238]/5" },
  { title: "Backend", icon: <Code2 className="text-[#5A6B3E]" size={28} />, skills: ["PHP", "Laravel", "Filament PHP", "Python", "REST API", "MySQL"], color: "from-[#5A6B3E]/15 to-[#5A6B3E]/5" },
  { title: "Data & AI", icon: <Brain className="text-[#6B7B4A]" size={28} />, skills: ["Python", "Streamlit", "CNN", "SVR", "K-Means", "Pandas"], color: "from-[#6B7B4A]/15 to-[#6B7B4A]/5" },
  { title: "UI/UX & Tools", icon: <Palette className="text-[#7D8F5A]" size={28} />, skills: ["Figma", "Wireframing", "Prototyping", "Minimalist Design"], color: "from-[#7D8F5A]/15 to-[#7D8F5A]/5" },
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="keahlian" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2D3A1F] mb-4">{t.skills.title}</h2>
        <p className="text-[#5A6B3E] max-w-xl mx-auto">{t.skills.subtitle}</p>
        <div className="w-16 h-1 bg-[#576238] mx-auto rounded-full mt-4"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -5 }} className={`p-6 rounded-2xl bg-gradient-to-br ${category.color} border border-[#576238]/20 backdrop-blur-sm shadow-md hover:shadow-lg transition-all flex flex-col`}>
            <div className="mb-4 p-3 bg-[#F0EADC]/80 rounded-xl w-fit shadow-sm">{category.icon}</div>
            <h3 className="text-lg font-bold text-[#2D3A1F] mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2 mt-auto">
              {category.skills.map((skill, i) => (
                <motion.span key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 + i * 0.05 }} className="text-xs font-bold px-3 py-1.5 bg-[#E8E0D0]/90 text-[#4A532E] rounded-md border border-[#576238]/20">
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}