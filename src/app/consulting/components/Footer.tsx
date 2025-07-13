import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Facebook", href: "https://facebook.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "Email", href: "mailto:contact@artus.com" },
  ];

  return (
    <footer className="bg-white py-12 px-8 text-gray-600 text-center text-base border-t border-gray-200">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Social Links */}
        <div className="flex justify-center gap-10 text-lg">
          {socialLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 font-medium transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p className="tracking-wide">
          &copy; {currentYear} Artus Consulting. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
