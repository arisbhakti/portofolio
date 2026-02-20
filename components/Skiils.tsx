import React from "react";
import Image from "next/image";

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
  return (
    <div className="common-padding flex flex-col gap-10">
      {/* Skiils Icons */}
      <div className="flex flex-col gap-6">
        {/* title */}
        <div className="flex flex-col gap-2">
          <h2 className="text-text-md leading-text-md text-primary-200 font-medium">
            SKILLS
          </h2>
          <h2 className="text-display-md leading-display-md font-extrabold">
            SKILLS THAT BRING IDEAS TO LIFE
          </h2>
        </div>
        {/* skills icons */}
        <div className="flex w-66 flex-wrap gap-6">
          {skillsIcons.map((icon) => (
            <div
              className="flex h-12 w-12  items-center justify-center rounded-full border border-neutral-800 box-border"
              key={icon.src}
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={38.4}
                height={38.4}
                className="mx-auto my-auto"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Progress Skiils */}
      <div className="h-[317.62px] w-full" id="progress-div">
        <div className="flex h-full flex-col justify-between">
          {progressItems.map((item, index) => (
            <div
              className="flex items-center gap-4"
              key={`${item.label}-${index}`}
            >
              <div className="relative h-[41.4px] flex-1">
                <div className="pointer-events-none absolute left-0 right-0 top-1/2 -translate-y-1/2 border-t-[0.65px] border-neutral-800"></div>
                <div
                  className="relative h-[41.4px] overflow-hidden rounded-[12.94px] bg-primary-300 px-4 py-1.25"
                  style={{ width: `${item.value}%` }}
                >
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(60deg, rgba(253,253,253,0.35) 0px, rgba(253,253,253,0.35) 0.1px, transparent 0.3px, transparent 14px)",
                    }}
                  ></div>
                  <span className="relative z-10 font-semibold text-sm leading-text-sm text-neutral-25">
                    {item.label}
                  </span>
                </div>
              </div>
              <span className="w-13 text-right text-sm leading-text-sm text-neutral-25 font-semibold">
                {item.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
