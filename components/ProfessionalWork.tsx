import React from "react";
import Image from "next/image";
export default function ProfessionalWork() {
  return (
    <article
      id="process"
      className="flex flex-col gap-6 md:gap-16 common-padding w-full"
    >
      <header className="flex flex-col gap-2">
        <h2 className="text-text-md leading-text-md font-medium text-primary-200 text-center md:text-lg md:leading-text-lg">
          Our Process
        </h2>

        <h2 className="text-display-md leading-display-md font-extrabold text-primary-25 text-center md:text-display-2xl md:leading-display-2xl">
          PROFESIONAL WORK
        </h2>
      </header>
      <div className="flex flex-col gap-4 md:gap-0">
        {/* row 1 */}
        <div className="flex flex-row md:flex-row gap-4 md:gap-16">
          <div className="hidden relative md:flex flex-row flex-1 p-4 md:p-6 gap-1 text-left rounded-2xl "></div>
          <div className="flex flex-1 justify-center-center items-center shrink-0 grow-0">
            <div className="relative flex justify-center items-center bg-black w-10 h-10 md:w-12 md:h-12 mx-auto rounded-full border box-border border-neutral-800 timeline-line text-primary-200 font-bold text-sm leading-text-sm md:text-text-md md:leading-text-md">
              1
            </div>
          </div>
          <div className="our-process-card" id="our-process-card-2">
            {/* title */}
            <div className="flex flex-col gap-1 md:flex-row md:justify-between md:items-center md:gap-0">
              {/* year and role */}
              <div className="flex flex-col gap-1">
                <span className="text-sm leading-text-sm text-neutral-400 font-normal md:text-lg md:leading-text-lg">
                  2020 - 2022
                </span>
                <span className="font-bold text-text-md leading-text-md md:text-display-xs md:leading-display-xs">
                  Frontend Developer
                </span>
              </div>
              {/* company */}
              <div>
                <Image
                  src="/company-upwork.svg"
                  alt="Company Logo"
                  width={76}
                  height={32}
                  className="md:w-28.5 md:h-12"
                />
              </div>
            </div>
            <div className="text-sm leading-text-sm text-neutral-400 md:text-text-md md:leading-text-md text-left">
              Builds responsive and high-performance web applications with
              clean, maintainable code. Expert in translating UI/UX designs into
              pixel-perfect interfaces using modern frameworks. Focused on
              optimizing performance, accessibility, and seamless user
              experiences
            </div>
          </div>
        </div>

        {/* row 2 */}
        <div className="flex flex-row-reverse md:flex-row gap-3 md:gap-6">
          <div className="our-process-card" id="our-process-card-2">
            {/* title */}
            <div className="flex flex-col gap-1 md:flex-row md:justify-between md:items-center md:gap-0">
              {/* year and role */}
              <div className="flex flex-col gap-1">
                <span className="text-sm leading-text-sm text-neutral-400 font-normal md:text-lg md:leading-text-lg">
                  2020 - 2022
                </span>
                <span className="font-bold text-text-md leading-text-md md:text-display-xs md:leading-display-xs">
                  Frontend Developer
                </span>
              </div>
              {/* company */}
              <div>
                <Image
                  src="/company-trello.svg"
                  alt="Company Logo"
                  width={76}
                  height={32}
                  className="md:w-28.5 md:h-12"
                />
              </div>
            </div>
            <div className="text-sm leading-text-sm text-neutral-400 md:text-text-md md:leading-text-md text-left">
              Builds responsive and high-performance web applications with
              clean, maintainable code. Expert in translating UI/UX designs into
              pixel-perfect interfaces using modern frameworks. Focused on
              optimizing performance, accessibility, and seamless user
              experiences
            </div>
          </div>

          <div className="flex flex-1 justify-center-center items-center shrink-0 grow-0">
            <div className="relative flex justify-center items-center bg-black w-10 h-10 md:w-12 md:h-12 mx-auto rounded-full border box-border border-neutral-800 timeline-line text-primary-200 font-bold text-sm leading-text-sm md:text-text-md md:leading-text-md">
              2
            </div>
          </div>
          <div className="hidden relative md:flex flex-row flex-1 p-4 md:p-6 gap-1 text-left rounded-2xl "></div>
        </div>

        {/* row 3 */}
        <div className="flex flex-row md:flex-row gap-4 md:gap-16">
          <div className="hidden relative md:flex flex-row flex-1 p-4 md:p-6 gap-1 text-left rounded-2xl "></div>
          <div className="flex flex-1 justify-center-center items-center shrink-0 grow-0">
            <div className="relative flex justify-center items-center bg-black w-10 h-10 md:w-12 md:h-12 mx-auto rounded-full border box-border border-neutral-800 timeline-line text-primary-200 font-bold text-sm leading-text-sm md:text-text-md md:leading-text-md">
              1
            </div>
          </div>
          <div className="our-process-card" id="our-process-card-2">
            {/* title */}
            <div className="flex flex-col gap-1 md:flex-row md:justify-between md:items-center md:gap-0">
              {/* year and role */}
              <div className="flex flex-col gap-1">
                <span className="text-sm leading-text-sm text-neutral-400 font-normal md:text-lg md:leading-text-lg">
                  2020 - 2022
                </span>
                <span className="font-bold text-text-md leading-text-md md:text-display-xs md:leading-display-xs">
                  Frontend Developer
                </span>
              </div>
              {/* company */}
              <div>
                <Image
                  src="/company-zoom.svg"
                  alt="Company Logo"
                  width={76}
                  height={32}
                  className="md:w-28.5 md:h-12"
                />
              </div>
            </div>
            <div className="text-sm leading-text-sm text-neutral-400 md:text-text-md md:leading-text-md text-left">
              Builds responsive and high-performance web applications with
              clean, maintainable code. Expert in translating UI/UX designs into
              pixel-perfect interfaces using modern frameworks. Focused on
              optimizing performance, accessibility, and seamless user
              experiences
            </div>
          </div>
        </div>

        {/* row 4 */}
        <div className="flex flex-row-reverse md:flex-row gap-3 md:gap-6">
          <div className="our-process-card" id="our-process-card-2">
            {/* title */}
            <div className="flex flex-col gap-1 md:flex-row md:justify-between md:items-center md:gap-0">
              {/* year and role */}
              <div className="flex flex-col gap-1">
                <span className="text-sm leading-text-sm text-neutral-400 font-normal md:text-lg md:leading-text-lg">
                  2020 - 2022
                </span>
                <span className="font-bold text-text-md leading-text-md md:text-display-xs md:leading-display-xs">
                  Frontend Developer
                </span>
              </div>
              {/* company */}
              <div>
                <Image
                  src="/company-zapier.svg"
                  alt="Company Logo"
                  width={76}
                  height={32}
                  className="md:w-28.5 md:h-12"
                />
              </div>
            </div>
            <div className="text-sm leading-text-sm text-neutral-400 md:text-text-md md:leading-text-md text-left">
              Builds responsive and high-performance web applications with
              clean, maintainable code. Expert in translating UI/UX designs into
              pixel-perfect interfaces using modern frameworks. Focused on
              optimizing performance, accessibility, and seamless user
              experiences
            </div>
          </div>

          <div className="flex flex-1 justify-center-center items-center shrink-0 grow-0">
            <div className="relative flex justify-center items-center bg-black w-10 h-10 md:w-12 md:h-12 mx-auto rounded-full border box-border border-neutral-800 timeline-line text-primary-200 font-bold text-sm leading-text-sm md:text-text-md md:leading-text-md">
              2
            </div>
          </div>
          <div className="hidden relative md:flex flex-row flex-1 p-4 md:p-6 gap-1 text-left rounded-2xl "></div>
        </div>
      </div>
    </article>
  );
}
