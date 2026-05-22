"use client";

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
        const res = await fetch("/data/porto-data.json");
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Failed fetching portfolio data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="relative overflow-hidden py-20 md:py-28 bg-white">

      {/* BACK BUTTON */}
      <div className="fixed right-6 top-6 z-[99999] pointer-events-none">
        <Link
          href="/"
          className="
          pointer-events-auto
          inline-flex items-center gap-2
          rounded-full
          border border-black/10
          bg-white/80 backdrop-blur-md
          px-5 py-2
          text-sm font-semibold text-black
          shadow-md
          transition-all duration-300
          hover:-translate-y-1
          hover:text-orange-500
          hover:border-orange-300
          hover:shadow-[0_10px_30px_rgba(249,115,22,0.15)]
        "
        >
          Back
        </Link>
      </div>

      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[140px]" />

      <div className="container relative z-10 mx-auto px-4">

        {/* HEADER */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
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
        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {projects?.map((project) => (
            <div
              key={project.id}
              className="
                group
                overflow-hidden
                rounded-[30px]
                border border-black/5
                bg-gradient-to-b from-white to-orange-50/40
                shadow-[0_10px_40px_rgba(0,0,0,0.06)]
                transition-all duration-500
                hover:-translate-y-2
                hover:border-orange-500/20
                hover:shadow-[0_20px_60px_rgba(249,115,22,0.15)]
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
                    group-hover:scale-105
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-100/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-600">
                  {project.category}
                </div>

                <h2 className="mt-4 text-xl font-bold text-black transition-colors duration-300 group-hover:text-orange-500">
                  {project.title}
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-black/60">
                  {project.description}
                </p>

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
                  <FiArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default PortfolioPage;