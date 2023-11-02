"use client";

import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Transition } from "@headlessui/react";

import testimonial01 from "@/public/testimonial-01.webp";
import testimonial02 from "@/public/testimonial-02.webp";
import testimonial03 from "@/public/testimonial-03.webp";

interface Testimonial {
  img: StaticImageData;
  quote: string;
  name: string;
  role: string;
}

export default function FancyTestimonalSlider() {
  const testimonials: Testimonial[] = [
    {
      img: testimonial01,
      quote: "The ability to capture responses is a game-changer. ",
      name: "Muhammad",
      role: "Acme LTD",
    },
    {
      img: testimonial02,
      quote:
        "Having the power to capture user feedback is revolutionary. Even if a participant abandons the sign-up process midway, their valuable input remains intact.",
      name: "Abdullahi",
      role: "Malika Inc.",
    },
    {
      img: testimonial03,
      quote:
        "The functionality to capture responses is a true game-changer. Even if a user becomes fatigued during sign-up and abandons the process, their information remains stored.",
      name: "Buhari",
      role: "Panda AI",
    },
  ];

  return <FancyTestimonalSliderItem testimonials={testimonials} />;
}

export function FancyTestimonalSliderItem({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [active, setActive] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const autoRotateTiming = 5000;

  useEffect(() => {
    if (!autoRotate) return;
    const interval = setInterval(() => {
      setActive(
        active + 1 === testimonials.length ? 0 : (active) => active + 1,
      );
    }, autoRotateTiming);
    return () => clearInterval(interval);
  }, [active, autoRotate]);

  const heightFix = () => {
    if (testimonialRef.current && testimonialRef.current.parentElement) {
      testimonialRef.current.parentElement.style.height = `${testimonialRef.current.clientHeight}px`;
    }
  };
  useEffect(() => {
    heightFix();
  }, []);
  return (
    <div className="w-full max-w-3xl mx-auto text-center">
      {/* Image */}
      <div className="relative h-32">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 h-[480px] w-[480px] pointer-events-none
          before:absolute before:bg-gradient-to-b before:from-indigo-500/25 before:via-indigo-500/5 via-20%
          before:to-indigo-500/0 to-25% rounded-full -z-10"
        >
          {testimonials.map((testimonial, index) => (
            <Transition
              key={index}
              show={active === index}
              className="absolute inset-0 h-full -z-10"
              enter="transition ease-[cubic-bezier(0, -0.3,0.3,1)] duration-700 order-first"
              enterFrom="opacity-0 -rotate-[60deg]"
              enterTo="opacity-100 rotate-0"
              leave="transition ease-[cubic-bezier(0, -0.3,0.3,1)] duration-700"
              leaveFrom="opacity-100 rotate-0"
              leaveTo="opacity-0 rotate-[60deg]"
            >
              <Image
                key={index}
                src={testimonial.img}
                className="relative top-11 left-1/2 -translate-x-1/2 rounded-full"
                width={56}
                height={56}
                alt={testimonial.name}
              />
            </Transition>
          ))}
        </div>
      </div>
      {/* Text */}
      <div className="mb-9 transtion ease-out duration-150 delay-300">
        <div className="relative flex flex-col" ref={testimonialRef}>
          {testimonials.map((testimonial, index) => (
            <Transition
              key={index}
              show={active === index}
              enter="transition duration ease-in-out delay-200 order-first"
              enterFrom="opacity-0 -transition-x-4"
              enterTo="opacity-100 transition-x-0"
              leave="transition duration ease-in-out delay-300 absolute"
              leaveFrom="opacity-0 transition-x-0"
              leaveTo="opacity-0 transition-x-4"
              beforeEnter={() => {
                heightFix();
              }}
            >
              <div
                className="text-2xl font-bold text-slate-900 before:content-[\201C]
                after:content-[\201D]"
              >
                {testimonial.quote}
              </div>
            </Transition>
          ))}
        </div>
      </div>
      {/* Buttons */}
      <div className="flex justify-center flex-wrap -m-1.5">
        {testimonials.map((testimonial, index) => (
          <button
            key={index}
            className={`inline-flex justify-center whitespace-nowrap rounded-full px-3 py-1.5
              m-1.5 text-xs focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300
              dark:focus-visible:ring-indigo-600 shadow-sm transition-colors duration-150 
              ${
                active === index
                  ? "bg-indigo-500 text-white shadow-indigo-900/10"
                  : "bg-white text-slate-500 hover:bg-indigo-100"
              }`}
            onClick={() => {
              setActive(index);
              setAutoRotate(false);
            }}
          >
            <span>{testimonial.name}</span>
            <span
              className={`&{ active === index ? 'text-indigo-300': text-slate-200 }`}
            >
              -
            </span>
            <span>{testimonial.role}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
