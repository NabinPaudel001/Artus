"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

  const clients = [
    {
      name: "Nepal Rastra Bank",
      sector: "Financial Institution",
      icon: "/images/clients/nrb.svg",
    },
    {
      name: "Himalayan Bank",
      sector: "Commercial Bank",
      icon: "/images/clients/hbl.svg",
    },
    {
      name: "Nepal Telecom",
      sector: "Telecommunications",
      icon: "/images/clients/ntc.svg",
    },
    {
      name: "Tribhuvan University",
      sector: "Education",
      icon: "/images/clients/tribhuvan-university.svg",
    },
    {
      name: "Nepal Oil Corporation",
      sector: "Energy",
      icon: "/images/clients/noc.svg",
    },
    {
      name: "Bir Hospital",
      sector: "Healthcare",
      icon: "/images/clients/bir-hospital.svg",
    },
    {
      name: "World Bank",
      sector: "International Development",
      icon: "/images/clients/world-bank.svg",
    },
    {
      name: "Unilever Nepal",
      sector: "FMCG",
      icon: "/images/clients/unl.svg",
    },
  ];

export default function ClientsSection() {
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
    <section
      id="clients"
      className="relative z-10 py-28 px-6 sm:px-10 bg-white overflow-hidden text-center"
    >
      {/* Decorative blobs */}
      <div className="absolute top-[-60px] left-[-40px] w-80 h-80 bg-pink-100 blur-[100px] opacity-30 rounded-full z-0" />
      <div className="absolute bottom-[-80px] right-[-40px] w-96 h-96 bg-red-100 blur-[100px] opacity-30 rounded-full z-0" />

      <h3 className="text-4xl sm:text-5xl font-bold mb-6 text-[#ef4123] tracking-tight">
        Our Clients
      </h3>
      <p className="text-gray-500 text-lg mb-14">
        Trusted by leading organizations across Nepal in various sectors
      </p>

      {/* Scrolling Row */}
     {/* Scrolling Row */}
<div className="relative overflow-visible w-full"> {/* <-- changed here */}
  <div className="flex animate-scroll-right gap-14 w-max overflow-visible"> 
    {[...clients, ...clients].map((client, idx) => (
      <div
        key={idx}
        className="flex flex-col items-center group transition-transform duration-300 overflow-visible"  
      >
        <div className="w-[100px] h-[100px] flex items-center justify-center transition-transform duration-500 group-hover:scale-125">
          <Image
            src={client.icon}
            alt={client.name}
            width={100}
            height={100}
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
      <button className="mt-6 px-6 py-3 border rounded-md text-lg font-semibold text-[#ef4123] bg-white border-[#ef4123] hover:bg-[#d53c1e] hover:text-white group transition-all duration-300">
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
  );
}
