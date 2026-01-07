import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";

export default function Home() {
  return (
    <div className="w-full grid overflow-x-hidden">
      <section className="w-full min-h-svh bg-bg">
        <Hero />
      </section>
      <section className="w-full min-h-svh ">
        <Projects />
      </section>
      <section className="w-full min-h-svh">About me</section>
      <section className="w-full min-h-svh">Lenguajes</section>
    </div>
  );
}
