"use client";
import { motion } from "framer-motion";
import { Layout, Brain, Palette, Code2, Cpu, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layout className="text-[#576238]" size={28} />,
    skills: [
      "JavaScript",
      "React",
      "Vue",
      "Tailwind CSS",
      "Responsive Design"
    ],
    color: "from-[#576238]/20 to-[#576238]/5",
  },
  {
    title: "Backend Development",
    icon: <Code2 className="text-[#5A6B3E]" size={28} />,
    skills: [
      "PHP",
      "Laravel",
      "Filament PHP",
      "Python",
      "Flask",
      "REST API",
      "MySQL"
    ],
    color: "from-[#5A6B3E]/20 to-[#5A6B3E]/5",
  },
  {
    title: "Machine Learning & AI",
    icon: <Brain className="text-[#6B7B4A]" size={28} />,
    skills: [
      "Python",
      "Streamlit",
      "K-Means",
      "Collaborative Filtering",
      "Linear Regression",
      "CNN",
      "SVR",
      "Pandas",
      "NLTK"
    ],
    color: "from-[#6B7B4A]/20 to-[#6B7B4A]/5",
  },
  {
    title: "UI/UX & Design Tools",
    icon: <Palette className="text-[#7D8F5A]" size={28} />,
    skills: [
      "Figma",
      "Minimalist Design",
      "Corporate Identity",
      "Logo Creation",
      "Wireframing",
      "Prototyping"
    ],
    color: "from-[#7D8F5A]/20 to-[#7D8F5A]/5",
  },
];

export default function Skills() {
  return (
    <section id="keahlian" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#2D3A1F] mb-4">
          Tech Stack & Keahlian
        </h2>
        <p className="text-[#5A6B3E] max-w-2xl mx-auto">
          Kombinasi teknologi modern dan algoritma machine learning untuk solusi digital yang optimal.
        </p>
        <div className="w-16 h-1 bg-[#576238] mx-auto rounded-full mt-4"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15 }}
            whileHover={{ y: -8 }}
            className={`relative p-6 rounded-2xl bg-gradient-to-br ${category.color} border border-[#576238]/20 backdrop-blur-sm shadow-xl hover:shadow-[#576238]/10 transition-all duration-300 h-full flex flex-col`}
          >
            <div className="mb-5 p-3 bg-[#F0EADC]/50 rounded-xl inline-block w-fit">
              {category.icon}
            </div>
            <h3 className="text-lg font-bold text-[#2D3A1F] mb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2 flex-1">
              {category.skills.map((skill, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 + i * 0.03 }}
                  className="text-xs font-medium px-3 py-1.5 bg-[#E8E0D0]/80 text-[#4A532E] rounded-md border border-[#576238]/20 hover:border-[#576238]/50 hover:text-[#2D3A1F] hover:bg-[#DDD5C5] transition-all cursor-default"
                >
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