"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ShowcaseItem {
  title: string;
  desc: string;
  icon: string;
}

const showcaseItems: ShowcaseItem[] = [
  {
    title: "Executive Search",
    desc: "Sourcing Top level executives who have potential to drive your organization to success",
    icon: "images/icons/svg/executive-search.svg",
  },
  {
    title: "HR & Recruitment Advisory",
    desc: "Providing expert advice on devising the precise Recruitment strategies and HR Practices.",
    icon: "images/icons/svg/hr-consulting.svg",
  },
  {
    title: "Talent Mapping",
    desc: "Experience Data-driven insights on market talent to support strategic hiring.",
    icon: "images/icons/svg/specialized.svg",
  },
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const SPRING_TYPE = "spring" as const;

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      type: SPRING_TYPE,
      stiffness: 60,
      damping: 12,
    },
  },
};

export default function Hero() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // ensures animations that rely on window size only happen on client
  }, []);

  return (
    <section
      className="relative flex flex-col items-center justify-center text-center min-h-screen px-4 sm:px-8 pt-24 pb-16
      bg-[url('/images/upx.svg')] bg-cover bg-center bg-no-repeat"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm -z-10" />
      {/* Red Glow */}
      <div className="absolute top-1/3 left-1/4 w-80 sm:w-[400px] h-80 sm:h-[400px] rounded-full bg-[#ff4d4d] opacity-20 blur-3xl -z-10" />

      {/* Title */}
      {isClient && (
        <motion.h2
          initial={{ opacity: 0, y: 100 }} // fixed value for SSR
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 60, damping: 14 }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r
          from-[#f12525] via-[#ef4123] to-[#ec2f0e]
          bg-clip-text text-transparent drop-shadow-md leading-normal tracking-normal sm:leading-normal"
        >
          Empowering Businesses<span className="tracking-normal">, Building Careers</span>
        </motion.h2>
      )}

      {/* Subtitle */}
      {isClient && (
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.1,
            type: "spring",
            stiffness: 50,
            damping: 12,
          }}
          className="mt-6 max-w-xl sm:max-w-2xl text-base sm:text-lg text-gray-800 font-medium leading-relaxed px-2"
        >
          Artus Consulting is redefining the Recruitment &amp; Human Resource Practices in Nepal.
          Backed by 15+ years of experience in Executive Search, Talent Acquisition, Recruitment
          Psychology and HR Advisory – we connect people to purpose.
        </motion.p>
      )}

      {/* Cards with staggered animation */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl px-4"
      >
        {showcaseItems.map((item, i) => (
          <motion.div key={i} variants={cardVariants}>
            <div className="bg-white/80 backdrop-blur-md border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="flex items-center justify-center mb-4 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-black group-hover:border-[#ef4123] transition-colors duration-300 flex items-center justify-center">
                  <img src={item.icon} alt={item.title} width={36} height={36} />
                </div>
              </div>
              <h4 className="font-semibold text-base sm:text-lg text-[#ef4123] mb-2 tracking-wide">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
