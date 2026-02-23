import React from "react";
import Image from "next/image";
import { SuccessDialog } from "./dialogs/SuccessDialog";
import { ErrorDialog } from "./dialogs/ErrorDialog";
export default function ContactUs() {
  const [openSuccessDialog, setOpenSuccessDialog] = React.useState(false);
  const [openErrorDialog, setOpenErrorDialog] = React.useState(false);
  return (
    <div
      className="flex flex-col gap-0 w-full md:pb-30! pt-0 md:pt-20! relative md:flex-row md:px-32 md:py-20 md:gap-30.5 border-t border-t-neutral-800"
      id="contact"
    >
      <ErrorDialog
        open={openErrorDialog}
        onClose={() => {
          setOpenErrorDialog(false);
          setOpenSuccessDialog(true);
        }}
      />
      <SuccessDialog
        open={openSuccessDialog}
        onClose={() => {
          setOpenSuccessDialog(false);
        }}
      />
      {/* 3 boxes */}
      <div className="absolute top-0 left-0 z-30 grid grid-cols-3 grid-rows-2 gap-0">
        <div className="col-start-1 row-start-1 size-8.5 md:size-11.5 bg-primary-400" />

        <div className="col-start-2 row-start-2 size-8.5 md:size-11.5 bg-primary-400" />
        <div className="col-start-3 row-start-1 size-8.5 md:size-11.5 bg-primary-400" />
      </div>
      {/* profile contact us */}
      <div className="w-full relative h-128.5  md:w-[420.89px] md:h-160 ">
        <div className="overflow-hidden">
          <Image
            src="/hero-image-desktop.svg"
            alt="Contact Us Profile"
            width={400}
            height={400}
            className="w-full h-auto object-cover rounded-lg mix-blend-luminosity -rotate-3 -translate-x-4 -translate-y-5 scale-[0.85] md:translate-x-0 md:translate-y-0 md:scale-100"
          />
        </div>

        {/* inset */}
        <div className="pointer-events-none absolute inset-0 z-30 bg-black/20"></div>
        <div className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_50%,rgba(0,0,0,1)_80%,#000000_100%)] "></div>
        <div className="absolute inset-0 z-20 pointer-events-none bg-linear-to-b from-black/40 to-black" />

        {/* social media and profile name */}
        <div className=" absolute top-[339.76px] w-[256px] left-1/2 -translate-x-1/2 flex flex-col gap-4 items-center text-center justify-center md:top-129.75 md:gap-6 z-40">
          {/* social medias */}
          <div className="flex flex-row gap-4 md:gap-6">
            <a
              href="https://www.linkedin.com/in/ariessetyawaldimuhammad/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-black flex items-center justify-center border border-neutral-800 box-border md:w-16 md:h-16"
            >
              <Image
                src="/social-dribble.svg"
                alt="LinkedIn"
                width={28.83}
                height={28.83}
                className="md:w-[38.44px] md:h-[38.44px] "
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ariessetyawaldimuhammad/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-black flex items-center justify-center border border-neutral-800 box-border md:w-16 md:h-16"
            >
              <Image
                src="/social-instagram.svg"
                alt="LinkedIn"
                width={24.01}
                height={24.01}
                className="md:w-[32.02px] md:h-[32.03px] "
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ariessetyawaldimuhammad/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-black flex items-center justify-center border border-neutral-800 box-border md:w-16 md:h-16"
            >
              <Image
                src="/social-linkedin.svg"
                alt="LinkedIn"
                width={20.09}
                height={19.22}
                className="md:w-[26.78px] md:h-[25.62px] "
              />
            </a>
          </div>
          {/* Profile name */}
          <div className="flex flex-col gap-1 md:gap-2">
            <span className="font-bold text-text-md leading-text-md text-white md:text-xl md:leading-text-xl">
              Edwin Anderson
            </span>
            <div className="flex flex-row gap-3 items-center justify-center">
              {/* green rounded */}
              <div className="w-3 h-3 rounded-full bg-primary-200"></div>
              <span className="text-sm leading-text-sm font-semibold text-neutral-400 md:text-text-md md:leading-text-md">
                Available for Work
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* form contact us here */}
      <div className="flex flex-col gap-6 px-4 py-10 h-158 realitive md:flex-1 md:gap-12 md:h-full">
        {/* header */}
        <div className="flex flex-col gap-2">
          <h2 className="text-text-md leading-text-md font-medium text-primary-200 md:text-lg md:leading-text-lg">
            CONTACT
          </h2>
          <h1 className="font-extrabold text-display-md leading-display-md md:text-display-2xl md:leading-display-2xl text-primary-25 ">
            LET'S GET IN TOUCH
          </h1>
        </div>
        {/* form */}
        <div className="flex flex-col gap-4 md:gap-6">
          {/* input name */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-sm leading-text-sm font-semibold text-neutral-25 md:text-text-md md:leading-text-md"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="px-4 py-2 rounded-2xl border box-border border-neutral-800 bg-black text-white focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-transparent h-12 md:h-14"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm leading-text-sm font-semibold text-neutral-25 md:text-text-md md:leading-text-md"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="px-4 py-2 rounded-2xl border box-border border-neutral-800 bg-black text-white focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-transparent h-12 md:h-14"
            />
          </div>
          {/* text area */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm leading-text-sm font-semibold text-neutral-25 md:text-text-md md:leading-text-md"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="px-4 py-2 rounded-2xl border box-border border-neutral-800 bg-black text-white focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-transparent h-30 md:h-45"
            />
          </div>
          <button
            onClick={() => setOpenErrorDialog(true)}
            className="w-full bg-primary-200 h-12 md:h-14 rounded-full text-neutral-950 font-extrabold text-sm md:text-text-md md:leading-text-md leading-text-sm shadow-[0_4px_40px_0_rgba(145,255,2,0.4)] hover:bg-primary-300 transition-colors duration-300 z-10 cursor-pointer"
          >
            Send Message
          </button>
          <div className="absolute bottom-0 right-0 z-0 grid grid-cols-3 grid-rows-2 gap-0 ">
            <div className="col-start-2 row-start-1 size-8.5 md:size-11.5 bg-primary-400" />

            <div className="col-start-1 row-start-2 size-8.5 md:size-11.5 bg-primary-400" />
            <div className="col-start-3 row-start-2 size-8.5 md:size-11.5 bg-primary-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
