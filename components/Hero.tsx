import Image from "next/image";
export default function Hero() {
  return (
    <div
      className="relative z-30 w-full bg-black md:h-218.5 mt-20 md:mt-0
    "
    >
      <div className="relative mt-0 common-padding ">
        <div className="w-px bg-neutral-800 absolute left-74 h-104 z-0 md:hidden"></div>

        {/* Hero Text , text & button */}
        <div className="flex flex-col gap-10 py-10 md:py-0 z-40 md:gap-15 md:top-55.25 md:relative md:w-201.75">
          <div className="flex flex-col gap-4">
            {/* texts */}
            <div className="flex flex-row items-center gap-2 md:gap-4">
              <div className="h-px w-5.25 md:w-28.5 border border-box border-white"></div>
              <span className="text-text-md md:text-xl leading-text-md md:leading-text-xl">
                Hi, I am Edwin Anderson Frontend Developer
              </span>
            </div>
            <div className="font-extrabold text-4xl leading-display-md md:leading-none md:text-[80px]">
              BUILDING FAST &{" "}
              <span className="text-primary-200">INTERACTIVE</span> WEB
              EXPERIENCES.
            </div>
            <div className="text-neutral-400 text-lg leading-text-lg md:text-xl md:leading-text-xl md:w-149.25">
              Bridging creativity and functionality to deliver stunning,
              user-friendly web applications
            </div>
          </div>
          <button className="w-full bg-primary-200 h-12 md:w-75 md:h-14 rounded-full text-neutral-950 font-extrabold text-sm md:text-text-md md:leading-text-md leading-text-sm shadow-[0_4px_40px_0_rgba(145,255,2,0.4)] hover:bg-primary-300 transition-colors duration-300 z-10 cursor-pointer">
            HIRE ME
          </button>
        </div>
      </div>

      <div
        className="relative h-128.25 bg-black text-center md:absolute md:top-0 md:right-0 md:h-220.25 md:w-165.25 overflow-hidden "
        id="hero-div"
      >
        {/* green color */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2  w-1/2   bg-primary-200"></div>

        <Image
          src="/hero-image-desktop.svg"
          alt="Hero Image"
          width={392}
          height={466}
          //   className="relative z-10 mx-auto -top-1 right-2 h-[476px] w-[359px] -rotate-2 mix-blend-luminosity brightness-110 contrast-110 md:absolute md:right-[30px] md:top-[66px] md:h-[872px] md:w-[658px]  md:brightness-115 md:contrast-110"
          className="relative z-10 mx-auto -top-[3.9px] right-2 w-89.75 h-119 mix-blend-luminosity brightness-112 contrast-110 -rotate-2 md:absolute md:right-5  md:h-218 md:w-164.5  "
        />

        {/* tint + fade */}
        <div className="pointer-events-none absolute inset-0 z-30 bg-black/20"></div>
        <div className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_52%,rgba(0,0,0,0.72)_80%,#000000_100%)] md:hidden"></div>
        <div className="absolute inset-0 z-20 pointer-events-none bg-linear-to-b from-black/40 to-black" />

        {/* Card Feedback */}
        <div className="absolute w-87.25 md:w-79 top-[324.38px] md:top-153 px-4 py-4 md:px-5 md:py-5 bg-black flex flex-col gap-2 border border-neutral-800 border-box rounded-2xl mx-auto z-40 left-1/2 -translate-x-1/2 text-left items-start">
          <div className="text-neutral-25 font-bold text-2xl leading-display-xs text-display-xl">
            5.0
          </div>
          <div className="flex flex-row items-center justify-center">
            <Image
              src="/star-yellow.svg"
              alt="Star"
              width={24}
              height={24}
              className="inline-block md:w-8 md:h-8"
            />
            <Image
              src="/star-yellow.svg"
              alt="Star"
              width={24}
              height={24}
              className="inline-block md:w-8 md:h-8"
            />
            <Image
              src="/star-yellow.svg"
              alt="Star"
              width={24}
              height={24}
              className="inline-block md:w-8 md:h-8"
            />
            <Image
              src="/star-yellow.svg"
              alt="Star"
              width={24}
              height={24}
              className="inline-block md:w-8 md:h-8"
            />
            <Image
              src="/star-yellow.svg"
              alt="Star"
              width={24}
              height={24}
              className="inline-block md:w-8 md:h-8"
            />
          </div>
          <div className="font-semibold leading-text-md text-text-md md:text-xl md:leading-text-lg">
            Many Client Trust with me
          </div>
        </div>

        {/* 3 boxes */}
        <div className="absolute top-60.5 z-30 grid grid-cols-3 grid-rows-2 gap-0 md:hidden">
          <div className="col-start-2 row-start-1 size-8.5 bg-primary-400" />

          <div className="col-start-1 row-start-2 size-8.5 bg-primary-400" />
          <div className="col-start-3 row-start-2 size-8.5 bg-primary-400" />
        </div>
      </div>

      <div className="absolute bottom-0 z-30 md:grid grid-cols-3 grid-rows-2 gap-0 hidden ">
        <div className="col-start-2 row-start-1 size-11.5 bg-primary-400" />

        <div className="col-start-1 row-start-2 size-11.5 bg-primary-400" />
        <div className="col-start-3 row-start-2 size-11.5 bg-primary-400" />
      </div>
    </div>
  );
}
