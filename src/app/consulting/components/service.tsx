"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Executive Search",
    icon: "/images/icons/svg/executive-search.svg",
    points: ["C-Level & Senior Roles", "Leadership Assessment", "Succession Planning"],
  },
  {
    title: "Mass Recruitment",
    icon: "/images/icons/svg/mass-recruitment.svg",
    points: ["Campus Hiring", "Walk-ins & Fairs", "Graduate Programs"],
  },
  {
    title: "Specialized Hiring",
    icon: "/images/icons/svg/talent.svg",
    points: ["Tech, Finance, Health", "Niche & Rare Roles", "Expert Screening"],
  },
  {
    title: "HR Consulting",
    icon: "/images/icons/svg/hr-consulting.svg",
    points: ["HR Frameworks", "Policy Design", "Talent Strategy"],
  },
  {
    title: "Talent Mapping",
    icon: "/images/icons/svg/specialized.svg",
    points: ["Market Insights", "Benchmarking", "Strategic Planning"],
  },
  {
    title: "RPO",
    icon: "/images/icons/svg/rpo.svg",
    points: ["Dedicated Recruiters", "Full-Cycle Hiring", "Scalable Support"],
  },
  {
    title: "Interview Service",
    icon: "/images/icons/svg/interview.svg",
    points: ["Expert Panels", "Remote Interviewing", "Structured Evaluation"],
  },
  {
    title: "Employer Branding",
    icon: "/images/icons/svg/branding.svg",
    points: ["Brand Storytelling", "Engaging Job Ads", "Candidate Experience"],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative z-10 py-24 px-6 sm:px-10 bg-gradient-to-br from-[#fdfbfb] via-[#ebedee] to-[#dfe9f3] text-[#1a1a1a] overflow-hidden"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#ef4123] tracking-tight mb-4">
          Our Services
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed tracking-wide">
          Strategic and specialized recruitment solutions tailored for your growth.
        </p>
      </div>

     {/* Responsive Grid */}
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group bg-white/50 backdrop-blur-md border border-[#ef4123]/10 p-6 rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
          >
            {/* Icon */}
            <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-black group-hover:border-[#ef4123] flex items-center justify-center transition-colors duration-300">
              <Image src={service.icon} alt={service.title} width={40} height={40} />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-[#ef4123] tracking-wide mb-3">
              {service.title}
            </h3>

            {/* Points */}
            <ul className="text-sm text-gray-700 leading-relaxed tracking-wide text-center space-y-1">
              {service.points.map((point, idx) => (
                <li key={idx}>
                  <span className="text-[#ef4123] font-bold mr-1">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
