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
      const step = Math.max(1, Math.floor(end / 200));
      const delay = 25;

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
          animateCounter("counter", parseInt(count.toString()));
          animateCounter("counter2", 1500);
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
            className="col-12 pt-10"
            data-aos="fade-up-sm"
            data-aos-delay="200"
          >
            <div className="relative flex gap-x-2 overflow-hidden before:pointer-events-none before:absolute before:left-0 before:z-10 before:h-full before:w-16 before:bg-gradient-to-r before:from-body before:to-transparent after:pointer-events-none after:absolute after:right-0 after:h-full after:w-16 after:bg-gradient-to-r after:from-transparent after:to-body">
              <div className="marquee flex shrink-0 items-center justify-center gap-x-3 gap-y-4 opacity-80 md:gap-x-2">
                {list?.map((logo: string, i: number) => (
                  <div className="h-10" key={i}>
                    <ImageFallback
                      src={logo}
                      className="h-full object-contain"
                      alt="brand logo"
                      width={160}
                      height={80}
                    />
                  </div>
                ))}
              </div>
              <div
                className="marquee flex shrink-0 items-center justify-center gap-x-4 gap-y-4 opacity-80 md:gap-x-2"
                aria-hidden="true"
              >
                {list?.map((logo: string, i: number) => (
                  <div className="h-10" key={i}>
                    <ImageFallback
                      src={logo}
                      className="h-full object-contain"
                      alt="brand logo"
                      width={160}
                      height={80}
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
