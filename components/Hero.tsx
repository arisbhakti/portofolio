import React from "react";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="relative z-30 bg-black">
      <div className="relative mt-20 common-padding ">
        <div className="w-px bg-neutral-800 absolute left-74 h-113 z-0 md:hidden"></div>

        {/* Hero Text , text & button */}
        <div className="flex flex-col gap-10 py-10 z-10 md:gap-15 md:top-0 md:relative">
          <div className="flex flex-col gap-4">
            {/* texts */}
            <div className="flex flex-row items-center gap-2 md:gap-4">
              <div className="h-px w-5.25 md:w-28.5 border border-box border-white"></div>
              <span className="text-text-md md:text-xl leading-text-md md:leading-text-xl">
                Hi, I am Edwin Anderson Frontend Developer
              </span>
            </div>
            <div className="font-extrabold text-4xl leading-display-md md:leading-none md:text-[80px]">
              BUILDING FAST &{" "}
              <span className="text-primary-200">INTERACTIVE</span> WEB
              EXPERIENCES.
            </div>
            <div className="text-neutral-400 text-lg leading-text-lg md:text-xl md:leading-text-xl md:w-[597px]">
              Bridging creativity and functionality to deliver stunning,
              user-friendly web applications
            </div>
          </div>
          <button className="w-full bg-primary-200 h-12 md:w-75 md:h-14 rounded-full text-neutral-950 font-extrabold text-sm md:text-text-md md:leading-text-md leading-text-sm shadow-[0_4px_40px_0_rgba(145,255,2,0.4)] hover:bg-primary-300 transition-colors duration-300 z-10 cursor-pointer">
            HIRE ME
          </button>
        </div>
      </div>

      <div
        className="text-center relative bg-black h-128.25 md:top-0 md:right-0"
        id="hero-div"
      >
        {/* green color */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2  w-1/2 bg-primary-200"></div>
        <Image
          src="/hero-image.svg"
          alt="Hero Image"
          width={392}
          height={466}
          className="relative z-10 mx-auto -top-[3.9px] right-2 w-89.75 h-119 mix-blend-luminosity brightness-112 contrast-110 -rotate-2"
        />

        {/* inset */}
        <div className="pointer-events-none absolute inset-0 z-30 bg-black/20"></div>
        <div className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_52%,rgba(0,0,0,0.72)_80%,#000000_100%)]"></div>
        <div className="absolute inset-0 z-20 pointer-events-none bg-linear-to-b from-black/40 to-black" />

        {/* Card Feedback */}
        <div className="absolute w-87.25 top-[324.38px] px-4 py-4 bg-black flex flex-col gap-2 border border-neutral-800 border-box rounded-2xl mx-auto z-40 left-1/2 -translate-x-1/2 text-left items-start">
          <div className="text-neutral-25 font-bold text-2xl leading-display-xs">
            5.0
          </div>
          <div className="flex flex-row items-center justify-center">
            <Image
              src="/star-yellow.svg"
              alt="Star"
              width={24}
              height={24}
              className="inline-block"
            />
            <Image
              src="/star-yellow.svg"
              alt="Star"
              width={24}
              height={24}
              className="inline-block"
            />
            <Image
              src="/star-yellow.svg"
              alt="Star"
              width={24}
              height={24}
              className="inline-block"
            />
            <Image
              src="/star-yellow.svg"
              alt="Star"
              width={24}
              height={24}
              className="inline-block"
            />
            <Image
              src="/star-yellow.svg"
              alt="Star"
              width={24}
              height={24}
              className="inline-block"
            />
          </div>
          <div className="font-semibold leading-text-md text-text-md">
            Many Client Trust with me
          </div>
        </div>

        {/* 3 boxes */}
        <div className="absolute grid grid-cols-3 grid-rows-2 gap-0 top-[242.38px] z-30">
          {/* atas: tengah */}
          <div className="col-start-2 row-start-1 size-8.5 bg-primary-400" />

          {/* bawah: kiri & kanan */}
          <div className="col-start-1 row-start-2 size-8.5 bg-primary-400" />
          <div className="col-start-3 row-start-2 size-8.5 bg-primary-400" />
        </div>
      </div>
    </div>
  );
}
