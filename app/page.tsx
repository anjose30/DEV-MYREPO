import Hero from "@/components/home/Hero";
import Info from "@/components/home/Info";

export default function Home() {
  return (
    <div
      id="page-scroll"
      className="w-full h-screen bg-white grid xl:grid-cols-2 overflow-x-hidden"
    >
      <section className="h-svh">
        <Hero />
      </section>
      <section className="h-svh">
        <Info />
      </section>
    </div>
  );
}
