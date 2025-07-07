"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const Header = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    window.scroll(0, 0);
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    
    <header className="fixed top-2 mb-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/60 backdrop-blur-xl border border-gray-200 shadow-lg rounded-full px-6 py-3 max-w-5xl w-full flex justify-between items-center ">
      <Link href="/consulting" className="flex items-center">
        <Image
          src="/images/artus-consulting-logo.svg"
          alt="Artus Consulting"
          width={100}
          height={50}
        />
      </Link>
      <nav className="hidden md:flex space-x-8 font-semibold text-sm tracking-wide text-[#444]">
        {['About', 'Services', 'Clients', 'Team', 'Contact'].map((text) => (
          <Link
            key={text}
            href={`#${text.toLowerCase()}`}
            className={`hover:text-red-500 transition duration-300 ${pathname === `#${text.toLowerCase()}` ? 'text-red-600' : ''}`}
          >
            {text}
          </Link>
        ))}
      </nav>
      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="focus:outline-none text-gray-700"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="absolute top-full mt-3 w-full bg-white shadow-lg rounded-xl px-6 py-4 md:hidden">
          <ul className="flex flex-col space-y-4 text-base font-medium text-gray-700">
            {['About', 'Services', 'Clients', 'Team', 'Contact'].map((text) => (
              <li key={text}>
                <Link
                  href={`#${text.toLowerCase()}`}
                  className="block hover:text-red-500 transition"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
