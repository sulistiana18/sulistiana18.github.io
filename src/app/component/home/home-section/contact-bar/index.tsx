"use client";

import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ContactBar = () => {
  const [contactBarData, setContactBarData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setContactBarData(data?.contactBar);
      } catch (error) {
        console.error("Error fetching contact data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="py-6 md:py-8">
      <div className="container">
        <div
          className="
            relative -mt-8 md:-mt-10 z-20 
            flex flex-col lg:flex-row 
            items-center lg:items-center 
            justify-between 
            gap-5 lg:gap-6 
            rounded-[28px] md:rounded-[32px] 
            border border-white/20 
            bg-white/40 
            backdrop-blur-2xl 
            shadow-[0_10px_30px_rgba(0,0,0,0.08),0_1px_1px_rgba(0,0,0,0.04)]
            ring-1 ring-black/5
            px-4 sm:px-6 md:px-10 
            py-5 md:py-6
            overflow-hidden
          "
        >
          {/* soft glass gradient overlay */}
          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/60 via-white/20 to-white/10 pointer-events-none" />

          {/* Contact Items */}
          <div
            className="
              relative z-10
              flex flex-col sm:flex-row 
              items-center sm:items-center 
              justify-center 
              gap-3 sm:gap-6 md:gap-8 
              w-full lg:w-auto
            "
          >
            {contactBarData?.contactItems?.map(
              (value: any, index: number) => (
                <Link
                  key={index}
                  href={value?.link ?? "#"}
                  target={value?.type === "website" ? "_blank" : undefined}
                  rel={
                    value?.type === "website"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex items-center gap-3 md:gap-4 transition-all duration-300 w-full sm:w-auto"
                >
                  {/* Icon */}
                  <div
                    className="
                      flex h-10 w-10 md:h-12 md:w-12 
                      items-center justify-center 
                      rounded-xl md:rounded-2xl 
                      bg-primary/10 
                      group-hover:bg-primary 
                      transition-all duration-300 
                      flex-shrink-0
                    "
                  >
                    <Image
                      src={getImgPath(value?.icon)}
                      alt={value?.type}
                      width={20}
                      height={20}
                      className="md:w-[22px] md:h-[22px] group-hover:brightness-0 group-hover:invert transition duration-300"
                    />
                  </div>

                  {/* Text */}
                  <div className="leading-tight">
                    <p className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400">
                      {value?.type}
                    </p>

                    <h6 className="text-xs md:text-base font-medium text-black group-hover:text-primary transition duration-300">
                      {value?.label}
                    </h6>
                  </div>
                </Link>
              )
            )}
          </div>

          {/* Social Items */}
          <div
            className="
              relative z-10
              flex flex-wrap sm:flex-nowrap 
              items-center justify-center lg:justify-end 
              gap-2 sm:gap-3 
              w-full lg:w-auto
            "
          >
            {contactBarData?.socialItems?.map(
              (value: any, index: number) => (
                <Link
                  key={index}
                  href={value?.link ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div
                    className="
                      flex h-10 w-10 md:h-12 md:w-12 
                      items-center justify-center 
                      rounded-full 
                      border border-white/10 
                      bg-white/5 
                      hover:bg-primary 
                      transition-all duration-300 
                      hover:scale-110
                    "
                  >
                    <Image
                      src={getImgPath(value?.icon)}
                      alt={value?.platform}
                      width={18}
                      height={18}
                      className="md:w-5 md:h-5 group-hover:brightness-0 group-hover:invert transition duration-300"
                    />
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBar;