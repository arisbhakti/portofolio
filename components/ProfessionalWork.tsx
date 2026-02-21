import React from "react";
import Image from "next/image";

type TimelineItem = {
  id: number;
  year: string;
  role: string;
  companyLogo: string;
  companyAlt: string;
  description: string;
  logoClassName?: string;
};

const commonDescription =
  "Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences";

const timelineItems: TimelineItem[] = [
  {
    id: 1,
    year: "2020 - 2022",
    role: "Frontend Developer",
    companyLogo: "/company-upwork.svg",
    companyAlt: "Upwork",
    description: commonDescription,
  },
  {
    id: 2,
    year: "2020 - 2022",
    role: "Frontend Developer",
    companyLogo: "/company-trello.svg",
    companyAlt: "Trello",
    description: commonDescription,
  },
  {
    id: 3,
    year: "2020 - 2022",
    role: "Frontend Developer",
    companyLogo: "/company-zoom.svg",
    companyAlt: "Zoom",
    description: commonDescription,
  },
  {
    id: 4,
    year: "2020 - 2022",
    role: "Frontend Developer",
    companyLogo: "/company-zapier.svg",
    companyAlt: "Zapier",
    description: commonDescription,
  },
];

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
      <div className="relative flex flex-col gap-4 md:gap-0" id="timeline-work">
        {timelineItems.map((item, index) => {
          const isRight = index % 2 === 0;
          const isFirst = index === 0;
          const isLast = index === timelineItems.length - 1;
          const rowClass = isRight
            ? "flex flex-row gap-4 md:grid md:grid-cols-[minmax(0,1fr)_48px_minmax(0,1fr)] md:gap-x-16"
            : "flex flex-row-reverse gap-3 md:grid md:grid-cols-[minmax(0,1fr)_48px_minmax(0,1fr)] md:gap-x-6";

          const card = (
            <div className="our-process-card">
              <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between md:gap-0">
                <div className="flex flex-col gap-1">
                  <span className="text-sm leading-text-sm text-neutral-400 font-normal md:text-lg md:leading-text-lg">
                    {item.year}
                  </span>
                  <span className="font-bold text-text-md leading-text-md md:text-display-xs md:leading-display-xs">
                    {item.role}
                  </span>
                </div>
                <div>
                  <Image
                    src={item.companyLogo}
                    alt={item.companyAlt}
                    width={76}
                    height={32}
                    className={item.logoClassName ?? "md:w-28.5 md:h-12"}
                  />
                </div>
              </div>
              <div className="text-sm leading-text-sm text-neutral-400 md:text-text-md md:leading-text-md text-left">
                {item.description}
              </div>
            </div>
          );

          return (
            <div className={rowClass} key={item.id}>
              {isRight ? (
                <div className="hidden relative md:flex flex-row flex-1 p-4 md:p-6 gap-1 text-left rounded-2xl"></div>
              ) : (
                card
              )}

              <div className="relative flex w-10 md:w-12 shrink-0 items-center justify-center">
                {!isFirst && (
                  <div
                    aria-hidden
                    className="absolute left-1/2 -top-2 bottom-1/2 w-px bg-neutral-900 md:top-0"
                  ></div>
                )}
                {!isLast && (
                  <div
                    aria-hidden
                    className="absolute left-1/2 top-1/2 -bottom-2 w-px bg-neutral-900 md:bottom-0"
                  ></div>
                )}

                <div className="relative z-10 flex justify-center items-center bg-black w-10 h-10 md:w-12 md:h-12 mx-auto rounded-full border box-border border-neutral-800 text-primary-200 font-bold text-sm leading-text-sm md:text-text-md md:leading-text-md">
                  {item.id}
                </div>
              </div>

              {isRight ? (
                card
              ) : (
                <div className="hidden relative md:flex flex-row flex-1 p-4 md:p-6 gap-1 text-left rounded-2xl"></div>
              )}
            </div>
          );
        })}
      </div>
      <div className="absolute grid-cols-2 grid-rows-3 bottom-0 right-0 z-30  gap-0 hidden md:grid">
        <div className="size-[34.5px] bg-primary-400 col-start-2 row-start-1"></div>
        <div className="size-[34.5px] bg-primary-400 col-start-1 row-start-2"></div>
        <div className="size-[34.5px] bg-primary-400 col-start-2 row-start-3"></div>
      </div>
    </article>
  );
}
