import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";

export default function Home() {
  return (
    <div className="w-full grid overflow-x-hidden bg-background">
      <section className="w-full min-h-svh">
        <Hero />
      </section>
      <section className="w-full min-h-svh ">
        <Projects />
      </section>
      <section className="w-full min-h-svh">About me <span className="text-green-500">scroll lateral como gta</span></section>
      <section className="w-full min-h-svh">Lenguajes</section>
    </div>
  );
}
