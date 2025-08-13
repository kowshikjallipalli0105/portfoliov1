"use client";
import Certification from "@/components/certification";
import { certificationsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
export default function CertificationsList() {
  const { ref } = useSectionInView("Certifications");
  return (
    
    <section
      id="certifications"
      ref={ref}
      className="w-full flex flex-col items-center"
    >
      <SectionHeading>My Certifications</SectionHeading>

      <div className="flex flex-wrap gap-6 justify-center mt-6">
        {certificationsData.map((cert, index) => (
          <Certification key={index} {...cert} />
        ))}
      </div>
    </section>
  );
}
