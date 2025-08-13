"use client";

import { useRef } from "react";
import { certificationsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type CertificationProps = (typeof certificationsData)[number] & {
  githubUrl?: string;
};

export default function Certification({
  title,
  imageUrl,
}: CertificationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group"
    >
      <section className="bg-gray-100 w-[20rem] border border-black/5 rounded-lg overflow-hidden hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20 flex flex-col items-center text-center p-4">
        
        {/* Title */}
        <h3 className="text-xl font-semibold mb-3">{title}</h3>

        {/* Image with hover zoom */}
        <div className="overflow-hidden rounded-lg">
          <Image
            src={imageUrl}
            alt={title}
            width={320}
            height={200}
            quality={95}
            className="transition-transform duration-300 group-hover:scale-[1.08]"
          />
        </div>
      </section>
    </motion.div>
  );
}
