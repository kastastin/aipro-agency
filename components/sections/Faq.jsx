import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import RevealTitle from "@/components/animations/RevealTitle";

const faqs = [
  {
    question: "Какие услуги предоставляет AiPro Agency?",
    answer:
      "AiPro предоставляет широкий спектр IT-услуг, включая дизайн, копирайтинг, разработку сайтов, работу с базами данных, SEO оптимизацию, управление рекламными кампаниями и контент-маркетинг.",
  },
  {
    question: "Чем выделается AiPro на рынке?",
    answer:
      "AiPro отличается более чем 5-летним опытом, высококвалифицированными специалистами, индивидуальным подходом к каждому клиенту и гарантией качества и соблюдения сроков.",
  },
  {
    question: "Каковы этапы работы с AiPro?",
    answer:
      "Процесс работы включает ознакомительный брифинг, анализ задачи, презентацию коммерческого предложения, утверждение решений, оплату, работу над проектом, сдачу проекта и финальную оплату.",
  },

  {
    question: "Какие гарантии качества предоставляет AiPro?",
    answer: `AiPro гарантирует качество работ и соблюдение сроков выполнения проекта.`,
  },
  {
    question: "Как определяются цены на услуги AiPro?",
    answer:
      "Цены определяются индивидуально для каждого проекта, учитывая его сложность и временные рамки.",
  },
  {
    question: "Какие результаты достигают клиенты с AiPro Agency?",
    answer:
      "Клиенты достигают увеличения продаж, привлечения новой аудитории и повышения видимости в поисковых системах.",
  },
  {
    question: "Как связаться с AiPro для обсуждения задачи?",
    answer:
      "Заполните контактную форму на сайте для получения бесплатной консультации с 10% скидкой на все услуги.",
  },
];

export default function FaqSection() {
  const half = Math.ceil(faqs.length / 2);
  const firstHalf = faqs.slice(0, half);
  const secondHalf = faqs.slice(half, faqs.length);

  return (
    <section id="faq" className="relative overflow-hidden pb-[80px] pt-[50px]">
      <div className="container mx-auto">
        <RevealTitle>
          <h2 className="h2 w-[310px] md:w-[390px] lg:w-[70%] xl:w-[55%]">
            <span className="text-primary">Частые вопросы</span> к AiPro
          </h2>
        </RevealTitle>

        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-[45%]">
            <Accordion type="single" collapsible>
              {firstHalf.map((faq, index) => (
                <AccordionItem key={index} value={index + 1}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="w-full lg:w-[45%]">
            <Accordion type="single" collapsible>
              {secondHalf.map((faq, index) => (
                <AccordionItem key={index} value={index + half + 1}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Stone top */}
        <Image
          src="/faq/stone-top.png"
          alt="Stone"
          width={60}
          height={100}
          className="absolute -left-[20px] top-[145px] -z-10 rotate-[60deg]"
        />

        {/* Stone middle */}
        <Image
          src="/faq/stone-blur.png"
          alt="Blured stone"
          width={220}
          height={200}
          className="absolute -right-[60px] top-[350px] -z-10 lg:top-[250px]"
        />

        {/* Bottom stone */}
        <Image
          src="/faq/stone-bottom.png"
          alt="Stone"
          width={50}
          height={75}
          className="absolute bottom-[55px] right-[15px] -z-10 rotate-[40deg] lg:right-[65px] lg:top-[500px]"
        />
      </div>
    </section>
  );
}
