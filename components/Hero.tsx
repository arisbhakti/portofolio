import React from "react";
import Image from "next/image";
export default function Hero() {
  return (
    <>
      <div className="relative z-30 bg-black">
        <div className="relative mt-20 common-padding ">
          <div className="w-px bg-neutral-800 absolute left-74 h-120.5 z-0"></div>
          {/* Hero Text , text & button */}
          <div className="flex flex-col gap-10 py-10 z-10">
            <div className="flex flex-col gap-4">
              {/* texts */}
              <div className="flex flex-row items-center gap-2">
                <div className="h-px w-5.25 border border-box border-white"></div>
                <span className="text-text-md leading-text-md">
                  Hi, I am Edwin Anderson Frontend Developer
                </span>
              </div>
              <div className="font-extrabold text-4xl leading-display-md">
                BUILDING FAST &{" "}
                <span className="text-primary-200">INTERACTIVE</span> WEB
                EXPERIENCES.
              </div>
              <div className="text-neutral-400 text-lg leading-text-lg">
                Bridging creativity and functionality to deliver stunning,
                user-friendly web applications
              </div>
            </div>
            <button className="w-full bg-primary-200 h-12 rounded-full text-neutral-950 font-extrabold text-sm leading-text-sm shadow-[0_4px_40px_0_rgba(145,255,2,0.4)] hover:bg-primary-300 transition-colors duration-300 z-10">
              HIRE ME
            </button>
          </div>
        </div>
        <div className="text-center relative bg-black" id="hero-div">
          <Image
            src="/hero-image.svg"
            alt="Hero Image"
            width={392}
            height={466}
            className="w-98 h-116.5 z-10 mix-blend-luminosity"
          />
          {/* <div className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,#000000_88%)]"></div> */}
          <div className="absolute inset-0 z-20 pointer-events-none bg-linear-to-b from-black/30 to-black" />
        </div>
      </div>
    </>
  );
}
