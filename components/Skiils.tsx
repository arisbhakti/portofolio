"use client";

import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const skillsIcons = [
  { src: "/icon-js.svg", alt: "js" },
  { src: "/icon-css.svg", alt: "css" },
  { src: "/icon-html.svg", alt: "html" },
  { src: "/icon-express.svg", alt: "express" },
  { src: "/icon-mongo.svg", alt: "mongo" },
  { src: "/icon-react.svg", alt: "react" },
  { src: "/icon-ts.svg", alt: "ts" },
  { src: "/icon-docker.svg", alt: "docker" },
];

const progressItems = [
  { label: "React JS", value: 50 },
  { label: "HTML", value: 80 },
  { label: "Tailwind CSS", value: 90 },
  { label: "HTML", value: 100 },
  { label: "Docker", value: 70 },
  { label: "Javascript", value: 90 },
];

export default function Skiils() {
  const skillsRef = React.useRef<HTMLDivElement | null>(null);
  const isSkillsInView = useInView(skillsRef, {
    amount: 0.05,
    once: true,
  });

  return (
    <div
      className="common-padding flex flex-col gap-10 md:flex-row md:gap-14.5 justify-center items-center"
      id="skills"
      ref={skillsRef}
    >
      {/* Skiils Icons */}
      <div className="flex flex-col gap-6 md:gap-14.5 md:flex-1">
        {/* title */}
        <div className="flex flex-col gap-2">
          <h2 className="text-text-md leading-text-md text-primary-200 font-medium md:text-lg md:leading-text-lg">
            SKILLS
          </h2>
          <h2 className="text-display-md leading-display-md font-extrabold md:text-display-2xl md:leading-display-2xl">
            SKILLS THAT BRING IDEAS TO LIFE
          </h2>
        </div>
        {/* skills icons */}
        <div className="flex w-66 flex-wrap gap-6 md:w-85">
          {skillsIcons.map((icon) => (
            <motion.div
              className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-neutral-800 bg-black box-border transition-all duration-300 md:h-16 md:w-16 md:hover:border-primary-200/65 md:hover:shadow-[0_0_0_1px_rgba(145,255,2,0.2),0_14px_28px_-18px_rgba(145,255,2,0.75)]"
              key={icon.src}
              whileHover={{ y: -4, scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_20%,rgba(145,255,2,0.22),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              <Image
                src={icon.src}
                alt={icon.alt}
                width={38.4}
                height={38.4}
                className="relative z-10 mx-auto my-auto h-[38.4px] w-[38.4px] transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-0.5 md:h-[51.2px] md:w-[51.2px]"
              />
            </motion.div>
          ))}
        </div>
      </div>
      {/* Progress Skiils */}
      <div className="h-[317.62px] w-full md:h-131 md:flex-1" id="progress-div">
        <div className="flex h-full flex-col justify-between md:justify-normal md:gap-6">
          {progressItems.map((item, index) => (
            <motion.div
              className="group flex items-center gap-4 md:gap-6"
              key={`${item.label}-${index}`}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div className="relative h-[41.4px] flex-1 md:h-16">
                <div className="pointer-events-none absolute left-0 right-0 top-1/2 -translate-y-1/2 border-t-[0.65px] border-neutral-800 transition-colors duration-300 group-hover:border-primary-200/35"></div>
                <motion.div
                  className="relative flex h-[41.4px] items-center overflow-hidden rounded-[12.94px] bg-primary-300 px-4 py-1.25 transition-all duration-300 group-hover:brightness-110 group-hover:shadow-[0_0_0_1px_rgba(145,255,2,0.22),0_14px_28px_-20px_rgba(145,255,2,0.85)] md:h-full md:rounded-4xl md:px-6 md:py-2"
                  initial={{ width: 0 }}
                  animate={{
                    width: isSkillsInView ? `${item.value}%` : 0,
                  }}
                  transition={{
                    duration: 0.58,
                    delay: index * 0.03,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ originX: 0 }}
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(60deg, rgba(253,253,253,0.14) 0.7px, rgba(253,253,253,0.14) 0.65px, rgba(253,253,253,0.08) 1px, rgba(253,253,253,0.02) 1.55px, transparent 2px, transparent 14px)",
                      filter: "blur(0.12px)",
                    }}
                  ></div>
                  <span className="relative z-10 font-semibold text-sm leading-text-sm text-neutral-25 transition-colors duration-300 group-hover:text-white md:text-lg md:leading-text-lg">
                    {item.label}
                  </span>
                </motion.div>
              </div>
              <span className="w-13 text-right text-sm leading-text-sm font-semibold text-white transition-colors duration-300 group-hover:text-primary-100 md:text-xl md:leading-text-xl">
                {item.value}%
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
