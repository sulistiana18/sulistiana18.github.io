"use client";
import { getDataPath, getImgPath } from "@/utils/image";
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

const Portfolio = () => {
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

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden py-16 md:py-24"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[140px]" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-orange-500 md:text-sm">
            MY PORTFOLIO
          </p>

          <h2 className="text-4xl font-bold leading-tight text-black md:text-6xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-black/60 md:text-base">
            A collection of projects focused on frontend development, modern UI
            design, dashboards, and interactive digital experiences.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid gap-7 md:grid-cols-2">
          {projects.slice(0, 2).map((project) => (
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
              {/* Image */}
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

                {/* Overlay */}
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

              {/* Content */}
              <div className="p-6">
                {/* Category */}
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

                {/* Title */}
                <h3
                  className="
                    mt-4
                    text-xl font-bold text-black
                    transition-colors duration-300
                    group-hover:text-orange-500
                  "
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-relaxed text-black/60">
                  {project.description}
                </p>

                {/* Button */}
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
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-14 text-center">
          <Link
            href="/portfolio"
            className="
              inline-flex items-center gap-2
              rounded-full
              bg-orange-500
              px-7 py-4
              text-sm font-semibold text-white
              shadow-[0_10px_30px_rgba(249,115,22,0.3)]
              transition-all duration-300
              hover:-translate-y-1
              hover:bg-orange-600
            "
          >
            View More Projects

            <FiArrowUpRight
              size={18}
              className="transition-transform duration-300 hover:rotate-45"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;