"use client";

import Image from "next/image";
import { LuArrowRight, LuArrowLeft } from "react-icons/lu";
import { useEffect, useMemo, useState } from "react";

const testimonialsData = [
  {
    id: 1,
    name: "Thom Haye",
    position: "Head of Product",
    companyLogo: "/company-upwork.svg",
    companyAlt: "upwork",
    rating: 5,
    testimonial:
      "“Highly skilled frontend developer with an eye for design. Transformed our wireframes into a seamless and responsive web experience. Highly recommended!”",
  },
  {
    id: 2,
    name: "Emily Carter",
    position: "Project Manager",
    companyLogo: "/company-trello.svg",
    companyAlt: "trello",
    rating: 4,
    testimonial:
      "“An absolute pleasure to work with! Delivered a stunning, high-performance website that exceeded expectations. Attention to detail and problem-solving skills are top-notch!“",
  },
  {
    id: 3,
    name: "Sarah Lee",
    position: "Engineering Manager",
    companyLogo: "/company-zapier.svg",
    companyAlt: "zapier",
    rating: 5,
    testimonial:
      "“An exceptional frontend developer with a deep understanding of UI/UX principles. The ability to translate design into pixel-perfect code is truly impressive. A valuable asset to any team!”",
  },
  {
    id: 4,
    name: "Michael Brown",
    position: "Lead Developer",
    companyLogo: "/company-zoom.svg",
    companyAlt: "zoom",
    rating: 3,
    testimonial:
      "“An absolute pleasure to work with! Delivered a stunning, high-performance website that exceeded expectations. Attention to detail and problem-solving skills are top-notch!“",
  },
  {
    id: 5,
    name: "Alicia Morgan",
    position: "Senior Product Designer",
    companyLogo: "/company-facebook.svg",
    companyAlt: "facebook",
    rating: 5,
    testimonial:
      "“Collaborating on our redesign was effortless. Every component was delivered clean, scalable, and perfectly aligned with our design system constraints.”",
  },
  {
    id: 6,
    name: "Daniel Kim",
    position: "Engineering Director",
    companyLogo: "/company-google.svg",
    companyAlt: "google",
    rating: 5,
    testimonial:
      "“Excellent frontend execution with strong performance awareness. The final product shipped faster and felt significantly smoother on both desktop and mobile.”",
  },
  {
    id: 7,
    name: "Priya Natarajan",
    position: "Technical Program Manager",
    companyLogo: "/company-netflix.svg",
    companyAlt: "netflix",
    rating: 4,
    testimonial:
      "“Great communication and consistent delivery quality. Complex UI behaviors were implemented with precision while keeping the codebase easy to maintain.”",
  },
  {
    id: 8,
    name: "Marcus Reed",
    position: "Head of Digital Experience",
    companyLogo: "/company-amazon.svg",
    companyAlt: "amazon",
    rating: 5,
    testimonial:
      "“From planning to release, the process was solid. The interface quality, responsiveness, and detail level exceeded what we expected for the timeline.”",
  },
];

export default function Testimonials() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(window.innerWidth >= 768 ? 4 : 3);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxStartIndex = Math.max(0, testimonialsData.length - visibleCount);

  useEffect(() => {
    setStartIndex((prev) => Math.min(prev, maxStartIndex));
  }, [maxStartIndex]);

  const visibleTestimonials = useMemo(
    () => testimonialsData.slice(startIndex, startIndex + visibleCount),
    [startIndex, visibleCount],
  );

  const canGoPrev = startIndex > 0;
  const canGoNext = startIndex < maxStartIndex;

  const handlePrev = () => {
    if (!canGoPrev) return;
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    if (!canGoNext) return;
    setStartIndex((prev) => Math.min(maxStartIndex, prev + 1));
  };

  return (
    <div className="common-padding flex flex-col gap-6 md:gap-16">
      {/* titles */}
      <div className="flex flex-col gap-2 text-center">
        <h2 className="text-primary-200 text-text-md leading-text-md font-medium md:text-lg md:leading-text-lg">
          TESTIMONIALS
        </h2>
        <h1 className="font-extrabold text-display-md leading-display-md px-3 md:text-display-2xl md:leading-display-2xl text-neutral-25">
          PEOPLE SAYS ABOUT ME
        </h1>
      </div>
      {/* testimonials and buttons */}
      <div className="flex flex-col gap-6 md:gap-10">
        {/* testimonials cards */}
        <div
          className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-8.75"
          id="all-testimonials"
        >
          {visibleTestimonials.map((item, index) => (
            <div
              className="flex flex-col border box-border border-neutral-800 rounded-2xl p-4 gap-3 md:p-6"
              key={`${item.id}-${index}`}
            >
              {/* header */}
              <div className="flex flex-row justify-between">
                {/* name and position */}
                <div className="flex flex-col gap-1">
                  <h2 className="text-neutral-25 font-bold text-lg leading-text-lg md:text-xl md:leading-text-xl">
                    {item.name}
                  </h2>
                  <span className="text-neutral-400 text-text-md leading-text-md md:text-text-lg md:leading-text-lg">
                    {item.position}
                  </span>
                </div>
                {/* company logo */}
                <div className="flex items-center">
                  <Image
                    src={item.companyLogo}
                    alt={item.companyAlt}
                    width={76}
                    height={32}
                    className="md:w-28.5 md:h-12"
                  />
                </div>
              </div>
              {/* stars */}
              <div className="flex flex-row items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Image
                    key={i}
                    src="/star-yellow.svg"
                    alt="star"
                    width={20}
                    height={20}
                    className={`md:h-8 md:w-8 ${
                      i < item.rating ? "opacity-100" : "opacity-30"
                    }`}
                  />
                ))}
              </div>
              {/* testimonial */}
              <div className="text-neutral-25 text-text-md leading-text-md font-medium md:text-text-lg md:leading-text-lg">
                {item.testimonial}
              </div>
            </div>
          ))}
        </div>
        {/* buttons */}
        <div
          className="flex flex-row gap-4 items-center justify-center"
          id="navigation-buttons"
        >
          <button
            type="button"
            onClick={handlePrev}
            disabled={!canGoPrev}
            className={`w-12 h-12 md:w-14 md:h-14 rounded-full border box-border border-neutral-800 flex items-center justify-center ${
              canGoPrev ? "cursor-pointer" : "cursor-not-allowed"
            }`}
            aria-label="Previous testimonials"
          >
            <LuArrowLeft
              className={`text-[20.57px] md:text-[24px] ${
                canGoPrev ? "text-primary-200" : "text-neutral-800"
              }`}
            />
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={!canGoNext}
            className={`w-12 h-12 md:w-14 md:h-14 rounded-full border box-border border-neutral-800 flex items-center justify-center ${
              canGoNext ? "cursor-pointer" : "cursor-not-allowed"
            }`}
            aria-label="Next testimonials"
          >
            <LuArrowRight
              className={`text-[20.57px] md:text-[24px] ${
                canGoNext ? "text-primary-200" : "text-neutral-800"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
