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
        <div className="relative">
          <Image
            src="/pricing/joke.jpg"
            alt="Local joke about pricing"
            width={345}
            height={290}
            className="mt-[35px]"
          />

          {/* Stone top */}
          <Image
            src="/pricing/stone-top.png"
            alt="Local joke about pricing"
            width={30}
            height={50}
            className="absolute -top-6 right-1"
          />

          {/* Stone bottom */}
          <Image
            src="/pricing/stone-bottom.png"
            alt="Local joke about pricing"
            width={40}
            height={57}
            className="absolute -bottom-6 left-2 rotate-[20deg]"
          />
        </div>
      </div>
    </section>
  );
}
