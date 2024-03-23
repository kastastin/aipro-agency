import Image from "next/image";

import ScrollButton from "@/components/ScrollButton";

export default function HeroSection() {
  return (
    <section className="3xl:bg-contain 3xl:pb-[275px] sm:bg-90 min-h-[100svh] bg-hero bg-130 bg-top bg-no-repeat xl:bg-contain xl:bg-right xl:pb-[20px]">
      <div className="container relative mx-auto xl:bg-black/20">
        <h1 className="h1 xs:flex-row xs:flex-wrap xs:mx-auto xs:pt-[420px] xs:w-[96%] flex flex-col pt-[340px] sm:justify-center sm:pt-[450px] lg:w-[80%] lg:pt-[500px] xl:w-auto xl:pt-[160px]">
          <span className="text-stroke xs:pr-[10px] xs:pl-0 px-8 xl:pr-[40px]">
            Digital
          </span>
          <span className="text-right">Агенство</span>
          <span className="xs:ml-auto sm:ml-0 sm:pl-[50px] xl:pl-[200px]">
            Полного
          </span>
          <span className="text-stroke xs:pl-[10px] xs:px-0 px-8 text-right xl:pl-[40px]">
            Цикла
          </span>
        </h1>

        <p className="p mb-[20px] mt-[50px] sm:mt-[80px] sm:w-[80%] xl:mt-[185px] xl:w-[482px]">
          Aipro Agency — команда экспертов в области IT-услуг по веб-разработке
          и маркетингу. Занимаясь полным циклом решения задач, Aipro создает
          эффективные инструменты для вашего бизнеса.
        </p>

        <div className="xl:w-[482px]">
          <ScrollButton
            text="Обсудить проект"
            scrollInto="discussion"
            position="left"
          />
        </div>

        {/* Hero tip */}
        <div className="gradiant 3xl:-bottom-[80px] 3xl:right-0 mx-auto mt-[20px] flex h-[255px] w-[295px] flex-col items-center justify-center gap-y-3 sm:mt-0 xl:absolute xl:bottom-[10px] xl:right-0">
          {/* Logo */}
          <div className="relative h-[86px] w-[100px] xl:h-[122px] xl:w-[141px]">
            <Image src="/logo.svg" alt="Right arrow" fill />
          </div>

          <span className="w-[186px] text-center text-xs lg:w-[209px] lg:text-sm">
            AiPro — это золотое сечение в мире digital продакшена
          </span>
        </div>
      </div>
    </section>
  );
}
