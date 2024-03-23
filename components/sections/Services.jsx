import Link from "next/link";

import { services } from "@/app/service/data";
import Image from "next/image";

export default function ServicesSection() {
  return (
    <section className="pb-[100px] pt-[50px] xl:pt-0">
      <div className="container mx-auto">
        {/* Grid */}
        <div className="grid lg:grid-cols-[40%_60%] lg:gap-x-[175px]">
          <div className="lg:content-center">
            <h2 className="mb-[30px] text-xs sm:text-sm xl:mt-[90px]">
              Все цифровые услуги в одном месте
            </h2>
            <ul className="flex flex-col gap-y-[20px] lg:gap-y-[30px]">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="group relative text-xl uppercase opacity-40 transition-all duration-300 ease-in-out hover:pl-[40px] hover:opacity-100 lg:text-2xl"
                >
                  <Image
                    src="/arrow-right.svg"
                    alt="Right arrow"
                    width={33}
                    height={20}
                    className="absolute -left-[500px] top-[3px] group-hover:left-[2px]"
                  />
                  <Link href={`${service.path}`}>{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section image */}
          <div className="relative max-lg:hidden">
            <Image
              src="/service.jpg"
              alt="Laptop with code"
              width={952}
              height={900}
              layout="responsive"
              className="object-content"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
