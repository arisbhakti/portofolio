"use client";

import AboutMe from "@/components/AboutMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProfessionalWork from "@/components/ProfessionalWork";
import Services from "@/components/Services";
import Skills from "@/components/Skiils";
import WorkingWithMe from "@/components/WorkingWithMe";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-between bg-black ">
      {/* <div className="w-px bg-neutral-800 absolute left-49.25 h-140.75 z-50"></div> */}
      <Header />
      <Hero />
      <Services />
      <AboutMe />
      <Skills />
      <WorkingWithMe />
      <ProfessionalWork />
    </main>
  );
}
