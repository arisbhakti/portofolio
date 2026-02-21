import Image from "next/image";
import { LuArrowRight, LuArrowLeft } from "react-icons/lu";

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
    name: "Emily Carter",
    position: "Project Manager",
    companyLogo: "/company-trello.svg",
    companyAlt: "trello",
    rating: 4,
    testimonial:
      "“An absolute pleasure to work with! Delivered a stunning, high-performance website that exceeded expectations. Attention to detail and problem-solving skills are top-notch!“",
  },
];

export default function Testimonials() {
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
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-8.75">
          {/* single card testimonials */}
          <div className="flex flex-col border box-border border-neutral-800 rounded-2xl p-4 gap-3 md:p-6">
            {/* header */}
            <div className="flex flex-row justify-between">
              {/* name and position */}
              <div className="flex flex-col gap-1">
                <h2 className="text-neutral-25 font-bold text-lg leading-text-lg md:text-xl md:leading-text-xl">
                  Thom Haye
                </h2>
                <span className="text-neutral-400 text-text-md leading-text-md md:text-text-lg md:leading-text-lg">
                  Head of Product
                </span>
              </div>
              {/* company logo */}
              <div className="flex items-center">
                <Image
                  src="/company-upwork.svg"
                  alt="upwork"
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
                  className="md:h-8 md:w-8"
                />
              ))}
            </div>
            {/* testimonial */}
            <div className="text-neutral-25 text-text-md leading-text-md font-medium md:text-text-lg md:leading-text-lg">
              “Highly skilled frontend developer with an eye for design.
              Transformed our wireframes into a seamless and responsive web
              experience. Highly recommended!”
            </div>
          </div>
        </div>
        {/* buttons */}
        <div className="flex flex-row gap gap-4 items-center justify-center">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border box-border border-neutral-800 flex items-center justify-center cursor-pointer">
            <LuArrowLeft className="text-neutral-800 text-[20.57px] md:text-[24px]" />
          </div>
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border box-border border-neutral-800 flex items-center justify-center cursor-pointer">
            <LuArrowRight className="text-primary-200 text-[20.57px] md:text-[24px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
