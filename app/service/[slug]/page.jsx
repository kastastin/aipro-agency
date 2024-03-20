"use client";

import { notFound } from "next/navigation";
import Image from "next/image";

import { services } from "@/app/service/data";
import DiscussionForm from "@/components/DiscussionForm";

export default function ServicePage({ params }) {
  const service = services.find(
    (service) => service.path === `/service/${params.slug}`,
  );

  if (!service) return notFound();

  return (
    <section className="py-[85px]">
      <div className="container mx-auto">
        <h1 className="h2 mb-[20px]">{service.name}</h1>
        <p className="text-sm">{service.description}</p>
        {/* Types */}
        <ul className="my-[50px] space-y-[20px]">
          {service.types.map((type, index) => (
            <li key={index}>
              <span className="text-xl">{type}</span>
            </li>
          ))}
        </ul>
        {/* Section image */}
        <div className="relative mb-[40px]">
          <div className="relative h-[195px] w-[345px] overflow-hidden">
            <Image
              src={service.imageSrc}
              alt={service.name}
              fill
              className="scale-[1.1] object-cover"
            />
          </div>

          <Image
            src="/services/stone-top.png"
            alt="Stone"
            width={80}
            height={130}
            className="absolute -right-[20px] -top-[35px] z-10 rotate-[40deg]"
          />

          <Image
            src="/services/stone-bottom.png"
            alt="Stone"
            width={60}
            height={110}
            className="absolute -bottom-[25px] left-[5px] z-10 "
          />
        </div>

        <p className="text-sm">{service.conclusion}</p>

        <h2 className="h2 mb-[50px] mt-[100px]">
          Давайте <span className="text-primary">обсудим</span> задачу
        </h2>

        <p className="mb-[50px] text-sm">
          Заполните контактную форму, чтобы раскрыть свои потребности и цели,
          получив бесплатную консультацию с 10% скидкой на все услуги AiPro
          Agency.
        </p>

        <DiscussionForm />
      </div>
    </section>
  );
}
