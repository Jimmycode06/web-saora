"use client";
import React from "react";
import { HoverBorderGradient } from "./hover-border-gradient";

export default function HoverBorderGradientDemo() {
  return (
    <div className="m-0 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="bg-white text-blue-700 flex items-center space-x-2 font-semibold"
      >
        <SaoraLogo />
        <span>Découvrir Saora</span>
      </HoverBorderGradient>
    </div>
  );
}

const SaoraLogo = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-blue-700"
    >
      <circle cx="16" cy="16" r="16" fill="url(#saora-gradient)" />
      <text
        x="50%"
        y="55%"
        textAnchor="middle"
        fill="white"
        fontSize="16"
        fontFamily="Arial"
        dy=".3em"
      >
        S
      </text>
      <defs>
        <linearGradient
          id="saora-gradient"
          x1="0"
          y1="0"
          x2="32"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3275F8" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </svg>
  );
};
