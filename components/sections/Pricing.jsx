import Image from "next/image";

import ScrollButton from "../ScrollButton";

export default function PricingSection() {
  return (
    <section className="py-[50px]">
      <div className="container mx-auto">
        <h2 className="h2 mb-[50px] text-center">Ценообразование</h2>

        <p className="mb-[50px] text-sm">
          AiPro решает задачи разной сложности и на разных временных
          промежутках. И чтобы вы могли эффективно инвестировать свои средства в
          решение вашей проблемы, AiPro разрабатывает индивидуальные
          коммерческие предложения под каждый проект.
        </p>

        <p className="mb-[50px] text-sm font-semibold">
          Расскажите о своих потребностях, и AiPro Agency предложит вам
          индивидуальное решение, соответствующее вашему проекту.
        </p>

        <ScrollButton
          text="Обсудить проект"
          scrollInto="discussion"
          variant="secondary"
        />

        {/* Section image */}
        <div className="relative mx-auto mb-[50px] h-[290px] w-[345px]">
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
    </section>
  );
}
