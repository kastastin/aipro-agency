import Image from "next/image";

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
      <div className="container mx-auto">
        <h2 className="h2 mb-[50px]">
          <span className="text-primary">Этапы работы</span> которым следует
          AiPro
        </h2>

        <p className="text-sm">
          Процессы работы AiPro над проектами выстроены с учетом всего
          многолетнего опыта агенции.
        </p>

        {/* Stages */}
        <ul className="items-between relative mx-auto flex w-[275px] flex-col gap-y-[60px] py-[50px]">
          {stages.map((stage, index) => (
            <li
              key={index}
              className="dot-stage flex items-center justify-between"
            >
              <span className="w-[80px] text-center font-nunito text-[64px] font-black leading-[64px]">
                {index + 1}
              </span>
              <strong className="w-[145px] text-sm font-normal">{stage}</strong>
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
            className="absolute left-4 top-[40%] -z-10 rotate-6 scale-[2.3] opacity-25"
          />
        </ul>

        <p className="text-sm">
          В конце каждого этапа работы над проектом AiPro дает вам всю
          информацию о проделанных действиях и согласовывает переход к
          следующему этапу работы.
        </p>
      </div>
    </section>
  );
}
