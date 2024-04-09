import Carousel from "../Carousel/Carousel";
import RevealTitle from "@/components/animations/RevealTitle";

const reviews = [
  {
    name: "Bożena",
    position: "Online shop owner",
    comment:
      "The guys from AiPro are excellent specialists who really delve into the details and needs of the client. Their copywriting, website development and SEO optimization services have helped me achieve high search engine rankings and improve my brand's online visibility. Definitely recommend!",
  },
  {
    name: "Anna",
    position: "Marketer",
    comment:
      "AiPro helped us improve our search engine rankings with an effective SEO strategy. They analyzed our website and developed an individual approach that gave us positive results. Thank you for your professionalism and focus on the result!",
  },
  {
    name: "Ірина",
    position: "Власник магазину одягу",
    comment:
      "Наша компанія співпрацює з AiPro протягом року, і ми вкрай задоволені результатами. Вони створили для нас зручну та зрозумілу базу даних, і функціональний веб-сайт. А також постійно пропонують ідеї та стратегії для підвищення нашої впізнаваності.",
  },
  {
    name: "Cristian",
    position: "Small business owner",
    comment:
      "AiPro has been a key partner in the development of my business. They created a great website for us and also provided us with an effective marketing strategy that helped us attract new customers. I recommend their services to anyone looking for a professional and competent approach to digital business.",
  },
  {
    name: "Марина",
    position: "Владелец блога",
    comment:
      "Я очень довольна сотрудничеством с AiPro. Они предоставили мне профессиональный дизайн для моего сайта и чрезвычайно полезные советы по SEO-оптимизации моего контента. Их знания и опыт помогли мне поднять мой блог на новый уровень. Я советую всем, кто ищет качественный веб-дизайн и консультации по цифровому маркетингу, обращаться к AiPro.",
  },
  {
    name: "Вікторія",
    position: "Власник онлайн-магазину",
    comment:
      "AiPro допомогли нам вирішити складне завдання з розробки нашого інтернет-магазину. Вони не тільки створили для нас зручний і естетичний сайт, але і надали професійні консультації з просування та реклами, що дозволило нам швидко залучити аудиторію та зробити наш бізнес прибутковим. Дякуємо за вашу ефективну роботу!",
  },
  {
    name: "Renata",
    position: "Travel agency owner",
    comment:
      "We cooperated with AiPro for several months and during this time radically changed the philosophy of my travel agency. Their copywriters completely changed the structure of the site with new texts, and the designers created an attractive site and many creatives for the advertising campaign. Which fully reflects the new philosophy of my business. It has already brought me dozens of new clients! Thanks AiPro!",
  },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-[50px] lg:py-[100px]">
      <div className="container mx-auto">
        <RevealTitle>
          <h2 className="h2 mb-[50px]">
            <span className="text-primary">Доверьтесь опыту</span> тех, кто уже
            воспользовался услугами{" "}
            <span className="text-primary">AiPro Agency</span>
          </h2>
        </RevealTitle>
      </div>

      {/* Carousel */}
      <Carousel data={reviews} />
    </section>
  );
}
