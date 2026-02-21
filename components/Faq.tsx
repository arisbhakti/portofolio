import React from "react";
import Image from "next/image";

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in React.js, Next.js, Vue.js, Tailwind CSS, and TypeScript, ensuring high-performance, scalable, and maintainable web applications.",
  },
  {
    question: "Do you work on both design and development?",
    answer:
      "I focus primarily on frontend development, translating UI/UX designs into responsive and interactive web experiences. However, I collaborate closely with designers to ensure a seamless user experience.",
  },
  {
    question: "Can you optimize an existing website for better performance?",
    answer:
      "Yes! I can analyze, debug, and optimize websites to improve speed, accessibility, and SEO, using best practices like lazy loading, code splitting, and performance monitoring.",
  },
  {
    question: "Do you take freelance or contract-based projects?",
    answer:
      "Yes! I am open to freelance, contract, and full-time opportunities, depending on the project scope and requirements. Feel free to reach out!",
  },
  {
    question: "How do you approach a new project?d",
    answer:
      "I start by understanding the project goals and requirements, followed by wireframing or UI implementation, then development, testing, and deployment—ensuring a smooth and efficient workflow.",
  },
  {
    question: "How can we collaborate?",
    answer:
      "You can contact me via email, LinkedIn, or GitHub. I usually begin with a consultation to discuss your needs, then propose a plan to bring your vision to life. Let’s create something awesome together!",
  },
];

export default function Faq() {
  return (
    <div className="common-padding flex flex-col gap-6 md:gap-16 ">
      {/* titles */}
      <div className="flex flex-col gap-2 text-center">
        <h2 className="text-text-md leading-text-md font-medium text-primary-200 md:text-lg md:leading-text-lg">
          FAQ
        </h2>
        <h1 className="text-display-md font-bold leading-display-md text-neutral-25 px-8 md:text-display-2xl md:leading-display-2xl">
          FREQUENTLY ASKED QUESTIONS
        </h1>
      </div>
      {/* faqs */}
      <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-8">
        {/* single faq , looping the data */}
        {faqs.map((faq, index) => (
          <div className="flex flex-col gap-4">
            <div key={index} className="flex flex-col gap-2 md:gap-6">
              {/* question */}
              <div className="flex items-start justify-start gap-3">
                <Image
                  src="/star-bright.svg"
                  alt="plus icon"
                  width={24}
                  height={24}
                  className="md:h-8 md:w-8"
                />
                <span className="font-bold text-lg leading-text-lg md:text-display-xs md:leading-display-xs">
                  {faq.question}
                </span>
              </div>
              {/* answer */}
              <p className="font-medium text-sm leading-text-sm text-neutral-400 md:text-text-md md:leading-text-md">
                {faq.answer}
              </p>
            </div>
            {index !== faqs.length - 1 && (
              <hr className="border box-border border-neutral-800 md:hidden" />
            )}
          </div>
        ))}

        {/* <div className="flex flex-col gap-2">
          
          <div className="flex items-start justify-start gap-3">
            <Image
              src="/star-bright.svg"
              alt="plus icon"
              width={24}
              height={24}
            />
            <span className="font-bold text-lg leading-text-lg">
              What technologies do you specialize in?
            </span>
          </div>
          
          <p className="font-medium text-sm leading-text-sm text-neutral-400">
            I specialize in React.js, Next.js, Vue.js, Tailwind CSS, and
            TypeScript, ensuring high-performance, scalable, and maintainable
            web applications.
          </p>
        </div> */}
      </div>
    </div>
  );
}
