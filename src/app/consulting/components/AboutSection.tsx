"use client";

import { motion } from "framer-motion";

const aboutPoints = [
  {
    title: "Professionalism",
    desc: "We follow and promote the most ethical practices and processes.",
  },
  {
    title: "Expert Team",
    desc: "Highly skilled recruiters with deep cross-industry experience.",
  },
  {
    title: "Proven Expertise",
    desc: "15+ years of experience with in-depth understanding of the industry.",
  },
  {
    title: "Trusted Partner",
    desc: "Enduring relationship with Nepal’s Top organizations.",
  },
];

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 60,
      damping: 12,
    },
  },
} as const;

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-10 py-28 px-6 sm:px-10 bg-white overflow-hidden text-center"
    >
      {/* Decorative blobs */}
      <div className="absolute top-[-60px] left-[-40px] w-80 h-80 bg-pink-100 blur-[100px] opacity-30 rounded-full z-0" />
      <div className="absolute bottom-[-80px] right-[-40px] w-96 h-96 bg-red-100 blur-[100px] opacity-30 rounded-full z-0" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
            type: "spring",
            stiffness: 70,
            damping: 14,
          }}
          className="text-4xl sm:text-5xl font-bold mb-6 text-[#ef4123] tracking-tight"
        >
          About Artus Consulting
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            type: "spring",
            stiffness: 60,
            damping: 12,
          }}
          className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-14"
        >
          Artus Consulting is one of the Pioneer Agencies in providing specialized Headhunting &amp;
          Recruitment Services in Nepal. Since 2009, we have evolved as the most trusted partner to
          handle your sensitive and crucial hiring. During these years, we have connected Top
          Talents to the Top firms across the industries blending psychology, experience and
          cultural fit for unmatched hiring outcomes.
        </motion.p>

        {/* Card Grid with Staggered Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
        >
          {aboutPoints.map((item, index) => (
            <motion.div key={index} variants={cardVariants}>
              <div className="group bg-white border border-[#ef4123]/20 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg hover:bg-[#fff5f3] hover:border-[#ef4123] transition-all duration-300">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#ef4123]/10 flex items-center justify-center transition-transform duration-300">
                  <div className="w-4 h-4 bg-[#ef4123] rounded-full transition-all duration-300 group-hover:scale-125 group-hover:bg-[#d53c1e]" />
                </div>
                <h4 className="text-lg font-semibold text-[#ef4123] mb-2 tracking-wide">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
