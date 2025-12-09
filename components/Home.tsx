// Fixed Home component
"use client";

import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import AnoAI from "@/components/animated-shader-background";
import AnimatedBadge from "@/components/ui/animated-badge";
import { Safari } from "@/components/ui/safari";
import LogoCloud from "@/components/logo-cloud";
import Features from "@/components/features-4";
import { Particles } from "@/components/ui/particles";

const Home = () => {
  const revealImgRef = useRef<HTMLImageElement | null>(null);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#050505] text-white font-[Montserrat]">
      {/* ---- GRID BACKGROUND ---- */}
      <div className="absolute top-0 left-0 right-0 h-[1600px] z-[1]">
        <div
          className={cn(
            "absolute inset-0 opacity-40",
            "[background-size:70px_70px]",
            "[background-image:linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)]"
          )}
        />
      </div>

      {/* ---- METEORS ---- */}
      <div className="absolute inset-0 z-[2] pointer-events-none opacity-80">
       <AnoAI />
      </div>

      {/* ---- REVEAL IMAGE ---- */}
      <div
        className="absolute inset-0 z-[3]"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const img = revealImgRef.current as HTMLImageElement | null;
          if (img) {
            img.style.setProperty("--mx", `${x}px`);
            img.style.setProperty("--my", `${y}px`);
          }
        }}
        onMouseLeave={() => {
          const img = revealImgRef.current as HTMLImageElement | null;
          if (img) {
            img.style.setProperty("--mx", "-9999px");
            img.style.setProperty("--my", "-9999px");
          }
        }}
      >
        <img
  ref={revealImgRef as React.RefObject<HTMLImageElement>}
  src="/image.jpg"
  alt="reveal"
  className="absolute top-[-20%] w-full opacity-[0.18] mix-blend-lighten pointer-events-none transition-all"
  style={{
    ['--mx' as any]: '-9999px',
    ['--my' as any]: '-9999px',
    maskImage:
      "radial-gradient(circle at var(--mx) var(--my), white 0px, rgba(255,255,255,0.7) 80px, transparent 180px)",
    WebkitMaskImage:
      "radial-gradient(circle at var(--mx) var(--my), white 0px, rgba(255,255,255,0.7) 80px, transparent 180px)",
  } as React.CSSProperties}
/>

      </div>

      {/* ---- MAIN HERO ---- */}
      <div className="relative z-[5] max-w-5xl mx-auto px-6 pt-36 pb-28 text-center">
        <div className="mb-8 flex justify-center">
          <AnimatedBadge
            text="Introducing GLABS — The Future of Workflows"
            color="#9b5dff"
            href="/docs"
          />
        </div>

        <h1 className="text-center mx-auto text-[2.4rem] md:text-[4rem] font-bold leading-[1.15] tracking-tight space-y-2">
          <span className="flex justify-center items-center gap-3 flex-wrap">
            Build
            <img
              src="/icons/chatgpt.svg"
              alt="ChatGPT"
              className="w-10 md:w-12 h-auto invert brightness-200 drop-shadow-[0_0_10px_rgba(140,82,255,0.4)]"
            />
            Intelligent
          </span>

          <span className="flex justify-center items-center gap-3 flex-wrap">
            Workflows
            <img src="/icons/langchain.svg" className="w-10 md:w-12" />
            <img src="/icons/n8n.svg" className="w-10 md:w-12" />
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          Automate decisions, streamline operations, and scale execution with next-generation workflow intelligence designed for modern teams.
        </p>

        <div className="flex gap-4 justify-center mt-8">
          <button
            type="button"
            className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150"
          >
           Try Peanut
            <svg
              className="w-8 h-8 group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
              viewBox="0 0 16 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                className="fill-gray-800 group-hover:fill-gray-800"
              ></path>
            </svg>
          </button>

          <button className="px-8 py-3 text-lg font-medium border border-zinc-700 text-white rounded-full hover:bg-zinc-900 transition-all flex items-center gap-2">
            About Us
          </button>
        </div>

        <div className="relative mx-auto mt-20 max-w-[92%]">
          <div className="absolute inset-0 bg-violet-600/60 blur-[90px] opacity-40" />
          <div className="relative border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden">
            <Safari url="gocrack.in" imageSrc="/image.jpg" className="w-full" />
          </div>
        </div>
      </div>

      {/* ---- LOGO CLOUD ---- */}
      <div className="relative z-[5] mt-20">
        <LogoCloud />
      </div>

      {/* ---- FEATURES SECTION ---- */}
      <div className="relative mt-20">
        <div className="absolute inset-0 z-0 opacity-70">
          <Particles />
        </div>

        <div className="relative z-10">
          <Features />
        </div>
      </div>
    </div>
  );
};

export default Home;
