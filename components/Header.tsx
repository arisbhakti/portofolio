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

  return (
    <>
      <div
        className={`fixed z-50 flex h-20 w-full flex-row items-center justify-between border-b border-neutral-800 bg-black px-4 box-border transition-colors duration-300 md:px-32 ${
          isScrolled ? "md:bg-black" : "md:bg-transparent"
        }`}
      >
        <div className="flex flex-row items-center justify-center gap-2.25 md:gap-2">
          <div className="w-6 md:w-10 border box-border border-white h-px"></div>
          <span className="text-primary-200 font-bold text-md md:text-xl leading-text-xl md:pl-2">
            Edwin Anderson.
          </span>
        </div>
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
        <div className="hidden md:flex flex-row gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white text-text-md font-medium leading-text-md"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[60] bg-black transition-all duration-300 ease-out md:hidden ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-2 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b border-neutral-800 px-4 box-border">
          <div className="flex flex-row items-center justify-center gap-2.25">
            <div className="w-6 border box-border border-white h-px"></div>
            <span className="text-primary-200 font-bold text-md leading-text-md">
              Edwin Anderson.
            </span>
          </div>
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
              onClick={closeMobileMenu}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
