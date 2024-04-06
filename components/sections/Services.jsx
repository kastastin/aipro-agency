"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { services } from "@/app/service/data";
import RevealBlock from "@/components/animations/RevealBlock";

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <section
      id="services"
      className="overflow-hidden pb-[100px] pt-[50px] xl:pt-0"
    >
      <div className="container mx-auto">
        {/* Grid */}
        <div className="grid lg:grid-cols-[40%_60%] lg:gap-x-[175px]">
          <RevealBlock direction="left">
            <div className="lg:content-center">
              <h2 className="mb-[30px] text-xs sm:text-sm xl:mt-[90px]">
                Все цифровые услуги в одном месте
              </h2>

              {/* List of services */}
              <ul className="flex flex-col gap-y-[20px] lg:gap-y-[30px]">
                {services.map((service, index) => (
                  <li
                    key={index}
                    className="group relative text-xl uppercase opacity-40 transition-all duration-300 ease-in-out hover:opacity-100 xs:hover:pl-[40px] lg:text-2xl"
                    onMouseEnter={() => setSelectedService(service)}
                  >
                    <Image
                      src="/arrow-right.svg"
                      alt="Right arrow"
                      width={33}
                      height={20}
                      className="absolute -left-[500px] top-[3px] hidden group-hover:left-[2px] xs:block"
                    />
                    <Link href={`${service.path}`}>{service.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </RevealBlock>

          {/* Section image */}
          <RevealBlock>
            <div className="relative max-lg:hidden">
              <Image
                src={selectedService.imageSrc}
                alt={selectedService.name}
                width={345}
                height={195}
                layout="responsive"
                className="object-content"
              />
            </div>
          </RevealBlock>
        </div>
      </div>
    </section>
  );
}
