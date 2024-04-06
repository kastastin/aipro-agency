import Image from "next/image";

import ScrollButton from "@/components/ScrollButton";
import RevealTitle from "@/components/animations/RevealTitle";
import RevealBlock from "@/components/animations/RevealBlock";
import RevealChars from "@/components/animations/RevealChars";

export default function HeroSection() {
  return (
    <section className="min-h-[100svh] bg-hero bg-130 bg-top bg-no-repeat sm:bg-90 xl:bg-contain xl:bg-right xl:pb-[20px] 3xl:bg-contain 3xl:pb-[275px]">
      <div className="container relative mx-auto xl:bg-black/20">
        <RevealTitle>
          <h1 className="h1 flex flex-col pt-[340px] xs:mx-auto xs:w-[96%] xs:flex-row xs:flex-wrap xs:pt-[420px] sm:justify-center sm:pt-[450px] lg:w-[80%] lg:pt-[500px] xl:w-auto xl:pt-[160px]">
            <span className="text-stroke px-8 xs:pl-0 xs:pr-[10px] xl:pr-[40px]">
              Digital
            </span>
            <span className="text-right">Агенство</span>
            <span className="xs:ml-auto sm:ml-0 sm:pl-[50px] xl:pl-[200px]">
              Полного
            </span>
            <span className="text-stroke px-8 text-right xs:px-0 xs:pl-[10px] xl:pl-[40px]">
              Цикла
            </span>
          </h1>
        </RevealTitle>

        <p className="p mb-[20px] mt-[50px] sm:mt-[80px] sm:w-[80%] xl:mt-[185px] xl:w-[482px]">
          <RevealChars sentence="Aipro Agency — команда экспертов в области IT-услуг по веб-разработке и маркетингу. Занимаясь полным циклом решения задач, Aipro создает эффективные инструменты для вашего бизнеса." />
        </p>

        <div className="xl:w-[482px]">
          <ScrollButton
            text="Обсудить проект"
            scrollInto="discussion"
            position="left"
          />
        </div>

        {/* Hero tip */}
        <RevealBlock direction="right">
          <div className="gradiant mx-auto mt-[20px] flex h-[255px] w-[295px] flex-col items-center justify-center gap-y-3 sm:mt-0 xl:absolute xl:bottom-[10px] xl:right-0 3xl:-bottom-[80px] 3xl:right-0">
            {/* Logo */}
            <div className="relative h-[86px] w-[100px] xl:h-[122px] xl:w-[141px]">
              <Image src="/logo.svg" alt="Right arrow" fill />
            </div>

            <span className="w-[186px] text-center text-xs lg:w-[209px] lg:text-sm">
              AiPro — это золотое сечение в мире digital продакшена
            </span>
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}
