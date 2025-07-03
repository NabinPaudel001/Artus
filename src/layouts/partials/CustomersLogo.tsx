"use client";

import { useEffect } from "react";
import ImageFallback from "@/helpers/ImageFallback";

interface CustomersLogoProps {
  frontmatter: {
    title: string;
    list: string[];
    count: string | number;
  };
}


const CustomersLogo = ({ frontmatter }: CustomersLogoProps) => {
  const { title, list, count } = frontmatter;

useEffect(() => {
  const animateCounter = (id: string, end: number) => {
    const el = document.getElementById(id);
    if (!el) return;

    let current = 0;
    const step = Math.max(1, Math.floor(end / 200)); // Smaller step = slower count
    const delay = 25; // Slower step interval in ms

    const interval = setInterval(() => {
      current += step;
      if (current >= end) {
        current = end;
        clearInterval(interval);
      }
      el.textContent = current.toString();
    }, delay);
  };

  const counter = document.getElementById("counter");
  const counter2 = document.getElementById("counter2");

  if (!counter || !counter2) return;

  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;

        animateCounter("counter", parseInt(count.toString())); // e.g. 500
        animateCounter("counter2", 1500); // second counter

        observer.disconnect();
      }
    });
  });

  observer.observe(counter);
  observer.observe(counter2);

  return () => observer.disconnect();
}, [count]);

  return (
    <section className="section" id="customers-section">
      <div className="container">
        <div className="row">
          <div className="col-12" data-aos="fade-up-sm">
            <div className="text-center sm:flex">
              <p
                suppressHydrationWarning
                className="w-full pb-3 text-center text-2xl/snug font-medium tracking-wide sm:whitespace-nowrap sm:pb-0"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </div>
          </div>
          <div
            className="col-12 pt-14"
            data-aos="fade-up-sm"
            data-aos-delay="200"
          >
            <div className="relative flex gap-x-10 overflow-hidden before:pointer-events-none before:absolute before:left-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-body before:to-transparent before:content-[''] after:pointer-events-none after:absolute after:right-0 after:h-full after:w-20 after:bg-gradient-to-r after:from-transparent after:to-body after:content-[''] md:gap-x-20 before:md:w-40 after:md:w-40">
              <div className="marquee flex shrink-0 items-center justify-center gap-x-10 gap-y-6 opacity-60 md:gap-x-20">
                {list?.map((logo: string, i: number) => (
                  <div className="h-10" key={i}>
                    <ImageFallback
                      src={logo}
                      className="h-full object-contain"
                      alt="brand logo"
                      width={200}
                      height={100}
                    />
                  </div>
                ))}
              </div>
              <div
                className="marquee flex shrink-0 items-center justify-center gap-x-10 gap-y-6 opacity-60 md:gap-x-20"
                aria-hidden="true"
              >
                {list?.map((logo: string, i: number) => (
                  <div className="h-10" key={i}>
                    <ImageFallback
                      src={logo}
                      className="h-full object-contain"
                      alt="brand logo"
                      width={200}
                      height={100}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomersLogo;
