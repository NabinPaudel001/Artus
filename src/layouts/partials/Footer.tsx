import Logo from "@/components/Logo";
import config from "@/config/config.json";
import menu from "@/config/menu.json";
import Image from "next/image";
import { useState, useEffect } from "react";

type MenuItem = {
  name: string;
  url?: string;
  children?: { name: string; url?: string }[];
};

const withSystemsPrefix = (url?: string) => {
  if (!url) return "#";
  return url.startsWith("/systems") ? url : `/systems${url}`;
};

const Footer = () => {
  const { main } = menu as {
    footer?: MenuItem[];
    main?: MenuItem[];
  };

  const [year, setYear] = useState<string>("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  const replaceYear = (text: string) => {
    return text.replace("{year}", year);
  };

  return (
    <footer className="bg-dark pt-5 pb-5 text-white">
      <div className="container">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-5">
          {/* Left: Logo & Contact */}
          <div className="text-center md:text-left">
            <Logo />
            <p className="pt-5 text-lg font-semibold mb-4">(+977) 01-5409310/01-5454425</p>
            <div className="flex justify-center md:justify-start gap-4">
              {["facebook", "email", "twitter", "linkedin"].map((platform, i) => (
                <a
                  key={i}
                  href="#"
                  className="btn-primary w-10 h-10 flex items-center justify-center rounded-full transition"
                  aria-label={platform}
                >
                  <Image
                    src={`/images/icons/svg/${platform}.svg`}
                    alt={`${platform} icon`}
                    width={20}
                    height={20}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Address & CTA */}
          <div className="text-center md:text-right">
            <p className="font-semibold uppercase mb-2">Nepal</p>
            <p>Bagmati Province</p>
            <p>Lalitpur District</p>
            <p>Jhamsikhel, Lalitpur 44671</p>
            <div className="mt-6">
              <a
                href={withSystemsPrefix("/contact")}
                className="inline-block btn-primary px-5 py-2 rounded font-semibold hover:bg-secondary transition"
              >
                Connect with us
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section: Header Nav Links */}


        <hr className="border-white/30 my-5" />
{/* Bottom Section */}
<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5 mb-3">
  {/* Nav Grid */}
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-8 gap-y-5 gap-x-1 flex-1">
    {main?.map((item, index) => (
      <div key={index} className="mx-auto text-center">
        <a
          href={withSystemsPrefix(item.url)}
          className="block text-white font-semibold  transition mb-3"
        >
          <span className="hover:text-[#ef4123] hover:underline underline-offset-4">{item.name.trim()}</span>
        </a>
        <ul className="space-y-2">
          {item.children?.map((child, subIndex) => (
            <li key={subIndex}>
              <a
                href={withSystemsPrefix(child.url)}
                className="inline-block text-white/70 hover:text-primary transition"
              >
                {child.name.trim()}
              </a>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>

  {/* Copyright */}
  {config.params?.copyright && (
    <p
      className="text-white/60 text-right whitespace-nowrap"
      suppressHydrationWarning
    >
      {year
        ? replaceYear(config.params.copyright)
        : config.params.copyright}
    </p>
  )}
</div>


            
        </div>
    </footer>
  );
};

export default Footer;
