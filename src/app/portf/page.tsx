"use client";

import { getDataPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { useEffect, useState } from "react";

type ProjectType = {
  id: number;
  image: string;
  category: string;
  title: string;
  description: string;
  link: string;
};

const PortfolioPage = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/porto-data.json"));
        const data = await res.json();

        setProjects(data);
      } catch (error) {
        console.error("Failed fetching portfolio data:", error);
      }
    };

    fetchData();
  }, []);

  // CHECK EXTERNAL LINK
  const isExternal = (url: string) => {
    return url.startsWith("http");
  };

  return (
    <main
      className="
        relative overflow-hidden
        py-16 md:py-24
        bg-[#FAF7F2]
      "
    >

      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[140px]" />

      {/* BACK BUTTON */}
      <div className="fixed right-5 top-5 z-[99999]">
        <Link
          href="/"
          className="
            inline-flex items-center gap-2
            rounded-full
            bg-white/90
            backdrop-blur-xl
            border border-black/5
            px-5 py-3
            text-sm font-semibold text-black

            shadow-[0_10px_25px_rgba(0,0,0,0.08)]
            transition-all duration-300

            
            hover:bg-orange-500
            hover:text-white
            hover:shadow-[0_18px_45px_rgba(249,115,22,0.28)]
          "
        >
          Back

          <FiArrowUpRight
            size={18}
            className="transition-transform duration-300 hover:rotate-45"
          />
        </Link>
      </div>

      <div className="container relative z-10 mx-auto px-4">

        {/* HEADER */}
        <div className="mx-auto mb-14 max-w-3xl text-center">

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-orange-500 md:text-sm">
            ALL PROJECTS
          </p>

          <h1 className="text-4xl font-bold leading-tight text-black md:text-6xl">
            My Portfolio
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-black/60 md:text-base">
            Explore all projects I’ve built across frontend development,
            dashboard systems, UI/UX design, and interactive web experiences.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-2">

          {projects?.map((project) => (
            <div
              key={project.id}
              className="
                group
                overflow-hidden
                rounded-[30px]
                border border-black/5
                bg-gradient-to-b from-white to-orange-50/40

                shadow-[0_10px_25px_rgba(0,0,0,0.08)]
                transition-shadow duration-300 ease-in-out

                hover:shadow-[0_18px_45px_rgba(0,0,0,0.14)]
              "
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="
                    h-[240px] w-full object-cover
                    transition-transform duration-700
                    
                  "
                />

                {/* OVERLAY */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-black/30
                    via-black/5
                    to-transparent
                  "
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">

                {/* CATEGORY */}
                <div
                  className="
                    inline-flex items-center
                    rounded-full
                    border border-orange-200
                    bg-orange-100/80
                    px-3 py-1
                    text-[11px] font-semibold
                    uppercase tracking-[0.2em]
                    text-orange-600
                  "
                >
                  {project.category}
                </div>

                {/* TITLE */}
                <h2
                  className="
                    mt-4
                    text-xl font-bold text-black
                    transition-colors duration-300
                    group-hover:text-orange-500
                  "
                >
                  {project.title}
                </h2>

                {/* DESCRIPTION */}
                <p className="mt-4 text-sm leading-relaxed text-black/60">
                  {project.description}
                </p>

                {/* BUTTON */}
                {isExternal(project.link) ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-6 inline-flex items-center gap-2
                      rounded-full
                      bg-black
                      px-5 py-3
                      text-sm font-semibold text-white
                      transition-all duration-300
                      hover:gap-3
                      hover:bg-orange-500
                    "
                  >
                    Case Study

                    <FiArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:rotate-45"
                    />
                  </a>
                ) : (
                  <Link
                    href={project.link}
                    className="
                      mt-6 inline-flex items-center gap-2
                      rounded-full
                      bg-black
                      px-5 py-3
                      text-sm font-semibold text-white
                      transition-all duration-300
                      hover:gap-3
                      hover:bg-orange-500
                    "
                  >
                    Case Study

                    <FiArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:rotate-45"
                    />
                  </Link>
                )}

              </div>
            </div>
          ))}

        </div>

      </div>
    </main>
  );
};

export default PortfolioPage;