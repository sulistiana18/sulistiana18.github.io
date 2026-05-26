"use client";

import { useRouter } from "next/navigation";
import { FiArrowUpRight } from "react-icons/fi";

const BackButton = ({ label = "Back" }: { label?: string }) => {
  const router = useRouter();

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <button
      onClick={handleBack}
      className="
        fixed right-5 top-5 z-[99999]

        flex items-center gap-2
        px-5 py-3

        rounded-full
        overflow-hidden

        bg-white/80
        backdrop-blur-xl

        border border-black/10

        text-sm font-semibold text-black

        shadow-md

        transition-all duration-300 ease-out

        hover:-translate-y-0.5
        hover:shadow-lg
        cursor-pointer
      "
    >
      {/* TEXT */}
      <span className="relative z-10">
        {label}
      </span>

      {/* ICON */}
      <span className="relative z-10">
        <FiArrowUpRight size={18} />
      </span>
    </button>
  );
};

export default BackButton;