import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Какие услуги предоставляет AiPro Agency?",
    answer: `AiPro решает задачи разной сложности и на разных временных промежутках. И чтобы вы могли эффективно инвестировать свои средства в решение вашей проблемы, AiPro разрабатывает индивидуальные коммерческие предложения под каждый проект.`,
  },
  {
    question: "Каким этапам работы следует AiPro?",
    answer: `AiPro решает задачи разной сложности и на разных временных промежутках. И чтобы вы могли эффективно инвестировать свои средства в решение вашей проблемы, AiPro разрабатывает индивидуальные коммерческие предложения под каждый проект.`,
  },
  {
    question: "Чем выделается AiPro на рынке?",
    answer: `AiPro решает задачи разной сложности и на разных временных промежутках. И чтобы вы могли эффективно инвестировать свои средства в решение вашей проблемы, AiPro разрабатывает индивидуальные коммерческие предложения под каждый проект.`,
  },
  {
    question: "Какие гарантии качества предоставляет AiPro?",
    answer: `AiPro решает задачи разной сложности и на разных временных промежутках. И чтобы вы могли эффективно инвестировать свои средства в решение вашей проблемы, AiPro разрабатывает индивидуальные коммерческие предложения под каждый проект.`,
  },
  {
    question: "Как определяются цены на услуги AiPro?",
    answer: `AiPro решает задачи разной сложности и на разных временных промежутках. И чтобы вы могли эффективно инвестировать свои средства в решение вашей проблемы, AiPro разрабатывает индивидуальные коммерческие предложения под каждый проект.`,
  },
  {
    question: "Какие результаты достигают клиенты с AiPro Agency?",
    answer: `AiPro решает задачи разной сложности и на разных временных промежутках. И чтобы вы могли эффективно инвестировать свои средства в решение вашей проблемы, AiPro разрабатывает индивидуальные коммерческие предложения под каждый проект.`,
  },
  {
    question: "Как связаться с AiPro для обсуждения задачи?",
    answer: `AiPro решает задачи разной сложности и на разных временных промежутках. И чтобы вы могли эффективно инвестировать свои средства в решение вашей проблемы, AiPro разрабатывает индивидуальные коммерческие предложения под каждый проект.`,
  },
];

export default function FaqSection() {
  const half = Math.ceil(faqs.length / 2);
  const firstHalf = faqs.slice(0, half);
  const secondHalf = faqs.slice(half, faqs.length);

  return (
    <section className="relative overflow-hidden pb-[80px] pt-[50px]">
      <div className="container mx-auto">
        <h2 className="h2 w-[310px] md:w-[390px] lg:w-[70%] xl:w-[55%]">
          <span className="text-primary">Частые вопросы</span> к AiPro
        </h2>

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
          className="absolute -right-[60px] top-[350px] -z-10"
        />

        {/* Bottom stone */}
        <Image
          src="/faq/stone-bottom.png"
          alt="Stone"
          width={50}
          height={75}
          className="absolute bottom-[55px] right-[15px] -z-10 rotate-[40deg]"
        />
      </div>
    </section>
  );
}
