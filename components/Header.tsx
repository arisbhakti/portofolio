import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="fixed z-50 flex h-20 w-full flex-row items-center justify-between border-b border-neutral-800 bg-black px-4 box-border md:bg-transparent md:px-32">
      <div className="flex flex-row items-center justify-center gap-2.25 md:gap-2">
        <div className="w-6 md:w-10 border box-border border-white h-px"></div>
        <span className="text-primary-200 font-bold text-md md:text-xl leading-text-xl md:pl-2">
          Edwin Anderson.
        </span>
      </div>
      <div id="menu-mobile-button" className="flex md:hidden">
        <Image
          src="/menu-mobile.svg"
          alt="menu"
          width={24}
          height={24}
          className=""
        />
      </div>
      <div className="hidden md:flex flex-row gap-8">
        <a
          href="#home"
          className="text-white text-text-md font-medium leading-text-md"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-white text-text-md font-medium leading-text-md"
        >
          About
        </a>
        <a
          href="#Skill"
          className="text-white text-text-md font-medium leading-text-md"
        >
          Skill
        </a>
        <a
          href="#projects"
          className="text-white text-text-md font-medium leading-text-md"
        >
          Projects
        </a>
        <a
          href="#faq"
          className="text-white text-text-md font-medium leading-text-md"
        >
          FAQ
        </a>
        <a
          href="#contact"
          className="text-white text-text-md font-medium leading-text-md"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
