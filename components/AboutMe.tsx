import Image from "next/image";
export default function AboutMe() {
  return (
    <div
      className="flex flex-col gap-0 relative 
    "
    >
      {/* title */}
      <div className="common-padding flex flex-col gap-4 md:gap-16 ">
        <div className="flex flex-col gap-4 items-center justify-center md:w-296 self-center">
          <span className="font-medium text-text-md leading-text-md text-primary-200 md:text-lg md:leading-text-lg text-center">
            About Me
          </span>
          <div className="flex flex-col gap-1 items-center justify-center text-center relative w-full">
            <Image
              src="/about-me-1.svg"
              alt="about me image"
              width={238}
              height={178}
              className="absolute left-31 -top-32.75 hidden md:block"
            />
            <Image
              src="/about-me-2.svg"
              alt="about me image"
              width={250}
              height={187}
              className="absolute left-221 -top-23.5 z-0 hidden md:block"
            />
            <Image
              src="/about-me-3.svg"
              alt="about me image"
              width={117}
              height={88}
              className="absolute left-187 top-33.75 z-20 hidden md:block   "
            />
            <h3 className="font-extrabold text-display-md leading-display-md md:text-display-2xl md:leading-display-2xl relative w-full">
              CRAFTING SEAMLESS
            </h3>
            <h3 className="font-extrabold text-display-md leading-display-md md:text-display-2xl md:leading-display-2xl md:w-[872px] z-10">
              <span className="text-primary-200">HIGH-PERFORMANCE WEB</span>{" "}
              EXPERIENCES
            </h3>
          </div>
        </div>
        <p className="text-center text-text-md leading-text-md text-neutral-400 md:text-xl md:leading-text-xl md:w-[996px] flex self-center ">
          I love turning designs into interactive, high-performance websites.
          With a keen eye for detail and a deep understanding of frontend
          technologies, I create smooth and visually appealing user experiences.
        </p>
      </div>
      {/* image div mobile */}
      <div className="relative md:hidden h-72 w-full">
        <Image
          src="/about-me-1.svg"
          alt="about me image"
          width={170}
          height={127}
          className="absolute left-10"
        />
        <Image
          src="/about-me-2.svg"
          alt="about me image"
          width={134}
          height={99}
          className="absolute left-56 top-11.25"
        />
        <Image
          src="/about-me-3.svg"
          alt="about me image"
          width={132.47}
          height={200}
          className="absolute left-36 top-41"
        />

        {/* 3 boxes */}
        <div className="absolute grid-cols-2 grid-rows-3 bottom-0 z-30 grid gap-0 md:hidden">
          <div className="size-[34.5px] bg-primary-400 col-start-1 row-start-1"></div>
          <div className="size-[34.5px] bg-primary-400 col-start-2 row-start-2"></div>
          <div className="size-[34.5px] bg-primary-400 col-start-1 row-start-3"></div>
        </div>
      </div>
      {/* 3 boxes */}
      <div className="absolute grid-cols-2 grid-rows-3 bottom-0 z-30  gap-0 hidden md:grid">
        <div className="size-[34.5px] bg-primary-400 col-start-1 row-start-1"></div>
        <div className="size-[34.5px] bg-primary-400 col-start-2 row-start-2"></div>
        <div className="size-[34.5px] bg-primary-400 col-start-1 row-start-3"></div>
      </div>
    </div>
  );
}
