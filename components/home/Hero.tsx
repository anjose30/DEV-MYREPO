"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const [gridReady, setGridReady] = useState(false);

  useEffect(() => {
    if (expandedIndex < 3) {
      const t = setTimeout(() => setExpandedIndex((i) => i + 1), 300);
      return () => clearTimeout(t);
    } else {
      requestAnimationFrame(() => setGridReady(true));
    }
  }, [expandedIndex]);

  return (
    <div className="w-full h-full grid gap-2 items-center landscape:flex landscape:flex-row lg:flex">
      <div className="bg-elements w-full h-full lg:rounded-r-4xl flex justify-center items-center rounded-b-4xl lg:rounded-l-none">
        <h1 className="text-white font-bold text-2xl">ANDRES MARTINEZ</h1>
      </div>

      <div className="w-full h-full p-2">
        <div className="w-full h-full border border-gray-300 rounded-2xl p-2 flex justify-center items-center">
          <motion.div
            layout
            className={`grid gap-4 w-full text-white grid-cols-5 grid-rows-6 lg:p-10 h-full py-10`}
          >
            <motion.div
              layout={gridReady ? true : "position"}
              transition={{ layout: { duration: 4, ease: "easeInOut" } }}
              className={
                `bg-elements4 rounded-2xl p-2 hover:scale-[1.02] transition col-span-3 row-span-3` +
                (expandedIndex < 0
                  ? " opacity-0 scale-75"
                  : " opacity-100 scale-100")
              }
            >
              1
            </motion.div>
            <motion.div
              layout={gridReady ? true : "position"}
              transition={{ layout: { duration: 4, ease: "easeInOut" } }}
              className={
                `bg-elements4 rounded-2xl p-2 hover:scale-[1.02] transition col-span-2 row-span-3 col-start-4` +
                (expandedIndex < 1
                  ? " opacity-0 scale-75"
                  : " opacity-100 scale-100")
              }
            >
              2
            </motion.div>
            <motion.div
              layout={gridReady ? true : "position"}
              transition={{ layout: { duration: 4, ease: "easeInOut" } }}
              className={
                `bg-elements4 rounded-2xl p-2 hover:scale-[1.02] transition col-span-3 row-span-3 col-start-3 row-start-4` +
                (expandedIndex < 2
                  ? " opacity-0 scale-75"
                  : " opacity-100 scale-100")
              }
            >
              3
            </motion.div>
            <motion.div
              layout={gridReady ? true : "position"}
              transition={{ layout: { duration: 4, ease: "easeInOut" } }}
              className={
                `bg-elements4 rounded-2xl p-2 hover:scale-[1.02] transition col-span-2 row-span-3 col-start-1 row-start-4` +
                (expandedIndex < 3
                  ? " opacity-0 scale-75"
                  : " opacity-100 scale-100")
              }
            >
              4
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
