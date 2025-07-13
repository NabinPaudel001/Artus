"use client";

import { motion } from "framer-motion";

const aboutPoints = [
  {
    title: "Professionalism",
    desc: "We follow proven, ethical processes that meet global standards.",
  },
  {
    title: "Expert Team",
    desc: "Skilled recruiters with deep cross-industry experience.",
  },
  {
    title: "Proven Expertise",
    desc: "15+ years of mastering recruitment psychology.",
  },
  {
    title: "Trusted Partner",
    desc: "Long-term relationships with Nepal’s top firms.",
  },
];

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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-6 text-[#ef4123] tracking-tight"
        >
          About Artus Consulting
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-14"
        >
          Artus Consulting is a pioneer in headhunting & recruitment services in
          Nepal. Since 2009, we’ve connected top talent to top firms across
          industries, blending psychology, experience, and cultural fit for
          unmatched hiring outcomes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
        >
          {aboutPoints.map((item, index) => (
            <div
              key={index}
              className="group bg-white border border-[#ef4123]/20 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg hover:bg-[#fff5f3] hover:border-[#ef4123] transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#ef4123]/10 flex items-center justify-center transition-transform duration-300">
                <div className="w-4 h-4 bg-[#ef4123] rounded-full transition-all duration-300 group-hover:scale-125 group-hover:bg-[#d53c1e]" />
              </div>
              <h4 className="text-lg font-semibold text-[#ef4123] mb-2 tracking-wide">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
