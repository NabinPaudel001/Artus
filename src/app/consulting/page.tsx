"use client";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/hero";
import ServicesSection from "./components/service";
import AboutSection from "./components/AboutSection";
import ClientsSection from "./components/ClientSection";
import TeamSection from "./components/TeamSection";
import ContactSection from "./components/ContactPage";
import Footer from "./components/Footer";


export default function ConsultingPage() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;


  return (
    <main className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-[#fdfbfb] via-[#ebedee] to-[#dfe9f3] text-[#1a1a1a] font-sans select-none">
      {/* Animated Blobs */}
      <div className="fixed inset-0 -z-20">
      <motion.div
        animate={{ x: [0, 20, -20, 0], y: [0, -30, 30, 0], scale: [1, 1.1, 0.9, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-96 h-96 rounded-full bg-pink-300 blur-[100px] opacity-50"
      />
      <motion.div
        animate={{ x: [0, -15, 15, 0], y: [0, 25, -25, 0], scale: [1, 1.05, 0.95, 1] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
        className="absolute top-1/2 right-10 w-80 h-80 rounded-full bg-red-200 blur-[80px] opacity-40"
      />
      <motion.div
        animate={{ x: [0, 10, -10, 0], y: [0, 15, -15, 0], scale: [1, 0.95, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 11, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/3 w-72 h-72 rounded-full bg-red-300 blur-[90px] opacity-50"
      />
    </div>
  <Header />
  <Hero isMobile={isMobile} />
  <AboutSection />
  <ServicesSection />
  <ClientsSection />
  <TeamSection />
  <ContactSection />
  <Footer />

      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }
        .animate-fadeInUp.delay-200 {
          animation-delay: 0.2s;
        }
        @keyframes blob1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob1 {
          animation: blob1 7s infinite ease-in-out;
        }
        @keyframes blob2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-15px, 25px) scale(1.05); }
          66% { transform: translate(15px, -20px) scale(0.95); }
        }
        .animate-blob2 {
          animation: blob2 6s infinite ease-in-out;
        }
        @keyframes blob3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(10px, 15px) scale(0.95); }
          66% { transform: translate(-10px, -15px) scale(1.05); }
        }
        .animate-blob3 {
          animation: blob3 8s infinite ease-in-out;
        }
      `}</style>
    </main>
  );
}
