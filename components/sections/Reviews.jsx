import Carousel from "../Carousel/Carousel";

export default function ReviewsSection() {
  return (
    <section className="py-[50px]">
      <div className="container mx-auto">
        <h2 className="h2 mb-[50px]">
          <span className="text-primary">Доверьтесь опыту</span> тех, кто уже
          воспользовался услугами{" "}
          <span className="text-primary">AiPro Agency</span>
        </h2>

        {/* Carousel */}
        <Carousel />
      </div>
    </section>
  );
}
