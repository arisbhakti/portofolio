import React from "react";
import Image from "next/image";

export default function Services() {
  return (
    <div
      className="relative z-30 w-full bg-black py-10 common-padding flex flex-col gap-6
    "
    >
      {/* Header */}
      <div className="flex flex-col gap-4">
        {/* title */}
        <div className="flex flex-col gap-2">
          <h1 className="font-medium text-text-md leading-text-md text-primary-200">
            SERVICE
          </h1>
          <h3 className="font-extrabold text-display-md leading-display-md">
            MY SERVICE EXPERTISE
          </h3>
        </div>
        {/* subtitle */}
        <p className="text-text-md leading-text-md text-neutral-400">
          Creating modern, intuitive, and visually consistent web experiences
          that align with industry trends and user expectations.
        </p>
      </div>
      {/* services */}
      <div className="flex flex-col gap-6" id="main-services">
        <div className="flex flex-col gap-3">
          <span className="font-semibold text-text-md leading-text-md text-neutral-400">
            01
          </span>
          <hr className="border-neutral-800" />
          <Image src="/monitor.svg" alt="monitor" width={32} height={32} />
          <h4 className="font-semibold text-lg leading-text-xl text-neutral-25">
            Custom Website Development
          </h4>
          <p className="font-normal text-text-md leading-text-md text-neutral-400">
            Building responsive, fast, and scalable websites tailored to your
            needs.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-semibold text-text-md leading-text-md text-neutral-400">
            02
          </span>
          <hr className="border-neutral-800" />
          <Image src="/monitor.svg" alt="monitor" width={32} height={32} />
          <h4 className="font-semibold text-lg leading-text-xl text-neutral-25">
            Web Performance Optimization
          </h4>
          <p className="font-normal text-text-md leading-text-md text-neutral-400">
            Enhancing website speed, SEO, and overall performance for bette
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-semibold text-text-md leading-text-md text-neutral-400">
            03
          </span>
          <hr className="border-neutral-800" />
          <Image src="/monitor.svg" alt="monitor" width={32} height={32} />
          <h4 className="font-semibold text-lg leading-text-xl text-neutral-25">
            Website Maintenance & Debugging
          </h4>
          <p className="font-normal text-text-md leading-text-md text-neutral-400">
            Fixing bugs, improving UI, and ensuring smooth performance over
            time.
          </p>
        </div>
      </div>
    </div>
  );
}
