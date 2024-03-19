"use client";

import { Collapsible, CollapsibleContent } from "@radix-ui/react-collapsible";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "./Logo";

import { services } from "@/app/service/data";

export default function MenuContent({ onClose }) {
  const [isCollapsibled, setisCollapsibled] = useState(false);

  const arrowStyles = isCollapsibled ? "rotate-180" : "rotate-0";

  return (
    <div className="absolute left-0 top-0 h-svh w-[100vw] bg-black/70">
      <Logo className="absolute left-4 top-[16px]" onClick={onClose} />

      <ul className="mt-[80px] space-y-[20px] pl-4">
        <li className="menu-list-item">
          <Collapsible open={isCollapsibled} onOpenChange={setisCollapsibled}>
            <span
              className="relative pr-6"
              onClick={() => setisCollapsibled(!isCollapsibled)}
            >
              Услуги
              <Image
                src="/arrow-down.svg"
                alt="Arrow down"
                width={16}
                height={16}
                className={`absolute right-0 top-[50%] -translate-y-[40%] ${arrowStyles} transition-transform duration-300 ease-in-out`}
              />
            </span>

            <CollapsibleContent className="collapsible-content mt-[20px]">
              <ul className="space-y-[10px]">
                {services.map((service, index) => (
                  <li key={index} className="text-base">
                    <Link href={`${service.path}`} onClick={onClose}>
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </CollapsibleContent>
          </Collapsible>
        </li>

        <li className="menu-list-item">
          <Link href="https://www.google.com/">Отзывы</Link>
        </li>

        <li className="menu-list-item">
          <Link href="https://www.google.com/">FAQ</Link>
        </li>

        <li className="menu-list-item">
          <Link href="https://www.google.com/">Контакты</Link>
        </li>
      </ul>
    </div>
  );

  // return (
  //   <>
  //     <Logo className="absolute left-4 top-[16px]" onClick={onClose} />

  //     <ul className="mt-[56px] space-y-[30px]">
  //       {menuItems.map((item, index) => {
  //         return (
  //           <li key={index}>
  //             <span className="cursor-pointer font-nunito text-[32px] font-extralight leading-none">
  //               {item}
  //             </span>
  //           </li>
  //         );
  //       })}
  //     </ul>
  //   </>
  // );
}
