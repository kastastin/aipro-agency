"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";

import { usePrevNextButtons, Button } from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import "./carousel.css";

export default function Carousel() {
  // Get the axis based on the window size (x/y)
  const [axis, setAxis] = useState(
    typeof window !== "undefined" &&
      window.matchMedia("(min-width: 768px)").matches
      ? "x"
      : "y",
  );

  useEffect(() => {
    const handleResize = () => {
      setAxis(window.matchMedia("(min-width: 768px)").matches ? "x" : "y");
    };

    window.addEventListener("resize", handleResize);

    // Call function initially to set the axis based on the initial window size
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel({ axis }, [ClassNames()]);

  // Controls (btns, dots)
  const { nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div className="embla__slide" key={index}>
              <div className="border p-[20px]">
                {/* Person info */}
                <div className="mb-[25px] flex items-center gap-x-[22px]">
                  <Image
                    src="/review-avatar.png"
                    alt="Photo of Ivan Ivanov"
                    width={50}
                    height={50}
                  />

                  <div className="flex flex-col">
                    <span className="text-sm">Іван Іванович</span>
                    <span className="text-sm font-semibold">
                      AiPro / <span className="opacity-70">Gen-director</span>
                    </span>
                  </div>
                </div>

                {/* Comment */}
                <p className="text-xs">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Control buttons | Vertical (y) */}
        {axis === "y" && !nextBtnDisabled ? (
          <Button onClick={onNextButtonClick} />
        ) : (
          <Button onClick={onPrevButtonClick} direction="up" />
        )}
      </div>

      {/* Dots navigation */}
      <div className="mt-[20px] flex justify-center gap-x-[15px]">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={"embla__dot".concat(
              index === selectedIndex ? " embla__dot--selected" : "",
            )}
          />
        ))}
      </div>
    </div>
  );
}
