"use client";

import { motion } from "framer-motion";

const TOTAL = 85;

export default function UninsuredStat() {
  return (
    <div className="mt-12 flex flex-col items-center gap-4">
      <div className="grid grid-cols-10 gap-1.5 max-w-xs">
        {Array.from({ length: TOTAL }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.015, duration: 0.3 }}
            className="w-3 h-3 rounded-sm bg-clay/70"
            title="Uninsured shop"
          />
        ))}
      </div>
      <p className="text-xs text-ink/50 text-center max-w-xs">
        Each icon represents <span className="font-medium text-clay">1%</span> of
        India&rsquo;s 70 million small shops without insurance — in total,{" "}
        <span className="font-medium">85%</span> have none.
      </p>
    </div>
  );
}
