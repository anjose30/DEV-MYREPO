import Hero from "@/components/home/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div
      id="page-scroll"
      className="w-full h-screen overflow-y-scroll overflow-x-hidden bg-elements4"
    >

      <section className="w-full h-svh py-2">
        <Hero />
      </section>
    </div>
  );
}
