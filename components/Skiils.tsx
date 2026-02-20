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
      <div id="progress-div"></div>
      <div></div>
    </div>
  );
}
