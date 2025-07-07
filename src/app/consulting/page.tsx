"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import Header from "./components/Header";

export default function ConsultingPage() {
  const [isMobile, setIsMobile] = useState(false);

  
useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  checkMobile();
  window.addEventListener("resize", checkMobile);
  return () => window.removeEventListener("resize", checkMobile);
}, []);
  const services = [
  {
    title: "Executive Search",
    icon: "/icons/executive-search.svg",
    points: [
      "C-Level & Senior Roles",
      "Leadership Assessment",
      "Succession Planning",
    ],
  },
  {
    title: "Mass Recruitment",
    icon: "/icons/mass-recruitment.svg",
    points: [
      "Campus Recruitment",
      "Walk-ins & Job Fairs",
      "Graduate Training Programs",
    ],
  },
  {
    title: "Specialized Recruitment",
    icon: "/icons/specialized.svg",
    points: [
      "Tech, Finance & Healthcare Roles",
      "Hard-to-Fill Positions",
      "Domain Expertise",
    ],
  },
  {
    title: "HR Consulting",
    icon: "/icons/hr-consulting.svg",
    points: [
      "Custom HR Frameworks",
      "Policy & Culture Design",
      "Talent Strategy",
    ],
  },
];
  const clients = [
    {
      name: "Nepal Rastra Bank",
      sector: "Financial Institution",
      icon: "/images/icons/svg/appdev.svg",
    },
    {
      name: "Himalayan Bank",
      sector: "Commercial Bank",
      icon: "/icons/commercial-bank.svg",
    },
    {
      name: "Nepal Telecom",
      sector: "Telecommunications",
      icon: "/icons/telecom.svg",
    },
    {
      name: "Tribhuvan University",
      sector: "Education",
      icon: "/icons/education.svg",
    },
    {
      name: "Nepal Oil Corporation",
      sector: "Energy",
      icon: "/icons/energy.svg",
    },
    {
      name: "Bir Hospital",
      sector: "Healthcare",
      icon: "/icons/healthcare.svg",
    },
    {
      name: "World Bank",
      sector: "International Development",
      icon: "/icons/international.svg",
    },
    {
      name: "Unilever Nepal",
      sector: "FMCG",
      icon: "/icons/fmcg.svg",
    },
  ];

  const firstRowRef = useRef<HTMLDivElement>(null);
  const secondRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let offset1 = 0;
    let offset2 = 0;

    const animate = () => {
      offset1 -= 0.5;
      offset2 += 0.5;

      if (firstRowRef.current) {
        firstRowRef.current.style.transform = `translateX(${offset1}px)`;
      }
      if (secondRowRef.current) {
        secondRowRef.current.style.transform = `translateX(${offset2}px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);


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

    {/* Header */}
    <Header />

    {/* Hero Section - Enhanced with Animated Icons */}
    <section className="mt-20 sm:mt-10 relative flex flex-col items-center justify-center text-center min-h-screen px-6 sm:px-8">
      <motion.h2
  initial={{ opacity: 0,y: isMobile ? 20 : 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-red-500 via-red-400 to-pink-400 bg-clip-text text-transparent drop-shadow-md"
>
  Empowering 
  <span className=" tracking-normal "> Human Capital</span>
</motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        className="mt-8 max-w-3xl text-xl md:text-2xl text-gray-700 font-medium leading-relaxed"
      >
        Artus Consulting is redefining recruitment and HR practices in Nepal. With 15+ years of experience in executive search, talent acquisition, and HR advisory—we connect people to purpose.
      </motion.p>

      {/* Animated Showcase Cards */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {[
          {
            title: "Executive Search",
            desc: "We identify leaders who drive change and elevate your organization.",
            icon: "/icons/executive-search.svg",
          },
          {
            title: "HR Advisory",
            desc: "Aligning people, strategy, and culture for sustainable growth.",
            icon: "/icons/hr-consulting.svg",
          },
          {
            title: "Talent Mapping",
            desc: "Data-driven insights on market talent to support informed hiring decisions.",
            icon: "/icons/specialized.svg",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.3 }}
            className="bg-white/80 backdrop-blur-md border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <div className="flex items-center justify-center mb-4">
              <Image src={item.icon} alt={item.title} width={36} height={36} />
            </div>
            <h4 className="font-semibold text-lg text-red-600 mb-2 tracking-wide">{item.title}</h4>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

      {/* About Section */}
  <section id="about" className="relative z-10 py-28 px-6 sm:px-10 bg-white overflow-hidden text-center">
  {/* Decorative blobs */}
  <div className="absolute top-[-60px] left-[-40px] w-80 h-80 bg-pink-100 blur-[100px] opacity-30 rounded-full z-0" />
  <div className="absolute bottom-[-80px] right-[-40px] w-96 h-96 bg-red-100 blur-[100px] opacity-30 rounded-full z-0" />

  <div className="relative z-10 max-w-6xl mx-auto">
    <motion.h3
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-4xl sm:text-5xl font-bold mb-6 text-red-600 tracking-tight"
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
      Artus Consulting is a pioneer in headhunting & recruitment services in Nepal. Since 2009, we’ve connected top talent to top firms across industries, blending psychology, experience, and cultural fit for unmatched hiring outcomes.
    </motion.p>

    {/* Why Choose Artus Cards */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {[
        {
          title: "Professionalism",
          desc: "We maintain industry standards with proven processes and ethics.",
        },
        {
          title: "Competent Team",
          desc: "Our recruiters are trained, skilled and experienced across verticals.",
        },
        {
          title: "We Know What We Are Doing",
          desc: "We bring 15+ years of real hiring psychology expertise.",
        },
        {
          title: "Trustworthy",
          desc: "We’ve built long-term relationships with Nepal’s top firms.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white border border-red-100 rounded-2xl p-6 text-center shadow hover:shadow-lg transition-all duration-300"
        >
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
            <div className="w-4 h-4 bg-red-500 rounded-full" />
          </div>
          <h4 className="text-lg font-semibold text-red-600 mb-2 tracking-wide">{item.title}</h4>
          <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </motion.div>
  </div>
</section>

      {/* Services Section */}
 <section id="services" className="relative z-10 py-24 px-6 sm:px-10  bg-gradient-to-br from-[#fdfbfb] via-[#ebedee] to-[#dfe9f3] text-[#1a1a1a] overflow-hidden">
     
      {/* Section Title */}
      <div className="relative z-10 text-center mb-20">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-red-500 tracking-tight mb-4">
          Our Services
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed tracking-wide">
          Strategic and specialized recruitment solutions crafted to empower your organization’s talent acquisition journey.
        </p>
      </div>

      {/* Services Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="group bg-white/40 backdrop-blur-md border border-red-100 p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Icon */}
            <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4">
              <Image src={service.icon} alt={service.title} width={28} height={28} />
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-semibold text-red-600 tracking-wide mb-3">
              {service.title}
            </h3>

            {/* Points */}
            <ul className="text-gray-700 text-sm sm:text-base leading-relaxed tracking-wide space-y-1 pl-4 list-disc">
              {service.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>

  {/* Clients Section */}
<section id="clients" className="relative z-10 py-28 px-6 sm:px-10 bg-white overflow-hidden text-center">
  {/* Decorative blobs */}
  <div className="absolute top-[-60px] left-[-40px] w-80 h-80 bg-pink-100 blur-[100px] opacity-30 rounded-full z-0" />
  <div className="absolute bottom-[-80px] right-[-40px] w-96 h-96 bg-red-100 blur-[100px] opacity-30 rounded-full z-0" />

  <h3 className="text-4xl sm:text-5xl font-bold mb-6 text-red-600 tracking-tight">Our Clients</h3>
  <p className="text-gray-500 text-lg mb-14">
    Trusted by leading organizations across Nepal in various sectors
  </p>

  {/* Scrolling Row */}
  <div className="relative overflow-hidden w-full">
    <div className="flex animate-scroll-right gap-14 w-max">
      {[...clients, ...clients].map((client, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center group transition-transform duration-300"
        >
          <div className="w-16 h-16 relative transition-transform group-hover:scale-125 group-hover:rotate-6 duration-500">
            <Image
              src={client.icon}
              alt={client.name}
              fill
              className="object-contain"
            />
          </div>
          <p className="mt-3 text-sm text-gray-700 font-medium opacity-0 group-hover:opacity-100 transition duration-500">
            {client.name}
          </p>
        </div>
      ))}
    </div>
  </div>

  <p className="mt-16 text-gray-600">
    Join 500+ organizations that trust us with their talent acquisition
  </p>
  <button className="mt-6 px-6 py-3 border rounded-md text-lg font-semibold text-[#ef4123] bg-white border border-[#ef4123] hover:bg-[#d53c1e] hover:text-white group transition-all duration-300">
    View All Clients
  </button>

  <style jsx>{`
    @keyframes scrollRight {
      0% {
        transform: translateX(-50%);
      }
      100% {
        transform: translateX(0%);
      }
    }

    .animate-scroll-right {
      animation: scrollRight 40s linear infinite;
    }
  `}</style>
</section>


      {/* Team Section */}
      <section id="team" className="max-w-6xl mx-auto px-8 py-28 flex flex-col md:flex-row items-center gap-16 ">
        <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-xl">
          <Image
            src="/images/founder-placeholder.jpg"
            alt="Jwolit Budhathoki"
            fill
            className="object-cover"
          />
        </div>
        <div className="text-center md:text-left max-w-xl text-gray-700">
          <h3 className="text-4xl font-bold mb-3">Founder Profile</h3>
          <p className="text-2xl font-bold">Jwolit Budhathoki</p>
          <p className="italic text-md mb-5">MBA, Post Graduate in Psychological Counseling</p>
          <p className="text-md">
            Mr. Budhathoki is a trusted HR consultant, headhunter and trainer with 17+ years of experience. As a founder of Artus, he brings deep expertise in recruitment psychology, performance and change management across sectors.
          </p>
        </div>
      </section>

     {/* Contact Section */}
{/* Contact Section */}
<section id="contact" className="py-28 text-center px-4 bg-white">
  <div className="max-w-6xl mx-auto">
    <h3 className="text-4xl font-bold mb-4 text-[#333]">Get In Touch</h3>
    <p className="text-gray-600 mb-12 max-w-xl mx-auto">
      Ready to find the perfect talent or your next career opportunity? We are here to help.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
      {/* For Companies */}
      <div className="bg-white border rounded-2xl p-8 shadow-md">
        <h4 className="text-lg font-semibold text-red-600 mb-2 tracking-wide">For Companies</h4>
        <p className="text-gray-500 mb-6 text-sm">Find the right talent for your organization</p>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Your Company" className="w-full border px-4 py-2 rounded-md focus:outline-none focus:border-[#ef4123] focus:ring-0" />
            <input type="text" placeholder="Your Name" className="w-full border px-4 py-2 rounded-md focus:outline-none focus:border-[#ef4123] focus:ring-0" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input type="email" placeholder="company@example.com" className="w-full border px-4 py-2 rounded-md focus:outline-none focus:border-[#ef4123] focus:ring-0" />
            <input type="text" placeholder="+977-XXX-XXXX" className="w-full border px-4 py-2 rounded-md focus:outline-none focus:border-[#ef4123] focus:ring-0" />
          </div>
          <input type="text" placeholder="e.g. Senior Software Engineer" className="w-full border px-4 py-2 rounded-md focus:outline-none focus:border-[#ef4123] focus:ring-0" />
          <textarea placeholder="Describe your hiring needs, experience level, skills required, etc." className="w-full border px-4 py-2 rounded-md focus:outline-none focus:border-[#ef4123] focus:ring-0" />
          <button className="w-full relative overflow-hidden px-4 py-2 rounded-md text-lg font-semibold text-white bg-[#ef4123] border border-[#ef4123] hover:bg-[#d53c1e] group transition-all duration-300">
  <span className="relative z-10">Submit Hiring Request</span>
  <span
    className="
      pointer-events-none
      absolute top-0 left-0 w-full h-full
      bg-gradient-to-r from-transparent via-white/60 to-transparent
      transform -translate-x-full
      group-hover:translate-x-full
      transition-transform duration-700 ease-out
    "
  ></span>
</button>

               </form>
      </div>

      {/* For Job Seekers */}
      <div className="bg-[#f8faff] border rounded-2xl p-8 shadow-md">
        <h4 className="text-lg font-semibold text-red-600 mb-2 tracking-wide">For Job Seekers</h4>
        <p className="text-gray-500 mb-6 text-sm">Submit your CV and find your next opportunity</p>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Your Full Name" className="w-full border px-4 py-2 rounded-md focus:outline-none focus:border-[#ef4123] focus:ring-0" />
            <input type="text" placeholder="e.g. Marketing Manager" className="w-full border px-4 py-2 rounded-md focus:outline-none focus:border-[#ef4123] focus:ring-0" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input type="email" placeholder="your.email@example.com" className="w-full border px-4 py-2 rounded-md focus:outline-none focus:border-[#ef4123] focus:ring-0" />
            <input type="text" placeholder="+977-XXX-XXXX" className="w-full border px-4 py-2 rounded-md focus:outline-none focus:border-[#ef4123] focus:ring-0" />
          </div>
          <label htmlFor="experience-level" className="sr-only">
            Experience Level
          </label>
          <select
            id="experience-level"
            className="w-full border px-4 py-2 rounded-md text-gray-500 focus:outline-none focus:border-[#ef4123] focus:ring-0"
            aria-label="Experience Level"
          >
            <option>Select Experience Level</option>
            <option>0-2 years</option>
            <option>2-5 years</option>
            <option>5+ years</option>
          </select>
          <div className="border-dashed border-2 border-gray-300 rounded-md p-6 text-center">
            <p className="mb-2 text-gray-500">Drag & drop your CV here or click to browse</p>
            <label htmlFor="cv-upload" className="sr-only">Upload your CV</label>
            <input
              id="cv-upload"
              type="file"
              className="mx-auto"
              title="Upload your CV"
              placeholder="Upload your CV"
            />
          </div>
          <textarea placeholder="Brief introduction about yourself and career goals..." className="w-full border px-4 py-2 rounded-md focus:outline-none focus:border-[#ef4123] focus:ring-0" />
                   <button className="w-full relative overflow-hidden px-4 py-2 rounded-md text-lg font-semibold text-white bg-[#ef4123] border border-[#ef4123] hover:bg-[#d53c1e] group transition-all duration-300">
  <span className="relative z-10">Submit Application</span>
  <span
    className="
      pointer-events-none
      absolute top-0 left-0 w-full h-full
      bg-gradient-to-r from-transparent via-white/60 to-transparent
      transform -translate-x-full
      group-hover:translate-x-full
      transition-transform duration-700 ease-out
    "
  ></span>
</button>
          </form>
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-white py-12 px-8 text-gray-600 text-center text-base border-t border-gray-200">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="flex justify-center gap-10 text-lg">
            {["Facebook", "LinkedIn", "Email"].map((item) => (
              <Link key={item} href="#" className="hover:text-red-500 font-medium">
                {item}
              </Link>
            ))}
          </div>
          <p className="tracking-wide">&copy; {new Date().getFullYear()} Artus Consulting. All rights reserved.</p>
        </div>
      </footer>

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
