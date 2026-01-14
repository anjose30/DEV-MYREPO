"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <div className="w-full h-full grid gap-2 items-center landscape:flex landscape:flex-row lg:flex p-4">
      <div className="bg-radial from-elements to-elements3 w-full h-full rounded-4xl flex flex-col justify-center items-center gap-2">
        <div className="flex gap-2 items-center justify-center">
          <h1
            className="text-white font-bold text-6xl text-center"
          >
            ANDRES MARTINEZ
          </h1>
        </div>
        <div className="text-2xl font-medium text-white">
          <h2>Desarrollador Web</h2>
        </div>
      </div>
    </div>
  );
}
