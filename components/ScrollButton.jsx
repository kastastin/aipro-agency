"use client";

import Image from "next/image";

export default function ScrollButton({ text, scrollInto: sectionId }) {
  function buttonHandler() {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
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
