"use client";

import AnimatedAnchor from "@/components/AnimatedAnchor";
import Logo from "@/components/Logo";
import config from "@/config/config.json";
import menu from "@/config/menu.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export interface ChildNavigationLink {
  name: string;
  url?: string;
  description?: string;
  children?: ChildNavigationLink[];
}

export interface NavigationLink {
  name: string;
  url?: string;
  enable?: boolean;
  hasMegamenu?: boolean;
  hasChildren?: boolean;
  children?: ChildNavigationLink[];
}

const Header = () => {
  const { main }: { [key: string]: NavigationLink[] } = menu;
  const { navigation_button } = config;
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle dropdown menu
  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // When closing mobile menu, also close any open dropdowns
    if (mobileMenuOpen) {
      setActiveDropdown(null);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    // Reset dropdowns and close mobile menu when route changes
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`header sticky top-0 z-30 ${!(pathname === "/") && "mb-10"}`}
      >
        <nav className="navbar container relative z-10">
          {/* logo  */}
          <div className="order-0">
            <Logo />
          </div>
          {/* navbar toggler  */}
          <input
            id="nav-toggle"
            type="checkbox"
            className="hidden"
            checked={mobileMenuOpen}
            onChange={toggleMobileMenu}
            title="Toggle navigation menu"
          />
          <label
            htmlFor="nav-toggle"
            className="order-3 flex cursor-pointer items-center text-text lg:order-1 lg:hidden"
          >
            <svg
              id="show-button"
              className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 fill-current`}
              viewBox="0 0 20 20"
            >
              <title>Menu Open</title>
              <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path>
            </svg>
            <svg
              id="hide-button"
              className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 fill-current`}
              viewBox="0 0 20 20"
            >
              <title>Menu Close</title>
              <polygon
                points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                transform="rotate(45 10 10)"
              ></polygon>
            </svg>
          </label>
          {/* /navbar toggler  */}
          <ul
            id="nav-menu"
            className={`navbar-nav order-3 ${mobileMenuOpen ? 'block' : 'hidden'} pb-6 lg:order-1 lg:flex lg:w-auto lg:space-x-2 lg:pb-0 xl:space-x-4`}
          >
            {main.map((menu, index) => (
              <React.Fragment key={index}>
                {menu.hasMegamenu && menu.name ? (
                  <li className="nav-item nav-dropdown group">
                    <span
                      onClick={() => toggleDropdown(index)}
                      className={`nav-link inline-flex items-center cursor-pointer ${menu.children
                        ?.map(({ url }) => url)
                        .includes(pathname) ||
                        menu.children
                          ?.map(({ url }) => `${url}/`)
                          .includes(pathname)
                        ? "active"
                        : ""
                        }`}
                    >
                      {menu.name}
                      <span className="arrow-icon">
                        <svg
                          className={`h-4 w-4 fill-current transition-transform ${activeDropdown === index ? 'max-lg:rotate-180' : ''}`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                    </span>
                    <div className={`mega-menu-wrapper ${activeDropdown === index ? 'block' : 'hidden'} max-lg:flex-col lg:invisible lg:absolute lg:left-0 lg:flex lg:opacity-0 lg:transition-all lg:duration-300 lg:group-hover:visible lg:group-hover:opacity-100`}>
                      {menu.children?.map((subchild, subIndex) => (
                        <div
                          key={subchild.name}
                          className="flex flex-col gap-5"
                        >
                          {subchild.name && (
                            <p
                              className="text-[10px]/none uppercase tracking-wider opacity-50"
                              dangerouslySetInnerHTML={{
                                __html: subchild.name,
                              }}
                            />
                          )}
                          <ul
                            className={`nav-dropdown-list ${subIndex === 0 ? "flex w-[150px] flex-col gap-5" : "gap-x-16 sm:columns-2 md:columns-3 lg:grid lg:grid-cols-[repeat(3,_1fr)]"}`}
                          >
                            {subchild.children?.map((child) => (
                              <li
                                key={child.name}
                                className={`nav-dropdown-item`}
                              >
                                <Link
                                  href={child.url || "#"}
                                  aria-label={child.name}
                                  className={`nav-dropdown-link block ${((pathname === `${child.url}/` ||
                                    pathname === child.url) &&
                                    "active") ||
                                    ""
                                    }`}
                                >
                                  {child.name}
                                </Link>
                                {child.name && (
                                  <p className="text-sm opacity-50">
                                    {child.description}
                                  </p>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </li>
                ) : menu.hasChildren && menu.name ? (
                  <li className="nav-item nav-dropdown group relative">
                    <span
                      onClick={() => toggleDropdown(index)}
                      className={`nav-link inline-flex items-center cursor-pointer ${menu.children
                        ?.map(({ url }) => url)
                        .includes(pathname) ||
                        menu.children
                          ?.map(({ url }) => `${url}/`)
                          .includes(pathname)
                        ? "active"
                        : ""
                        }`}
                    >
                      {menu.name}
                      <span className="arrow-icon">
                        <svg
                          className={`h-4 w-4 fill-current transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                    </span>
                    <ul
                      className={`nav-dropdown-list flex flex-col gap-1 rounded-xl border border-border bg-primary p-3 max-lg:mb-3 ${activeDropdown === index ? 'block' : 'hidden'} max-lg:w-[300px] lg:invisible lg:absolute lg:left-0 lg:flex lg:opacity-0 lg:transition-all lg:duration-300 lg:group-hover:visible lg:group-hover:opacity-100`}
                    >
                      {menu.children?.map((child) => (
                        <li key={child.name} className={`nav-dropdown-item`}>
                          <Link
                            href={child.url || "#"}
                            aria-label={child.name}
                            className={`nav-dropdown-link rounded-xl !px-4 !py-1.5 hover:bg-secondary/5 ${((pathname === `${child.url}/` ||
                              pathname === child.url) &&
                              "active") ||
                              ""
                              }`}
                          >
                            {child.name}
                          </Link>
                          {child.name && (
                            <p className="text-sm opacity-50">
                              {child.description}
                            </p>
                          )}
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  menu.name && (
                    <li className="nav-item">
                      <Link
                        href={menu.url || "#"}
                        aria-label={menu.name}
                        className={`nav-link block rounded-full px-4 py-2
  transition duration-300 ease-in-out
  hover:text-white
  hover:shadow-[0_0_6px_rgba(255,255,255,0.9),0_0_10px_rgba(239,68,68,0.8),0_0_20px_rgba(239,68,68,0.6)]
  hover:ring-2 hover:ring-red-500
  hover:bg-black/40  ${(pathname === `${menu.url}/` ||
                          pathname === menu.url) &&
                          "active"
                          }`}
                      >
                        {menu.name}
                      </Link>
                    </li>
                  )
                )}
              </React.Fragment>
            ))}
            {navigation_button.enable && (
              <AnimatedAnchor
                link={navigation_button.link}
                label={navigation_button.label}
                className="btn-primary bg-transparent mt-2 lg:hidden bg-none "
              />
            )}
          </ul>
          <div className="order-1 ml-auto flex items-center md:order-2 lg:ml-0">
            {navigation_button.enable && (
              <AnimatedAnchor
                link={navigation_button.link}
                label={navigation_button.label}
                className="btn-primary bg-transparent hidden lg:flex bg-none"
              />
            )}
          </div>
        </nav>
      </header>

      {/* Background Pattern Image Show Only Home & Changelog Page */}
      {/* {(pathname !== "/" && pathname.startsWith("/changelog")) && (
        <div aria-hidden="true">
          <ImageFallback
            className="pointer-events-none absolute inset-x-0 top-[80%] -z-10 w-full -translate-y-2/4 object-cover p-0 md:top-[95%]"
            src={"/images/banner-bg.png"}
            loading={"eager"}
            alt="banner bg image"
            width={1920}
            height={1080}
          />
        </div>
      )} */}

      {/* Gradient Background Overlay Show Other Pages Except Home */}
      {        <div
          aria-hidden="true"
          // className="pointer-events-none absolute left-1/2  -z-10 h-[424px] w-full -translate-x-1/2 rounded-full from-secondary via-secondary to-red-700 to-90% opacity-60 blur-[100px] bg-gradient-to-r lg:w-[1280px] lg:rotate-[-10deg]"
        // className="pointer-events-none absolute left-1/2 -z-10 h-[424px] w-full -translate-x-1/2 rounded-full opacity-60 blur-[120px] bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#b91c1c] lg:w-[1280px] lg:rotate-[-8deg]"
      className="pointer-events-none absolute left-1/2 -z-10 -top-5 h-[480px] w-[110%] -translate-x-14/24 rounded-full opacity-70 blur-[160px] bg-gradient-to-r from-[#0f172a] via-[#1b53ee] via-40% via-opacity-90 to-[#dc2626] to-80% lg:w-[1280px] lg:rotate-[-6deg]"

        />
      }
    </>
  );
};

export default Header;
