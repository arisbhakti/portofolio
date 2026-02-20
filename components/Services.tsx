import React from "react";
import Image from "next/image";

const services = [
  {
    id: "01",
    icon: "/monitor.svg",
    iconAlt: "monitor",
    title: "Custom Website Development",
    description:
      "Building responsive, fast, and scalable websites tailored to your needs.",
  },
  {
    id: "02",
    icon: "/monitor.svg",
    iconAlt: "monitor",
    title: "Web Performance Optimization",
    description:
      "Enhancing website speed, SEO, and overall performance for bette",
  },
  {
    id: "03",
    icon: "/monitor.svg",
    iconAlt: "monitor",
    title: "Website Maintenance & Debugging",
    description:
      "Fixing bugs, improving UI, and ensuring smooth performance over time.",
  },
];

export default function Services() {
  return (
    <div
      className="relative z-30 w-full bg-black py-10 md:py-30 common-padding flex flex-col gap-6 md:gap-16
    "
    >
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* title */}
        <div className="flex flex-col gap-2 md:flex-1">
          <h1 className="font-medium text-text-md leading-text-md text-primary-200 md:text-lg md:leading-text-lg">
            SERVICE
          </h1>
          <h3 className="font-extrabold text-display-md leading-display-md md:text-display-2xl md:leading-display-2xl">
            MY SERVICE EXPERTISE
          </h3>
        </div>
        {/* subtitle */}
        <div className="text-text-md leading-text-md text-neutral-400 md:flex-2 md:text-xl md:leading-text-xl md:flex md:justify-end">
          <p className="md:w-126 text-right">
            Creating modern, intuitive, and visually consistent web experiences
            that align with industry trends and user expectations.
          </p>
        </div>
      </div>
      {/* services */}
      <div
        className="flex flex-col gap-6 md:flex-row md:gap-10"
        id="main-services"
      >
        {services.map((service) => (
          <div className="flex flex-col gap-3" key={service.id}>
            <span className="font-semibold text-text-md leading-text-md text-neutral-400 md:text-xl md:leading-text-xl">
              {service.id}
            </span>
            <hr className="border-neutral-800" />
            <Image
              src={service.icon}
              alt={service.iconAlt}
              width={32}
              height={32}
            />
            <h4 className="font-semibold text-lg leading-text-xl text-neutral-25 md:text-display-sm md:leading-display-sm">
              {service.title}
            </h4>
            <p className="font-normal text-text-md leading-text-md text-neutral-400 md:text-xl md:leading-text-xl">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
