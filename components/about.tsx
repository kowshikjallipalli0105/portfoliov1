"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Experience from "@/components/experience";
import Education from "@/components/education";


export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
<p className="mb-3">
  I'm a final-year <span className="font-medium">Computer Science</span> student with a strong passion for full-stack web development and cloud technologies. I thrive on solving complex problems and turning ideas into clean, functional solutions. My core tech stack includes{" "}
  <span className="font-medium">React, Next.js, Node.js, MongoDB, and React Native</span>, enabling me to build seamless applications for both{" "}
  <span className="italic">web and mobile platforms</span>. I'm also experienced with{" "}
  {/* <span className="font-medium">TypeScript, Electron.js, Python, Flask, FastAPI</span>, and have hands-on experience with{" "} */}
  <span className="font-medium">AWS (S3, Lambda, CloudFront)</span> for cloud deployment and{" "}
  <span className="font-medium">ServiceNow</span> for IT service management and workflow automation.
  I’m always eager to explore and learn new technologies. I'm currently seeking a{" "}
  <span className="font-medium">full-time role as a software developer</span> where I can grow and contribute to impactful projects.
</p>

<p>
  <span className="italic">Outside of coding</span>, I enjoy gaming, watching movies, and taking walks to unwind and recharge.
</p>
<br>
</br>
    <Experience />
    <Education />

    </motion.section>
  );
}
