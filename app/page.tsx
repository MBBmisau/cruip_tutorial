import AnimatedAccordion from "@/components/Accordion";
import FancyTestimonalSlider from "@/components/FancyTestimonialSlider";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col space-y-10 max-w-4xl">
      <AnimatedAccordion />
      <FancyTestimonalSlider />
    </div>
  );
}
