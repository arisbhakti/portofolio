import React from "react";
import Image from "next/image";

const WhyChooseMeItems: string[] = [
  "React Expert",
  "Precise Website Implementation",
  "TypeScript Proficiency",
  "Clean, Maintainable Code",
  "Responsive Website Development",
  "UI Design Proficiency (Figma)",
];
const WhyChooseAnotherTalentItems: string[] = [
  "Basic React Knowledge",
  "Inconsistent Design Translation",
  "Little to No TypeScript Knowledge",
  "Unstructured Code",
  "Inconsistent Responsiveness",
  "No Design Skills",
];
export default function WorkingWithMe() {
  return (
    <div className="common-padding flex flex-col gap-6 w-full md:gap-12">
      {/* title */}
      <div className="flex flex-col gap-2">
        <h1 className="font-medium text-text-md leading-text-md text-primary-200 text-center md:text-lg md:leading-text-lg">
          Working
        </h1>
        <h1 className="font-extrabold text-display-md leading-display-md text-primary-25 text-center md:text-display-2xl md:leading-display-2xl">
          Why Choose Me?
        </h1>
      </div>
      {/* Working WIth Me vs Another Talent */}
      <div className="flex flex-col gap-6 w-full md:gap-20 md:flex-row">
        {/* Working with me DIV */}
        <div className="flex flex-col gap-8 flex-1">
          <h2 className="font-bold text-xl leading-text-xl text-center md:text-display-sm md:leading-display-sm">
            Working With Me
          </h2>
          <div className="flex items-center justify-center">
            <div
              className="relative h-15 w-15 md:h-20 md:w-20 overflow-hidden rounded-full bg-neutral-950"
              id="rounded-avatar"
            >
              <Image
                src="/hero-image.svg"
                alt="Profile Avatar"
                fill
                className="object-cover object-center translate-y-1.5 md:translate-y-2 scale-[0.8] -rotate-3"
              />
            </div>
          </div>
          {WhyChooseMeItems.map((item, index) => (
            <div key={index} className="flex flex-col gap-6 md:gap-8">
              <div
                className="flex flex-row items-center justify-start gap-3"
                key={index}
              >
                <Image
                  src="/star-bright.svg"
                  alt="star"
                  width={24}
                  height={24}
                  className="md:w-8 md:h-8"
                />
                <p className="text-text-md leading-text-md font-bold md:text-xl md:leading-text-xl">
                  {item}
                </p>
              </div>
              {index != WhyChooseMeItems.length - 1 && (
                <hr className="border-t border-neutral-800" />
              )}
            </div>
          ))}
        </div>
        {/* divider mobile */}
        <hr className="border-t border-neutral-800 md:hidden" />
        {/* Another Talent DIV */}
        <div className="flex flex-col gap-8 flex-1">
          <h2 className="font-bold text-xl leading-text-xl text-center md:text-display-sm md:leading-display-sm">
            Another Talent
          </h2>
          <div className="flex items-center justify-center">
            <div
              className="relative h-15 w-15 md:h-20 md:w-20 overflow-hidden rounded-full bg-neutral-950"
              id="rounded-avatar"
            >
              <Image
                src="/profile-ano.svg"
                alt="Profile Avatar"
                fill
                className="object-cover object-center scale-[0.8]"
              />
            </div>
          </div>
          {WhyChooseAnotherTalentItems.map((item, index) => (
            <div key={index} className="flex flex-col gap-6 md:gap-8">
              <div
                className="flex flex-row items-center justify-start gap-3"
                key={index}
              >
                <Image
                  src="/star-dark.svg"
                  alt="star"
                  width={24}
                  height={24}
                  className="md:w-8 md:h-8"
                />
                <p className="text-text-md leading-text-md font-bold md:text-xl md:leading-text-xl text-neutral-400">
                  {item}
                </p>
              </div>
              {index != WhyChooseMeItems.length - 1 && (
                <hr className="border-t border-neutral-800" />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-row items-center justify-center">
        <button className="w-full bg-primary-200 h-12 md:w-60 md:h-14 rounded-full text-neutral-950 font-extrabold text-sm md:text-text-md md:leading-text-md leading-text-sm shadow-[0_4px_40px_0_rgba(145,255,2,0.4)] hover:bg-primary-300 transition-colors duration-300 z-10 cursor-pointer">
          HIRE ME
        </button>
      </div>
    </div>
  );
}
