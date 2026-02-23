"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleNavClick =
    (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();

      const targetId = href.replace("#", "");
      const targetElement = document.getElementById(targetId);

      if (!targetElement) return;

      const headerOffset = 96;
      const targetTop =
        targetElement.getBoundingClientRect().top +
        window.scrollY -
        headerOffset;

      setIsMobileMenuOpen(false);

      window.setTimeout(() => {
        window.scrollTo({
          top: Math.max(targetTop, 0),
          behavior: "smooth",
        });
        window.history.replaceState(null, "", href);
      }, 60);
    };

  return (
    <>
      <div
        className={`fixed z-50 flex h-20 w-full flex-row items-center justify-between border-b border-neutral-800 bg-black px-4 box-border transition-colors duration-300 md:px-32 ${
          isScrolled ? "md:bg-black" : "md:bg-transparent"
        }`}
      >
        <div
          className={`w-px bg-neutral-800 left-49.25 h-20 z-0 md:hidden ${isScrolled ? "hidden" : "absolute"}`}
        ></div>
        <a
          className="group/owner relative -mx-2 flex flex-row items-center justify-center gap-2.25 rounded-full px-2 py-1 transition-all duration-300 md:gap-2"
          id="owner-div"
          href="#home"
          onClick={handleNavClick("#home")}
        >
          <span className="pointer-events-none absolute inset-0 rounded-full bg-primary-200/10 opacity-0 blur-md transition-opacity duration-300 group-hover/owner:opacity-100"></span>
          <div className="relative z-10 h-px w-6 border border-white transition-all duration-300 group-hover/owner:w-7 group-hover/owner:border-primary-200 md:w-10 md:group-hover/owner:w-12"></div>
          <span className="relative z-10 text-primary-200 font-bold text-md md:text-xl leading-text-xl transition-all duration-300 group-hover/owner:text-primary-100 group-hover/owner:drop-shadow-[0_0_14px_rgba(145,255,2,0.45)] md:pl-2">
            Edwin Anderson.
          </span>
          <span className="pointer-events-none absolute -bottom-0.75 left-1/2 h-px w-0 -translate-x-1/2 bg-primary-200 transition-all duration-300 ease-out group-hover/owner:w-[calc(100%-24px)]"></span>
        </a>
        <button
          id="menu-mobile-button"
          className="flex md:hidden"
          type="button"
          aria-label="Open mobile menu"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Image
            src="/menu-mobile.svg"
            alt="menu"
            width={24}
            height={24}
            className=""
          />
        </button>
        <div className="hidden md:flex flex-row items-center gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative inline-flex items-center px-3 py-2 text-white/90 text-text-md font-medium leading-text-md transition-all duration-300 hover:text-primary-200"
              onClick={handleNavClick(link.href)}
            >
              <span className="relative z-10">{link.label}</span>
              <span className="pointer-events-none absolute inset-0 rounded-full bg-primary-200/10 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"></span>
              <span className="pointer-events-none absolute -bottom-px left-1/2 h-px w-0 -translate-x-1/2 bg-primary-200 transition-all duration-300 ease-out group-hover:w-[calc(100%-20px)]"></span>
            </a>
          ))}
        </div>
      </div>

      <div
        className={`fixed inset-0 z-60 bg-black transition-all duration-300 ease-out md:hidden ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-2 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b border-neutral-800 px-4 box-border">
          <a
            className="flex flex-row items-center justify-center gap-2.25"
            href="#home"
            onClick={handleNavClick("#home")}
          >
            <div className="w-6 border box-border border-white h-px"></div>
            <span className="text-primary-200 font-bold text-md leading-text-md">
              Edwin Anderson.
            </span>
          </a>
          <button
            type="button"
            aria-label="Close mobile menu"
            onClick={closeMobileMenu}
            className="text-white text-[36px] leading-none"
          >
            &times;
          </button>
        </div>

        <nav className="flex flex-col gap-4 px-6 pt-4">
          {navLinks.map((link) => (
            <a
              key={`mobile-${link.href}`}
              href={link.href}
              className="text-white text-text-md leading-text-md"
              onClick={handleNavClick(link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
