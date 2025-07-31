"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Services Data
const services = [
  {
    title: "Executive Search",
    icon: "/images/icons/svg/executive-search.svg",
    points: ["Headhunting C-Suite and Leadership Profiles", "Expat Sourcing"],
  },
  {
    title: "Specialized Hiring",
    icon: "/images/icons/svg/talent.svg",
    points: ["Sensitive & Confidential Hiring", "Recruitment across all functional areas"],
  },
  {
    title: "HR & Recruitment Advisory",
    icon: "/images/icons/svg/hr-consulting.svg",
    points: ["Recruitment Strategy & Process reengineering", "HR Frameworks and Processes"],
  },
  {
    title: "Talent Mapping & Benchmarking",
    icon: "/images/icons/svg/specialized.svg",
    points: ["Job Market Insights", "Position Benchmarking across Industries"],
  },
  {
    title: "Employer Branding",
    icon: "/images/icons/svg/branding.svg",
    points: ["Employer Value Propositions", "Employer Branding strategy"],
  },
  {
    title: "Other Services",
    icon: "/images/icons/svg/interview.svg",
    points: [
      "Candidate assessment, Screening & Interviewing",
      "Reference Checks & document verification",
    ],
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
      type: "spring" as const,
      stiffness: 60,
      damping: 12,
    },
  },
};


export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative z-10 py-24 px-4 sm:px-8 bg-[linear-gradient(to_top,_#f29494,_#ec6c6c,_#e34a4a,_#d93838,_#cc3030,_#bf2a2a,_#b32323)] text-[#1a1a1a] overflow-hidden"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", type: "spring", stiffness: 70, damping: 14 }}
          className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 60, damping: 12 }}
          className="text-gray-100 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed tracking-wide"
        >
          Strategic and specialized recruitment solutions tailored for your growth.
        </motion.p>
      </div>

      {/* Responsive Grid with Staggered Card Animation */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        {services.map((service, i) => (
          <motion.div key={i} variants={cardVariants}>
            <div className="group bg-white/80 backdrop-blur-md border border-gray-200 p-6 rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-black group-hover:border-[#ef4123] flex items-center justify-center transition-colors duration-300">
                <Image src={service.icon} alt={service.title} width={40} height={40} />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg text-[#ef4123] mb-2 tracking-wide">
                {service.title}
              </h3>

              {/* Points */}
              <ul className="text-sm text-gray-700 leading-relaxed tracking-wide text-center space-y-1">
                {service.points.map((point, idx) => (
                  <li key={idx}>
                    <span className="text-gray-600 text-sm leading-relaxed mr-1">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
