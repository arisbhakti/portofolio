import Image from "next/image";

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
    <div className="common-padding flex flex-col gap-6 md:gap-16">
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
          <div key={porto.id} className="flex flex-col gap-3 md:gap-4">
            <div className="relative w-full h-67.5 md:h-71">
              <Image
                src={porto.image}
                alt={`portofolio${porto.id}`}
                fill
                className="object-cover rounded-[20px]"
              />
            </div>
            <h2 className="text-xl leading-text-xl font-bold text-left md:text-display-xs md:leading-display-xs text-neutral-25  ">
              {porto.title}
            </h2>
            <span className="text-sm leading-text-sm font-normal text-neutral-400 md:text-text-md md:leading-text-md text-left">
              {porto.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
