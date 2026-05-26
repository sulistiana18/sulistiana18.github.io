"use client";

import { FiArrowUpRight } from "react-icons/fi";

type ExternalLinkButtonProps = {
  href: string;
  label?: string;
};

const ExternalLinkButton = ({
  href,
  label = "Visit Project",
}: ExternalLinkButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex items-center gap-2

        rounded-xl
        bg-black
        px-6 py-3

        text-sm font-semibold text-white

        transition-all duration-300
        
        hover:bg-orange-500
        hover:gap-3

        cursor-pointer
      "
    >
      {label}

      <FiArrowUpRight
        size={18}
        className="transition-transform duration-300 group-hover:rotate-45"
      />
    </a>
  );
};

export default ExternalLinkButton;