"use client";

import AboutMe from "@/components/AboutMe";
import ContactUs from "@/components/ContactUs";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portofolio from "@/components/Portofolio";
import ProfessionalWork from "@/components/ProfessionalWork";
import Services from "@/components/Services";
import Skills from "@/components/Skiils";
import Testimonials from "@/components/Testimonials";
import WorkingWithMe from "@/components/WorkingWithMe";
import { motion } from "framer-motion";

const sectionAnimations = [
  {
    initial: { opacity: 0, y: 48, scale: 0.98 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    amount: 0.2,
  },
  {
    initial: { opacity: 0, x: -60, y: 12 },
    whileInView: { opacity: 1, x: 0, y: 0 },
    transition: { duration: 0.68, ease: [0.25, 1, 0.5, 1] },
    amount: 0.25,
  },
  {
    initial: { opacity: 0, x: 60, y: 12 },
    whileInView: { opacity: 1, x: 0, y: 0 },
    transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
    amount: 0.25,
  },
  {
    initial: { opacity: 0, y: 40, rotate: -1.5 },
    whileInView: { opacity: 1, y: 0, rotate: 0 },
    transition: { duration: 0.72, ease: [0.2, 0.9, 0.3, 1] },
    amount: 0.22,
  },
  {
    initial: { opacity: 0, scale: 0.94, y: 24 },
    whileInView: { opacity: 1, scale: 1, y: 0 },
    transition: { duration: 0.66, ease: [0.22, 1, 0.36, 1] },
    amount: 0.24,
  },
  {
    initial: { opacity: 0, y: 55, x: -20 },
    whileInView: { opacity: 1, y: 0, x: 0 },
    transition: { duration: 0.74, ease: [0.2, 0.85, 0.3, 1] },
    amount: 0.2,
  },
  {
    initial: { opacity: 0, y: 55, x: 20 },
    whileInView: { opacity: 1, y: 0, x: 0 },
    transition: { duration: 0.74, ease: [0.2, 0.85, 0.3, 1] },
    amount: 0.2,
  },
  {
    initial: { opacity: 0, x: -48, scale: 0.97 },
    whileInView: { opacity: 1, x: 0, scale: 1 },
    transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
    amount: 0.22,
  },
  {
    initial: { opacity: 0, x: 48, scale: 0.97 },
    whileInView: { opacity: 1, x: 0, scale: 1 },
    transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
    amount: 0.22,
  },
  {
    initial: { opacity: 0, y: 46 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] },
    amount: 0.25,
  },
  {
    initial: { opacity: 0, scale: 0.95, y: 36 },
    whileInView: { opacity: 1, scale: 1, y: 0 },
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
    amount: 0.26,
  },
];

function AnimatedSection({
  children,
  animation,
}: {
  children: React.ReactNode;
  animation: {
    initial: unknown;
    whileInView: unknown;
    transition: unknown;
    amount: number;
  };
}) {
  return (
    <motion.section
      className="w-full overflow-x-clip"
      initial={animation.initial as any}
      whileInView={animation.whileInView as any}
      transition={animation.transition as any}
      viewport={{ once: true, amount: animation.amount }}
    >
      {children}
    </motion.section>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-between bg-black overflow-x-hidden">
      {/* <div className="w-px bg-neutral-800 absolute left-49.25 h-140.75 z-50"></div> */}
      <motion.div
        className="overflow-x-clip"
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <Header />
      </motion.div>
      <AnimatedSection animation={sectionAnimations[0]}>
        <Hero />
      </AnimatedSection>
      <AnimatedSection animation={sectionAnimations[1]}>
        <Services />
      </AnimatedSection>
      <AnimatedSection animation={sectionAnimations[2]}>
        <AboutMe />
      </AnimatedSection>
      <AnimatedSection animation={sectionAnimations[3]}>
        <Skills />
      </AnimatedSection>
      <AnimatedSection animation={sectionAnimations[4]}>
        <WorkingWithMe />
      </AnimatedSection>
      <AnimatedSection animation={sectionAnimations[5]}>
        <ProfessionalWork />
      </AnimatedSection>
      <AnimatedSection animation={sectionAnimations[6]}>
        <Portofolio />
      </AnimatedSection>
      <AnimatedSection animation={sectionAnimations[7]}>
        <Testimonials />
      </AnimatedSection>
      <AnimatedSection animation={sectionAnimations[8]}>
        <Faq />
      </AnimatedSection>
      <AnimatedSection animation={sectionAnimations[9]}>
        <ContactUs />
      </AnimatedSection>
      <AnimatedSection animation={sectionAnimations[10]}>
        <Footer />
      </AnimatedSection>
    </main>
  );
}
