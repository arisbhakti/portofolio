import Image from "next/image";
import { Card } from "./ui/card";

const commonTitle = "Dashboard SaaS Task Management";
const commonDescription =
  "Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.";
const portofolioData = [
  {
    id: 1,
    title: commonTitle,
    description: commonDescription,
    image: "/porto1.svg",
  },
  {
    id: 2,
    title: commonTitle,
    description: commonDescription,
    image: "/porto2.svg",
  },
  {
    id: 3,
    title: commonTitle,
    description: commonDescription,
    image: "/porto3.svg",
  },
  {
    id: 4,
    title: commonTitle,
    description: commonDescription,
    image: "/porto4.svg",
  },
  {
    id: 5,
    title: commonTitle,
    description: commonDescription,
    image: "/porto5.svg",
  },
  {
    id: 6,
    title: commonTitle,
    description: commonDescription,
    image: "/porto6.svg",
  },
];

export default function Portofolio() {
  return (
    <div className="common-padding flex flex-col gap-6 md:gap-16" id="projects">
      <div className="absolute grid-cols-2 grid-rows-3 -top-[21.62px] right-0 z-30  gap-0 grid md:hidden">
        <div className="size-[34.5px] bg-primary-400 col-start-2 row-start-1"></div>
        <div className="size-[34.5px] bg-primary-400 col-start-1 row-start-2"></div>
        <div className="size-[34.5px] bg-primary-400 col-start-2 row-start-3"></div>
      </div>
      {/* title div */}
      <div className="flex-flex-col gap-2 w-full text-center">
        <h2 className="text-text-md leading-text-md text-primary-200 md:text-lg md:leading-text-lg font-medium">
          PORTOFOLIO
        </h2>
        <h1 className="font-extrabold text-display-md leading-display-md md:text-display-2xl md:leading-display-2xl text-neutral-25">
          SELECTED WORK
        </h1>
      </div>
      {/* PORTOFOLIO div */}
      <div className="flex flex-col gap-8 md:grid md:grid-cols-3 md:gap-x-5 md:gap-y-12">
        {/* single portofolio */}
        {portofolioData.map((porto) => (
          <Card
            key={porto.id}
            className="group relative flex flex-col gap-3 rounded-4xl border border-transparent p-1 transition-all duration-300 md:gap-4 md:hover:-translate-y-1.5 md:hover:border-primary-200/35 md:hover:bg-[linear-gradient(180deg,rgba(145,255,2,0.08),rgba(145,255,2,0))] md:hover:shadow-[0_0_0_1px_rgba(145,255,2,0.12),0_26px_48px_-30px_rgba(145,255,2,0.7)] bg-transparent shadow-none text-inherit"
          >
            <div className="relative w-full h-67.5 overflow-hidden rounded-4xl border border-neutral-900/70 transition-colors duration-300 group-hover:border-primary-200/40 md:h-71">
              <span className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_80%_15%,rgba(145,255,2,0.18),transparent_45%)] opacity-0 transition-opacity duration-400 group-hover:opacity-100"></span>
              <Image
                src={porto.image}
                alt={`portofolio${porto.id}`}
                fill
                className="object-cover rounded-4xl transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-[0.6deg]"
              />
            </div>
            <h2 className="text-xl leading-text-xl font-bold text-left text-neutral-25 transition-all duration-300 group-hover:text-primary-100 md:text-display-xs md:leading-display-xs">
              {porto.title}
            </h2>
            <span className="text-sm leading-text-sm font-normal text-neutral-400 transition-colors duration-300 group-hover:text-neutral-300 md:text-text-md md:leading-text-md text-left">
              {porto.description}
            </span>
          </Card>
        ))}
      </div>
    </div>
  );
}
