"use client";
import { useScroll, useTransform } from "motion/react";
import React from "react";
import { GoogleGeminiEffect } from "./google-gemini-effect";

export default function GoogleGeminiEffectDemo() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <div
      className="h-[100vh] bg-white w-full border border-gray-200 rounded-md relative pt-40 overflow-clip"
      ref={ref}
    >
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
        title={"Saora, l'expérience sonore immersive"}
        description={
          "Faites défiler pour découvrir comment Saora transforme le bien-être par le son. Laissez-vous porter par l'animation et l'énergie de notre univers sonore !"
        }
        className="[&>p]:bg-gradient-to-r [&>p]:from-blue-600 [&>p]:to-purple-600 [&>p]:text-transparent [&>p]:bg-clip-text"
      />
    </div>
  );
}
