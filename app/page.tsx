import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";

export default function Home() {
  return (
    <div
      id="page-scroll"
      className="w-full h-screen overflow-y-scroll overflow-x-hidden bg-bg"
    >
      <section className="w-full h-svh py-2">
        <Hero />
      </section>
      
      <section className="w-full min-h-svh">
        <Projects />
      </section>
      
      <section className="w-full min-h-svh">About me</section>
      <section className="w-full min-h-svh">Lenguajes</section>
    </div>
  );
}