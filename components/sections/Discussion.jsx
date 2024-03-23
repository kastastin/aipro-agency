import Image from "next/image";
import DiscussionForm from "../DiscussionForm";

export default function DiscussionSection() {
  return (
    <section
      id="discussion"
      className="relative overflow-hidden pb-[80px] pt-[50px] xl:pb-[80px] xl:pt-[100px]"
    >
      <div className="container mx-auto">
        <h2 className="h2 mb-[50px] xl:text-right">
          Давайте <span className="text-primary">обсудим</span> задачу
        </h2>

        <p className="p mb-[50px] xl:ml-auto xl:w-[600px] xl:text-right">
          Заполните контактную форму, чтобы раскрыть свои потребности и цели,
          получив бесплатную консультацию с 10% скидкой на все услуги AiPro
          Agency.
        </p>

        {/* Stone */}
        <div className="absolute -right-[35px] top-[510px] -z-10 h-[180px] w-[130px] rotate-[65deg] blur-[2px] xl:right-[40px] xl:top-[300px] xl:h-[130px] xl:w-[90px] xl:-rotate-[20deg] xl:blur-0">
          <Image src="/stone-form.png" alt="Blured stone" fill />
        </div>

        {/* Form */}
        <DiscussionForm />
      </div>
    </section>
  );
}
