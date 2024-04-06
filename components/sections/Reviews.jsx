import Carousel from "../Carousel/Carousel";
import RevealTitle from "@/components/animations/RevealTitle";

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
      <Carousel />
    </section>
  );
}
