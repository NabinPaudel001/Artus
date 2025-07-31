"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
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

export default function TeamSection() {
  return (
    <section
      id="founders"
      className="w-full px-4 sm:px-8 py-24 space-y-24 bg-[linear-gradient(to_top,_#f8c7c7,_#f19a9a,_#ea7474,_#e14f4f,_#db3b3b,_#d83131,_#d22a2a)] text-white"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut", type: "spring", stiffness: 70, damping: 14 }}
        className="text-center"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-wide text-white">
          Founder Profile
        </h2>
      </motion.div>

      {/* Founder 1 */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16"
      >
        <motion.div variants={cardVariants}>
          <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-xl border-4 border-white">
            <Image
              src="/images/founder-placeholder.jpg"
              alt="Jwolit Budhathoki"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div variants={cardVariants} className="text-center md:text-left max-w-2xl">
          <p className="text-3xl font-extrabold mb-2 leading-tight text-white">
            Jwolit Budhathoki
          </p>
          <p className="italic text-lg mb-6 text-white font-semibold">
            MBA / Post Graduate in Psychological Counseling
          </p>
          <p className="text-md leading-relaxed text-black">
            With over 17 years of experience, Jwolit is a renowned HR Consultant, Headhunting
            Specialist and Corporate Trainer. As the visionary founder of Artus Consulting, he has
            deep expertise in the Recruitment &amp; Selection Psychology, Performance Management,
            Learning &amp; Development, New Venture Management and HR Advisory to drive impactful
            solutions across diverse industries. He has been working with the biggest Multinationals
            and business houses of Nepal.
          </p>
        </motion.div>
      </motion.div>

      {/* Founder 2 */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row-reverse items-center justify-center gap-10 md:gap-16"
      >
        <motion.div variants={cardVariants}>
          <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-xl border-4 border-white">
            <Image
              src="/images/founder2-placeholder.jpg"
              alt="Vaishali Sharma KC"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div variants={cardVariants} className="text-center md:text-left max-w-2xl">
          <p className="text-3xl font-extrabold mb-2 leading-tight text-white">
            Vaishali Sharma KC
          </p>
          <p className="italic text-xl mb-6 text-white font-semibold">MBA</p>
          <p className="text-md leading-relaxed text-black">
            Vaishali is a refined Brand and Marketing professional with enriched experience of more
            than 27 years across the industries, ranging from Banking, Hospitality, Media,
            Consulting &amp; Trading. She is the Co-founder of Artus and has expertise in developing
            comprehensive marketing plans tailored to specific business needs, formulating Brand and
            Marketing strategies, designing and execution of Campaigns, Events and providing
            advisory to Startups in developing Go-to Market strategies. She has already worked with
            some of the biggest brands of Nepalese Corporate sectors.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
