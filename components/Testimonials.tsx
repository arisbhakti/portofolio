"use client";

import Image from "next/image";
import { LuArrowRight, LuArrowLeft } from "react-icons/lu";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const testimonialsSlideVariants = {
  enter: (currentDirection: number) => ({
    opacity: 0,
    x: currentDirection > 0 ? 34 : -34,
    filter: "blur(2px)",
  }),
  center: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.34,
    },
  },
  exit: (currentDirection: number) => ({
    opacity: 0,
    x: currentDirection > 0 ? -34 : 34,
    filter: "blur(2px)",
    transition: {
      duration: 0.24,
    },
  }),
};

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
  const [direction, setDirection] = useState<1 | -1>(1);

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
    setDirection(-1);
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    if (!canGoNext) return;
    setDirection(1);
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
        <div className="relative overflow-hidden">
          <AnimatePresence initial={false} mode="wait" custom={direction}>
            <motion.div
              key={`${startIndex}-${visibleCount}`}
              custom={direction}
              variants={testimonialsSlideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-8.75"
              id="all-testimonials"
            >
              {visibleTestimonials.map((item, index) => (
                <motion.div
                  className="group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-neutral-800 p-4 box-border transition-all duration-300 md:p-6 md:hover:border-primary-200/55 md:hover:shadow-[0_0_0_1px_rgba(145,255,2,0.2),0_24px_48px_-30px_rgba(145,255,2,0.75)]"
                  key={`${item.id}-${index}`}
                  initial={{ opacity: 0, y: 12, scale: 0.985 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.26,
                      delay: index * 0.04,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  whileTap={{ scale: 0.995 }}
                >
                  <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(145,255,2,0.16),transparent_50%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                  {/* header */}
                  <div className="relative z-10 flex flex-row justify-between">
                    {/* name and position */}
                    <div className="flex flex-col gap-1">
                      <h2 className="text-neutral-25 font-bold text-lg leading-text-lg transition-colors duration-300 group-hover:text-primary-100 md:text-xl md:leading-text-xl">
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
                        className="transition-all duration-300 ease-out group-hover:scale-[1.04] group-hover:-translate-y-0.5 group-hover:brightness-115 md:w-28.5 md:h-12"
                      />
                    </div>
                  </div>
                  {/* stars */}
                  <div className="relative z-10 flex flex-row items-center transition-transform duration-300 group-hover:translate-x-0.5">
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
                  <div className="relative z-10 text-neutral-25 text-text-md leading-text-md font-medium transition-colors duration-300 group-hover:text-neutral-100 md:text-text-lg md:leading-text-lg">
                    {item.testimonial}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
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
            className={`group w-12 h-12 md:w-14 md:h-14 rounded-full border box-border flex items-center justify-center transition-all duration-300 ${
              canGoPrev
                ? "cursor-pointer border-neutral-800 hover:-translate-y-1 hover:scale-105 hover:border-primary-200/60 hover:shadow-[0_0_0_1px_rgba(145,255,2,0.2),0_14px_28px_-18px_rgba(145,255,2,0.75)]"
                : "cursor-not-allowed border-neutral-800/70"
            }`}
            aria-label="Previous testimonials"
          >
            <LuArrowLeft
              className={`text-[20.57px] md:text-[24px] transition-all duration-300 ${
                canGoPrev
                  ? "text-primary-200 group-hover:-translate-x-0.5 group-hover:drop-shadow-[0_0_8px_rgba(145,255,2,0.6)]"
                  : "text-neutral-800"
              }`}
            />
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={!canGoNext}
            className={`group w-12 h-12 md:w-14 md:h-14 rounded-full border box-border flex items-center justify-center transition-all duration-300 ${
              canGoNext
                ? "cursor-pointer border-neutral-800 hover:-translate-y-1 hover:scale-105 hover:border-primary-200/60 hover:shadow-[0_0_0_1px_rgba(145,255,2,0.2),0_14px_28px_-18px_rgba(145,255,2,0.75)]"
                : "cursor-not-allowed border-neutral-800/70"
            }`}
            aria-label="Next testimonials"
          >
            <LuArrowRight
              className={`text-[20.57px] md:text-[24px] transition-all duration-300 ${
                canGoNext
                  ? "text-primary-200 group-hover:translate-x-0.5 group-hover:drop-shadow-[0_0_8px_rgba(145,255,2,0.6)]"
                  : "text-neutral-800"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
