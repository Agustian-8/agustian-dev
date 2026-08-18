import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
// Tambahkan import LanguageProvider dari folder context yang sudah kita buat
import { LanguageProvider } from "@/context/LanguageContext"; 

// 1. Mengimpor dan mengatur font Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"], // Menyediakan berbagai ketebalan teks
  display: "swap",
});

// 2. Mengatur Meta Data (SEO) untuk tab browser
export const metadata: Metadata = {
  title: "Agustian | Web Developer",
  description: "Portofolio profesional Agustian. IT & System Staff, Web Developer, dan Data Science enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 3. Menambahkan 'scroll-smooth' agar saat menu navbar diklik, layarnya meluncur mulus
    <html lang="id" className="scroll-smooth">
      <body className={`${poppins.className} antialiased`}>
        {/* 4. Membungkus children dengan LanguageProvider agar semua komponen tahu bahasa yang aktif */}
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}