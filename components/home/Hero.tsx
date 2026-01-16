"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <div className="w-full h-full grid gap-2 items-center landscape:flex landscape:flex-row lg:flex">
      <div className="grid gap-2 items-center justify-center pl-8 xl:pl-20">
        <h1 className="text-elements font-bold text-6xl text-start">
          ANDRES MARTINEZ
        </h1>
        <h2 className="text-2xl font-semibold text-elements ml-2">
          Ingeniero de Sistemas & Desarrollador Web
        </h2>
      </div>
    </div>
  );
}
