import Image from "next/image";

import RevealTitle from "@/components/animations/RevealTitle";
import RevealBlock from "@/components/animations/RevealBlock";

export default function UniquenessSection() {
  return (
    <section className="relative overflow-x-hidden pb-[90px] pt-[70px]">
      <div className="container mx-auto">
        <RevealTitle>
          <h2 className="text-stroke-white pb-[100px] text-center font-roboto text-4xl font-black uppercase tracking-wider sm:mt-[40px] md:mt-[90px] md:pb-[150px] lg:pb-[200px] lg:text-5xl xl:text-8xl 2xl:text-9xl">
            Уникальность AiPro
          </h2>
        </RevealTitle>

        {/* Left hand */}
        <div className="absolute -left-1 top-4 -z-10 h-[165px] w-[200px] -rotate-6 opacity-60 sm:size-[300px] md:size-[390px] lg:size-[480px] xl:size-[550px] 2xl:size-[700px]">
          <Image src="/uniqueness/hand-left.png" alt="Left hand" fill />
        </div>

        {/* Right hand */}
        <div className="-rotate-4 absolute -right-[4px] -top-[8px] -z-10 h-[165px] w-[200px] opacity-60 sm:top-0 sm:h-[250px] sm:w-[300px] md:-top-[15px] md:h-[340px] md:w-[390px] lg:h-[400px] lg:w-[500px] xl:h-[450px] xl:w-[620px] 2xl:-right-[40px] 2xl:-top-[50px] 2xl:h-[600px] 2xl:w-[750px]">
          <Image src="/uniqueness/hand-right.png" alt="Right hand" fill />
        </div>

        {/* Small stone */}
        <Image
          src="/uniqueness/stone.png"
          alt="Small stone"
          width={50}
          height={96}
          className="rotate-42 absolute -left-3 top-[230px] -z-10 opacity-80 md:top-[320px] xl:top-[550px]"
        />
        {/* Blured stone */}
        <Image
          src="/uniqueness/stone-blur.png"
          alt="Big blured stone"
          width={130}
          height={195}
          className="absolute -right-3 bottom-10 -z-10 rotate-[20deg]"
        />
        {/* Grid */}
        <RevealBlock>
          <ul className="grid gap-y-[50px] md:grid-cols-[43.75%_43.75%] md:gap-x-[12.5%]">
            <li className="space-y-[10px] md:space-y-[20px]">
              <h3 className="h3">Гарантии качества и соблюдения сроков</h3>
              <p className="p">
                AiPro работает над вашей задачей пока результат вас не
                удовлетворит, при этом выполняя поставленные задачи в сроки.
              </p>
            </li>

            <li className="space-y-[10px] md:space-y-[20px]">
              <h3 className="h3">Специалисты высшего уровня</h3>
              <p className="p">
                В AiPro каждый специалист имеет уникальный опыт в своей сфере
                деятельности и наивысший уровень экспертности.
              </p>
            </li>

            <li className="space-y-[10px] md:space-y-[20px]">
              <h3 className="h3">5 лет опыта в сфере IT-услуг</h3>
              <p className="p">
                В AiPro каждый специалист имеет уникальный опыт в своей сфере
                деятельности и наивысший уровень экспертности.
              </p>
            </li>

            <li className="space-y-[10px] md:space-y-[20px]">
              <h3 className="h3">Индивидуальный подход к каждому проекту</h3>
              <p className="p">
                AiPro подстраивается под любую задачу. Каждый кейс это
                уникальная история.
              </p>
            </li>
          </ul>
        </RevealBlock>
      </div>
    </section>
  );
}
