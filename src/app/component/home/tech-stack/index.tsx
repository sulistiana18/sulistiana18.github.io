"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

import {
  SiHtml5,
  SiCss,
  SiReact,
  SiJavascript,
  SiVuedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiFigma,
} from "react-icons/si";

import { TbBrandFramerMotion } from "react-icons/tb";

interface TechItem {
  name: string;
  icon: string;
  label: string;
}

const TechStack = () => {
  const [techStack, setTechStack] = useState<TechItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/tech-data.json"));
        const data = await res.json();

        setTechStack(data);
      } catch (error) {
        console.error("Failed to fetch tech stack:", error);
      }
    };

    fetchData();
  }, []);

  const getIcon = (icon: string) => {
    switch (icon) {
      case "htmlcss":
        return (
          <div className="flex items-center gap-1">
            <SiHtml5 className="text-[#E34F26]" />
            <SiCss className="text-[#1572B6]" />
          </div>
        );

      case "react":
        return <SiReact className="text-[#61DAFB]" />;

      case "javascript":
        return <SiJavascript className="text-[#F7DF1E]" />;

      case "vue":
        return <SiVuedotjs className="text-[#42B883]" />;

      case "next":
        return <SiNextdotjs className="text-black" />;

      case "tailwind":
        return <SiTailwindcss className="text-[#38BDF8]" />;

      case "cursor":
        return <TbBrandFramerMotion className="text-[#A855F7]" />;

      case "figma":
        return <SiFigma className="text-[#F24E1E]" />;

      case "uizard":
        return (
          <span className="text-[#7C3AED] text-sm md:text-base font-bold tracking-widest">
            UZ
          </span>
        );

      default:
        return null;
    }
  };

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-orange-400/20 blur-[130px]" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-orange-500 md:text-sm">
            MY TECH STACK
          </p>

          <h2 className="text-4xl font-bold leading-tight text-black md:text-6xl">
            Tools & Technologies
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-black/60 md:text-base">
            Modern technologies and creative tools I use to build responsive,
            interactive, and visually engaging digital experiences.
          </p>
        </div>

        {/* Marquee */}
        <div className="relative">
          {/* Left Fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/90 to-transparent" />

          {/* Right Fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-[#FAF7F2] via-[#FAF7F2]/90 to-transparent" />

          <Marquee
            speed={45}
            gradient={false}
            pauseOnHover={false}
            autoFill
          >
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="
                  group
                  relative
                  mx-3 md:mx-5
                  flex items-center gap-4
                  overflow-hidden
                  rounded-[28px]
                  border border-orange-100
                  bg-gradient-to-br
                  from-white
                  via-[#FFF8F3]
                  to-[#FFF1E7]
                  px-6 py-5
                  shadow-[0_10px_40px_rgba(255,140,60,0.08)]
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:border-orange-300
                  hover:shadow-[0_20px_60px_rgba(249,115,22,0.18)]
                "
              >
                {/* Glow */}
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-orange-200/30 blur-3xl transition-all duration-500 group-hover:bg-orange-300/40" />

                {/* Icon */}
                <div
                  className="
                    relative z-10
                    flex h-12 w-12 items-center justify-center
                    rounded-2xl
                    border border-white/60
                    bg-white/80
                    text-2xl
                    shadow-[0_8px_20px_rgba(0,0,0,0.04)]
                    backdrop-blur-xl
                    transition-all duration-300
                    group-hover:scale-110
                    group-hover:rotate-3
                    md:h-14 md:w-14 md:text-3xl
                  "
                >
                  {getIcon(tech.icon)}
                </div>

                {/* Text */}
                <div className="relative z-10">
                  <p className="whitespace-nowrap text-sm font-semibold text-black md:text-base">
                    {tech.name}
                  </p>

                  <p className="mt-1 text-xs text-orange-700/70 md:text-sm">
                    {tech.label}
                  </p>
                </div>

                {/* Bottom Shine */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-orange-400 to-orange-200 transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default TechStack;