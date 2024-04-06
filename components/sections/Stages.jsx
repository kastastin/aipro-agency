import Image from "next/image";

import RevealTitle from "@/components/animations/RevealTitle";
import RevealBlock from "@/components/animations/RevealBlock";
import RevealChars from "@/components/animations/RevealChars";

const stages = [
  "Ознакомительный брифинг",
  "Анализ задачи",
  "Коммерческое предложение",
  "Глубокий брифинг",
  "Анализ информации",
  "Утверждение решений",
  "Оплата аванса",
  "Разработка проекта",
  "Сдача проекта",
  "Оплата оставшейся суммы",
];

export default function StagesSection() {
  return (
    <section className="overflow-hidden pb-[50px] pt-[90px]">
      <div className="container relative mx-auto">
        <RevealTitle>
          <h2 className="h2 mb-[50px] xl:w-[1000px]">
            <span className="text-primary">Этапы работы</span> которым следует
            AiPro
          </h2>
        </RevealTitle>

        <p className="p md:w-[42%] lg:mb-[150px] lg:w-[535px]">
          <RevealChars sentence="Процессы работы AiPro над проектами выстроены с учетом всего многолетнего опыта агенции." />
        </p>

        {/* Mobile stages */}
        <RevealBlock>
          <div className="lg:hidden">
            <ul className="items-between relative mx-auto flex w-[275px] flex-col gap-y-[60px] py-[50px]">
              {stages.map((stage, index) => (
                <li
                  key={index}
                  className="dot-stage flex items-center justify-between"
                >
                  <span className="w-[80px] text-center font-nunito text-[64px] font-black leading-[64px]">
                    {index + 1}
                  </span>
                  <strong className="w-[145px] text-sm font-normal md:text-xl md:leading-[20px]">
                    {stage}
                  </strong>
                </li>
              ))}

              {/* Vertical divider */}
              <div className="dot bg-gradient absolute left-[100px] top-[50%] h-[1116px] w-[3px] translate-y-[-50%]" />

              {/* Vergin statue */}
              <Image
                src="/vergin-statue.png"
                alt="Vergin statue"
                width={700}
                height={1400}
                className="absolute left-4 top-[40%] -z-10 rotate-6 scale-[2.3] opacity-25 md:scale-[3]"
              />
            </ul>
          </div>
        </RevealBlock>

        <p className="p md:ml-auto md:w-[50%] lg:mb-[100px] lg:ml-0 lg:w-[577px]">
          <RevealChars sentence="В конце каждого этапа работы над проектом AiPro дает вам всю информацию о проделанных действиях и согласовывает переход к следующему этапу работы." />
        </p>

        {/* Desktop stages */}
        <RevealBlock>
          <div className="hidden lg:block">
            <div className="flex h-[338px] w-full flex-col justify-between gap-y-[10px]">
              {/* Upper stages */}
              <ul className="flex w-[90%] justify-between">
                {stages
                  .filter((_, index) => index % 2 === 0)
                  .map((stage, index) => (
                    <li
                      key={index}
                      className={`flex flex-col gap-y-[12px] ${index === 1 ? "4xl:ml-[-30px]" : ""}`}
                    >
                      <span className="text-left font-nunito text-[64px] font-black leading-[50px]">
                        {index * 2 + 1}
                      </span>
                      <strong className="w-[125px] text-xs font-normal xl:w-[145px] xl:text-sm">
                        {stage}
                      </strong>
                    </li>
                  ))}
              </ul>

              <div className="mr-[100px] 4xl:mr-0">
                <Image
                  src="/stages-line.svg"
                  width={1500}
                  height={150}
                  alt="Curve line"
                />
              </div>

              {/* Lower stages */}
              <ul className="ml-auto flex w-[90.5%] justify-between">
                {stages
                  .filter((_, index) => index % 2 !== 0)
                  .map((stage, index) => (
                    <li
                      key={index}
                      className={`flex w-[145px] flex-col gap-y-[12px]`}
                    >
                      <span className="text-left font-nunito text-[64px] font-black leading-[50px]">
                        {index * 2 + 2}
                      </span>
                      <strong className="w-[145px] text-sm font-normal">
                        {stage}
                      </strong>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </RevealBlock>

        {/* Vergin statue */}
        <div className="absolute right-[5%] top-0 -z-10 hidden h-[510px] w-[365px] -rotate-[10deg] object-contain lg:block xl:right-[20%] animate-pulse">
          <Image
            src="/vergin-statue.png"
            alt="Vergin statue"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
