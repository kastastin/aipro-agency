import Image from "next/image";
import DiscussionForm from "../DiscussionForm";

export default function DiscussionSection() {
  return (
    <section
      id="discussion"
      className="relative overflow-hidden pb-[80px] pt-[50px]"
    >
      <div className="container mx-auto">
        <h2 className="h2 mb-[50px]">
          Давайте <span className="text-primary">обсудим</span> задачу
        </h2>

        <p className="p mb-[50px]">
          Заполните контактную форму, чтобы раскрыть свои потребности и цели,
          получив бесплатную консультацию с 10% скидкой на все услуги AiPro
          Agency.
        </p>

        {/* Blured stone */}
        <Image
          src="/stone-form.png"
          alt="Blured stone"
          width={210}
          height={260}
          className="absolute -right-[70px] top-[480px] -z-10 rotate-[90deg] blur-[2px]"
        />

        {/* Form */}
        <DiscussionForm />
      </div>
    </section>
  );
}
