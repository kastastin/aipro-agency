import Image from "next/image";

import ScrollButton from "@/components/ScrollButton";

export default function HeroSection() {
  return (
    <section className="bg-fill min-h-[100svh] bg-hero bg-130 bg-top  bg-no-repeat lg:bg-contain lg:bg-right-10rem ">
      <div className="container mx-auto">
        <h1 className="h1 flex flex-col pt-[340px]">
          <span className="text-stroke px-8">Digital</span>
          <span className="text-right">Агенство</span>
          <span>Полного</span>
          <span className="text-stroke px-8 text-right">Цикла</span>
        </h1>

        <p className="mb-[20px] mt-[50px] text-sm lg:text-xl">
          Aipro Agency — команда экспертов в области IT-услуг по веб-разработке
          и маркетингу. Занимаясь полным циклом решения задач, Aipro создает
          эффективные инструменты для вашего бизнеса.
        </p>

        <ScrollButton text="Обсудить проект" scrollInto="discussion" />

        {/* Hero tip */}
        <div className="gradiant mx-auto mt-[20px] flex h-[255px] w-[295px] flex-col items-center justify-center gap-y-3">
          <Image src="/logo.svg" alt="Right arrow" width={86} height={100} />

          <span className="w-[186px] text-center text-xs">
            AiPro — это золотое сечение в мире digital продакшена
          </span>
        </div>
      </div>
    </section>
  );
}
