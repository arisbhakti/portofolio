import React from "react";
import Image from "next/image";
export default function Skiils() {
  return (
    <div className="common-padding flex flex-col gap-10">
      {/* Skiils Icons */}
      <div className="flex flex-col gap-6">
        {/* title */}
        <div className="flex flex-col gap-2">
          <h2 className="text-text-md leading-text-md text-primary-200 font-medium">
            SKILLS
          </h2>
          <h2 className="text-display-md leading-display-md font-extrabold">
            SKILLS THAT BRING IDEAS TO LIFE
          </h2>
        </div>
        {/* skills icons */}
        <div className="grid grid-cols-4 gap-x-6 gap-y-6">
          <div className="w-12 h-12 border box-border border-neutral-800 rounded-full flex items-center justify-center">
            <Image
              src="/icon-js.svg"
              alt="HjsL"
              width={38.4}
              height={38.4}
              className="mx-auto my-auto"
            />
          </div>
          <div className="w-12 h-12 border box-border border-neutral-800 rounded-full flex items-center justify-center">
            <Image
              src="/icon-css.svg"
              alt="css"
              width={38.4}
              height={38.4}
              className="mx-auto my-auto"
            />
          </div>
          <div className="w-12 h-12 border box-border border-neutral-800 rounded-full flex items-center justify-center">
            <Image
              src="/icon-html.svg"
              alt="HTML"
              width={38.4}
              height={38.4}
              className="mx-auto my-auto"
            />
          </div>
          <div className="w-12 h-12 border box-border border-neutral-800 rounded-full flex items-center justify-center">
            <Image
              src="/icon-express.svg"
              alt="express"
              width={38.4}
              height={38.4}
              className="mx-auto my-auto"
            />
          </div>
          <div className="w-12 h-12 border box-border border-neutral-800 rounded-full flex items-center justify-center">
            <Image
              src="/icon-mongo.svg"
              alt="mongo"
              width={38.4}
              height={38.4}
              className="mx-auto my-auto"
            />
          </div>
          <div className="w-12 h-12 border box-border border-neutral-800 rounded-full flex items-center justify-center">
            <Image
              src="/icon-react.svg"
              alt="react"
              width={38.4}
              height={38.4}
              className="mx-auto my-auto"
            />
          </div>
          <div className="w-12 h-12 border box-border border-neutral-800 rounded-full flex items-center justify-center">
            <Image
              src="/icon-ts.svg"
              alt="ts"
              width={38.4}
              height={38.4}
              className="mx-auto my-auto"
            />
          </div>
          <div className="w-12 h-12 border box-border border-neutral-800 rounded-full flex items-center justify-center">
            <Image
              src="/icon-docker.svg"
              alt="docker"
              width={38.4}
              height={38.4}
              className="mx-auto my-auto"
            />
          </div>
        </div>
      </div>
      {/* Progress Skiils */}
      <div></div>
    </div>
  );
}
