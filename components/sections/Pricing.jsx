import Image from "next/image";

import ScrollButton from "../ScrollButton";
import RevealTitle from "@/components/animations/RevealTitle";
import RevealChars from "@/components/animations/RevealChars";

export default function PricingSection() {
  return (
    <section className="py-[50px]">
      <div className="container mx-auto">
        {/* Grid */}
        <div className="grid lg:grid-cols-[43.75%_43.75%] lg:gap-x-[12.5%]">
          {/* Left column */}
          <div className="lg:mt-[35px]">
            <RevealTitle>
              <h2 className="h2 mb-[50px] text-center sm:text-left lg:text-4xl 2xl:text-5xl">
                Ценообразование
              </h2>
            </RevealTitle>

            <p className="p mb-[50px]">
              <RevealChars sentence="AiPro решает задачи разной сложности и на разных временных промежутках. И чтобы вы могли эффективно инвестировать свои средства в решение вашей проблемы, AiPro разрабатывает индивидуальные коммерческие предложения под каждый проект." />
            </p>

            <p className="p mb-[50px] font-semibold lg:mb-[20px] 2xl:mb-[50px]">
              <RevealChars sentence="Расскажите о своих потребностях, и AiPro Agency предложит вам индивидуальное решение, соответствующее вашему проекту." />
            </p>

            <ScrollButton
              text="Обсудить проект"
              scrollInto="discussion"
              variant="secondary"
            />
          </div>

          {/* Section image | Right column */}
          <div className="relative mx-auto mb-[50px] h-[290px] w-[345px] md:h-[435px] md:w-[518px] lg:size-full">
            <Image
              src="/pricing/joke.jpg"
              alt="Local joke about pricing"
              fill
              className="relative mt-[35px]"
            />

            <span className="absolute right-[50px] top-[80px] w-[75px] text-center text-sm font-black uppercase leading-[17px] tracking-wider">
              Другие агенции
            </span>

            <span className="absolute bottom-[15px] left-[40px] text-center text-sm font-black uppercase leading-[17px] tracking-wider">
              Ваш бюджет
            </span>

            {/* Stone top */}
            <Image
              src="/pricing/stone-top.png"
              alt="Local joke about pricing"
              width={55}
              height={80}
              className="absolute -right-[5px] top-[10px] -rotate-[30deg]"
            />

            {/* Stone bottom */}
            <Image
              src="/pricing/stone-bottom.png"
              alt="Local joke about pricing"
              width={60}
              height={67}
              className="absolute -bottom-[62px] left-[5px] -rotate-[210deg]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
