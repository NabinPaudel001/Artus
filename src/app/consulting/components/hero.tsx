"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ShowcaseItem {
  title: string;
  desc: string;
  icon: string;
}

const showcaseItems: ShowcaseItem[] = [
  {
    title: "Executive Search",
    desc: "We identify leaders who drive change and elevate your organization.",
    icon: "images/icons/svg/executive-search.svg",
  },
  {
    title: "HR Advisory",
    desc: "Aligning people, strategy, and culture for sustainable growth.",
    icon: "images/icons/svg/hr-consulting.svg",
  },
  {
    title: "Talent Mapping",
    desc: "Data-driven insights on market talent to support informed hiring decisions.",
    icon: "images/icons/svg/specialized.svg",
  },
];

interface HeroProps {
  isMobile?: boolean;
}

export default function Hero({ isMobile = false }: HeroProps) {
  return (
    <section className="mt-20 sm:mt-10 relative flex flex-col items-center justify-center text-center min-h-screen px-6 sm:px-8">
      <motion.h2
        initial={{ opacity: 0, y: isMobile ? 20 : 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-[#e62e0e] via-[#ef4123] to-[#f7673c] bg-clip-text text-transparent drop-shadow-md"
      >
        Empowering <span className="tracking-normal"> Human Capital</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        className="mt-8 max-w-3xl text-xl md:text-2xl text-gray-700 font-medium leading-relaxed"
      >
        Artus Consulting is redefining recruitment and HR practices in Nepal. With 15+ years of experience in executive search, talent acquisition, and HR advisory—we connect people to purpose.
      </motion.p>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {showcaseItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.3 }}
            className="bg-white/80 backdrop-blur-md border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
          >
<div className="flex items-center justify-center mb-4 group">
  <div className="w-14 h-14 rounded-full border-2 border-black group-hover:border-[#ef4123] transition-colors duration-300 flex items-center justify-center">
    <Image src={item.icon} alt={item.title} width={45} height={45} />
  </div>
</div>


            <h4 className="font-semibold text-lg text-[#ef4123] mb-2 tracking-wide">
              {item.title}
            </h4>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
