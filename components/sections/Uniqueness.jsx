import Image from "next/image";

export default function UniquenessSection() {
  return (
    <section className="relative overflow-x-hidden pb-[90px] pt-[70px]">
      <div className="container mx-auto">
        <h2 className="text-stroke-white font-roboto pb-[100px] text-center text-4xl font-black uppercase tracking-wider">
          Уникальность AiPro
        </h2>

        {/* Left hand */}
        <Image
          src="/uniqueness/hand-left.png"
          alt="Left hand"
          width={200}
          height={165}
          className="absolute -left-1 top-4 -z-10 -rotate-6 opacity-60"
        />

        {/* Right hand */}
        <Image
          src="/uniqueness/hand-right.png"
          alt="Right hand"
          width={200}
          height={165}
          className="-rotate-4 absolute -right-1 -top-4 -z-10 opacity-60"
        />

        {/* Small stone */}
        <Image
          src="/uniqueness/stone.png"
          alt="Small stone"
          width={50}
          height={96}
          className="rotate-42 absolute -left-3 top-[230px] -z-10 opacity-80"
        />

        {/* Blured stone */}
        <Image
          src="/uniqueness/stone-blur.png"
          alt="Big blured stone"
          width={130}
          height={195}
          className="absolute -right-3 bottom-10 -z-10 rotate-[20deg]"
        />

        <ul className="space-y-[50px]">
          <li className="space-y-[10px]">
            <h3 className="h3">Гарантии качества и соблюдения сроков</h3>
            <p className="text-sm">
              AiPro работает над вашей задачей пока результат вас не
              удовлетворит, при этом выполняя поставленные задачи в сроки.
            </p>
          </li>

          <li className="space-y-[10px]">
            <h3 className="h3">Специалисты высшего уровня</h3>
            <p className="text-sm">
              В AiPro каждый специалист имеет уникальный опыт в своей сфере
              деятельности и наивысший уровень экспертности.
            </p>
          </li>

          <li className="space-y-[10px]">
            <h3 className="h3">5 лет опыта в сфере IT-услуг</h3>
            <p className="text-sm">
              В AiPro каждый специалист имеет уникальный опыт в своей сфере
              деятельности и наивысший уровень экспертности.
            </p>
          </li>

          <li className="space-y-[10px]">
            <h3 className="h3">Индивидуальный подход к каждому проекту</h3>
            <p className="text-sm">
              AiPro подстраивается под любую задачу. Каждый кейс это уникальная
              история.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
