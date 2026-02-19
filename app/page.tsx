import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-between bg-black ">
      {/* <div className="w-px bg-neutral-800 absolute left-49.25 h-140.75 z-50"></div> */}
      <Header />
      <Hero />
    </main>
  );
}
