"use client";

import { useEffect, useRef, useState } from "react";
import { getImgPath } from "@/utils/image";
import Image from "next/image";

/* =========================
   INTEGER COUNT UP
========================= */
const useCountUp = (end: number, start: boolean, duration = 1500) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!start) return;

        let current = 0;
        const step = end / (duration / 16);

        const timer = setInterval(() => {
            current += step;

            if (current >= end) {
                current = end;
                clearInterval(timer);
            }

            setValue(Math.floor(current));
        }, 16);

        return () => clearInterval(timer);
    }, [start, end, duration]);

    return value;
};

/* =========================
   FLOAT COUNT UP (1 DECIMAL)
========================= */
const useFloatCountUp = (end: number, start: boolean, duration = 1500) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!start) return;

        let current = 0;
        const step = end / (duration / 16);

        const timer = setInterval(() => {
            current += step;

            if (current >= end) {
                current = end;
                clearInterval(timer);
            }

            setValue(parseFloat(current.toFixed(1)));
        }, 16);

        return () => clearInterval(timer);
    }, [start, end, duration]);

    return value;
};

const AboutMe = () => {

    /* =========================
       SCROLL TRIGGER
    ========================= */
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    /* =========================
       COUNTERS
    ========================= */
    const projects = useCountUp(10, isVisible);
    const experience = useFloatCountUp(1.5, isVisible);

    return (
        <section ref={sectionRef}>
            <div className="relative bg-softGray py-10 md:py-32">

                {/* BACKGROUND */}
                <div className="absolute top-0 w-full px-9">
                    <Image
                        src={getImgPath("/images/home/about-me/journey-1.svg")}
                        alt="resume-bg-img"
                        width={1200}
                        height={348}
                        className="w-full"
                    />
                </div>

                <div className="relative z-10">
                    <div className="container">

                        {/* HEADER */}
                        <div className="flex items-center justify-between gap-2 border-b border-black pb-7">
                            <h2>About Me</h2>
                            <p className="text-xl text-primary">( 01 )</p>
                        </div>

                        {/* MAIN */}
                        <div className="pt-10 xl:pt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                            {/* LEFT */}
                            <div className="flex flex-col gap-6">

                                <p className="text-xs uppercase tracking-widest text-gray-500">
                                    Introduction
                                </p>

                                <p className="text-base md:text-lg leading-relaxed text-black/80">
                                    Passionate about building responsive and interactive user interfaces that deliver
                                    seamless user experiences, with a strong interest in translating design concepts
                                    into clean, efficient code. Enthusiastic about UI/UX principles, exploring modern
                                    frontend technologies, and creating intuitive, user-centered web applications that
                                    enhance usability and engagement.
                                </p>

                                <div className="flex flex-wrap gap-2 pt-2">
                                    {["UI/UX Focused", "Frontend Dev", "Problem Solver"].map((tag) => (
                                        <span
                                            key={tag}
                                            className="bg-white px-3 py-1 rounded-full text-sm text-black/70"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                            </div>

                            {/* RIGHT CARD */}
                            <div className="bg-gray-50 rounded-2xl p-6 md:p-10 shadow-sm flex flex-col gap-10">

                                {/* STATS */}
                                <div className="grid grid-cols-2 gap-8">

                                    {/* EXPERIENCE */}
                                    <div>
                                        <h3 className="text-3xl md:text-4xl font-bold text-black">
                                            {experience.toFixed(1)}+
                                        </h3>
                                        <p className="text-sm md:text-base text-gray-600 mt-1">
                                            Years of experience
                                        </p>
                                    </div>

                                    {/* PROJECTS */}
                                    <div>
                                        <h3 className="text-3xl md:text-4xl font-bold text-black">
                                            {projects.toLocaleString()}+
                                        </h3>
                                        <p className="text-sm md:text-base text-gray-600 mt-1">
                                            Project Completed
                                        </p>
                                    </div>

                                </div>

                                {/* LANGUAGE */}
                                <div className="border-t border-gray-200 pt-6 flex flex-col gap-4">

                                    <div className="flex items-center gap-3.5">
                                        <Image
                                            src={getImgPath("/images/icon/lang-icon.svg")}
                                            alt="lang-icon"
                                            width={30}
                                            height={30}
                                        />
                                        <p className="text-base md:text-lg font-medium text-black">
                                            Language
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2.5">
                                        {["English", "Indonesian"].map((lang) => (
                                            <p
                                                key={lang}
                                                className="bg-softGray py-2 px-4 rounded-full text-sm md:text-base text-black"
                                            >
                                                {lang}
                                            </p>
                                        ))}
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutMe;