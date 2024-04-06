"use client";

import Image from "next/image";

export default function ScrollButton({
  text,
  scrollInto: sectionId,
  variant,
  isSubmit,
  children,
}) {
  function buttonHandler() {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  if (variant === "link") {
    return <button onClick={buttonHandler}>{children}</button>;
  }

  if (variant === "secondary") {
    return (
      <button
        className="group flex gap-x-4 border-b border-secondary pb-1 font-nunito text-xl uppercase tracking-wide text-secondary transition-all duration-300 ease-in-out hover:border-primary hover:pr-[8px] hover:text-primary"
        onClick={buttonHandler}
      >
        {text}
        <Image
          src="/arrow-right-secondary.svg"
          alt="Right arrow"
          width={33}
          height={20}
          className="translate-y-[2px] transition-transform duration-500 ease-in-out group-hover:translate-x-2 group-hover:brightness-[10]"
        />
      </button>
    );
  }

  return (
    <button
      type={isSubmit ? "submit" : "button"}
      className="group mx-auto flex h-[80px] items-center font-nunito text-xl uppercase tracking-wide xl:h-[150px] animate-pulse"
      onClick={() => {
        if (!isSubmit) {
          buttonHandler();
        }
      }}
    >
      <span className="z-20 duration-300 ease-in-out group-hover:-translate-x-3 group-hover:text-primary xl:text-3xl">
        {text}
      </span>

      {/* Circle */}
      <div className="relative z-10 size-[80px] -translate-x-[16px] transition-transform duration-500 ease-in-out group-hover:translate-x-0 group-hover:brightness-[10] xl:size-[150px] xl:-translate-x-[40px]">
        <Image src="/arrow-right-big.svg" alt="Right arrow" fill />
      </div>
    </button>
  );
}
