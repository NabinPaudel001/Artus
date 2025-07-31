"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

  const clients = [
    {
      name: "Ace Institute",
      icon: "/images/clients/ace.svg",
    },
    {
      name: "Asian Paints Nepal",
      icon: "/images/clients/asian_paints_logo.png",
    },
    {
      name: "Avani Advertising",
      icon: "/images/clients/Avani_advertising.jpg",
    },
    {
      name: "Basecamp Trek",
      icon: "/images/clients/Basecamp_trek.png",
    },
    {
      name: "Berger Paints Nepal",
      sector: "Energy",
      icon: "/images/clients/Berger_Paints_Nepal.png",
    },
    {
      name: "CG Corp Global",
      icon: "/images/clients/cgcorpglobal_logo.jpg",
    },
    {
      name: "Dabur Nepal",
      icon: "/images/clients/Dabur_Nepal.png",
    },
    {
      name: "Foodmandu",
      icon: "/images/clients/Foodmandu.png",
    },
    {
      name: "Ncell",
      icon: "/images/clients/Ncell.jpg",
    },
    {
      name: "Perfetti Van Melle Nepal",
      icon: "/images/clients/Perfetti_Van_Melle_Nepal.png",
    },
    {
      name: "Pioneer Law Associates",
      icon: "/images/clients/Pioneer_Law_Associates.png",
    },
    {
      name: "QFX Cinemas",
      icon: "/images/clients/QFX-Cinemas.png",
    },
    {
      name: "Saras Beverages Redbull",
      icon: "/images/clients/Saras_Beverages_Redbull.jpg",
    },
    {
      name: "The Kandel Group",
      icon: "/images/clients/The_Kandel_Group.png",
    },
        {
      name: "Yeti Brewery",
      icon: "/images/clients/Yeti_Brewery.png",
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
