"use client";

import Image from "next/image";

export default function TeamSection() {
  return (
    <section
      id="team"
      className="max-w-6xl mx-auto px-8 py-28 flex flex-col md:flex-row items-center gap-16"
    >
      {/* Founder Image */}
      <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-xl">
        <Image
          src="/images/founder-placeholder.jpg"
          alt="Jwolit Budhathoki"
          fill
          className="object-cover"
        />
      </div>

      {/* Founder Bio */}
      <div className="text-center md:text-left max-w-xl text-gray-700">
        <h3 className="text-4xl font-bold mb-3 text-[#ef4123] tracking-wide">
          Founder Profile
        </h3>
        <p className="text-3xl font-extrabold mb-2 text-gray-900 leading-tight">
          Jwolit Budhathoki
        </p>
        <p className="italic text-lg mb-6 text-gray-600">
          MBA | Post Graduate Diploma in Psychological Counseling
        </p>
        <p className="text-md leading-relaxed text-gray-700">
          With over 17 years of distinguished experience, Mr. Budhathoki is a renowned HR consultant, executive headhunter, and corporate trainer. As the visionary founder of Artus Consulting, he combines deep expertise in recruitment psychology, performance optimization, and organizational change management to drive impactful talent solutions across diverse industries.
        </p>
      </div>
    </section>
  );
}
