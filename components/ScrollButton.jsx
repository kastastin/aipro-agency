"use client";

import Image from "next/image";

export default function ScrollButton({ text, scrollInto: sectionId, variant }) {
  function buttonHandler() {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  if (variant === "secondary") {
    return (
      <button
        className="group flex gap-x-4 border-b border-secondary pb-1 font-nunito text-xl uppercase tracking-wide text-secondary transition-colors duration-300 ease-in-out hover:border-primary hover:text-primary"
        onClick={buttonHandler}
      >
        {text}
        <Image
          src="/arrow-right-secondary.svg"
          alt="Right arrow"
          width={33}
          height={20}
          className="translate-y-[2px] transition-transform duration-500 ease-in-out group-hover:rotate-180 group-hover:brightness-[10]"
        />
      </button>
    );
  }

  return (
    <button
      className="group mx-auto flex h-20 items-center font-nunito text-xl uppercase tracking-wide"
      onClick={buttonHandler}
    >
      <span className="duration-300 ease-in-out group-hover:-translate-x-3 group-hover:text-primary">
        {text}
      </span>
      <Image
        src="/arrow-right-big.svg"
        alt="Right arrow"
        width={80}
        height={80}
        className="-z-10 -translate-x-4 transition-transform duration-500 ease-in-out group-hover:translate-x-0 group-hover:brightness-[10]"
      />
    </button>
  );
}
