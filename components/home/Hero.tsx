"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setExpanded(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="w-full h-full grid gap-2 items-center landscape:flex landscape:flex-row lg:flex">
      <div className="bg-elements w-full h-full lg:rounded-r-4xl flex justify-center items-center rounded-b-4xl lg:rounded-l-none">
        <h1 className="text-white font-bold text-2xl">ANDRES MARTINEZ</h1>
      </div>

      <div className="w-full h-full p-2">
        <div className="w-full h-full border border-gray-300 rounded-2xl p-2 flex justify-center items-center">
          <motion.div
            layout
            className={`
              grid gap-4 w-full text-white
              ${
                expanded
                  ? "grid-cols-5 grid-rows-6 lg:p-10 h-full py-10"
                  : "grid-cols-4 grid-rows-1 p-4"
              }
            `}
          >
            <motion.div
              layout
              className={`bg-elements4 rounded-2xl p-2 hover:scale-[1.02] transition ${
                expanded ? "col-span-3 row-span-3" : "h-20 lg:h-40"
              }`}
            >
              1
            </motion.div>
            <motion.div
              layout
              className={`bg-elements4 rounded-2xl p-2 hover:scale-[1.02] transition ${
                expanded ? "col-span-2 row-span-3 col-start-4" : ""
              }`}
            >
              2
            </motion.div>
            <motion.div
              layout
              className={`bg-elements4 rounded-2xl p-2 hover:scale-[1.02] transition ${
                expanded ? "col-span-3 row-span-3 col-start-3 row-start-4" : ""
              }`}
            >
              3
            </motion.div>

            <motion.div
              layout
              className={`bg-elements4 rounded-2xl p-2 hover:scale-[1.02] transition ${
                expanded ? "col-span-2 row-span-3 col-start-1 row-start-4" : ""
              }`}
            >
              4
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
