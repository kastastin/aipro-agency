import Link from "next/link";

import { services } from "@/app/service/data";
import Image from "next/image";

export default function ServicesSection() {
  return (
    <section className="pb-[100px] pt-[50px]">
      <div className="container mx-auto">
        <h2 className="mb-[30px] text-xs">Все цифровые услуги в одном месте</h2>

        <ul className="flex flex-col gap-y-[20px]">
          {services.map((service, index) => (
            <li
              key={index}
              className="group relative text-xl uppercase opacity-40 transition-all duration-300 ease-in-out hover:pl-[40px] hover:opacity-100"
            >
              <Image
                src="/arrow-right.svg"
                alt="Right arrow"
                width={33}
                height={20}
                className="absolute -left-[50px] top-[3px] group-hover:left-[2px]"
              />
              <Link href={`${service.path}`}>{service.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
