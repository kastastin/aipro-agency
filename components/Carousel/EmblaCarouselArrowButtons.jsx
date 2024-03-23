import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const Button = (props) => {
  const { children, ...restProps } = props;

  const directionStyle = props.direction === "up" ? "-rotate-90" : "rotate-90";

  return (
    <button
      className={`md:hidden absolute bottom-6 left-[50%] -translate-x-[50%] ${directionStyle} cursor-pointer brightness-[10] transition-all duration-300 hover:scale-[1.2]`}
      type="button"
      {...restProps}
    >
      <Image
        src="/arrow-right-big.svg"
        alt="Arrow icon"
        width={50}
        height={50}
      />
      {children}
    </button>
  );
};
