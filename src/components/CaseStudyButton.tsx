"use client";

import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

type CaseStudyButtonProps = {
  href: string;
  label?: string;
};

const CaseStudyButton = ({
  href,
  label = "Case Study",
}: CaseStudyButtonProps) => {
  const isExternal = href.startsWith("http");

  const className = `
    mt-6 inline-flex items-center gap-2
    rounded-full
    bg-black
    px-5 py-3
    text-sm font-semibold text-white

    transition-all duration-300
    hover:gap-3
    hover:bg-orange-500
    hover:-translate-y-0.5

    cursor-pointer
  `;

  const icon = (
    <FiArrowUpRight
      size={18}
      className="transition-transform duration-300 group-hover:rotate-45"
    />
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {label}
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
      {icon}
    </Link>
  );
};

export default CaseStudyButton;