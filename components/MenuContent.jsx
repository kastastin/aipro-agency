"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Collapsible, CollapsibleContent } from "@radix-ui/react-collapsible";

import Logo from "./Logo";
import ScrollButton from "./ScrollButton";
import { services } from "@/app/service/data";

export default function MenuContent({ onClose }) {
  const [isCollapsibled, setisCollapsibled] = useState(false);

  const arrowStyles = isCollapsibled ? "rotate-180" : "rotate-0";

  return (
    <div className="absolute left-0 top-0 h-svh w-[100vw] bg-black/70 md:bg-black/10 xl:bg-black/0">
      <div className="container mx-auto">
        <header className="flex h-[60px] items-center justify-between xl:h-[100px]">
          <Logo onClick={onClose} />

          <div
            className="relative size-[36px] cursor-pointer hover:opacity-70 xl:size-[50px]"
            onClick={onClose}
          >
            <Image src="/close.svg" alt="Close" fill />
          </div>
        </header>

        <ul className="mt-[80px] space-y-[20px] xl:mt-[30px] xl:space-y-[30px]">
          <li className="menu-list-item inline">
            <Collapsible
              open={isCollapsibled}
              onOpenChange={setisCollapsibled}
              className="inline"
            >
              <span
                className="menu-link relative w-min pr-6"
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

              <CollapsibleContent className="collapsible-content mt-[20px] cursor-default">
                <ul className="flex flex-col items-start space-y-[10px] xl:space-y-[15px]">
                  {services.map((service, index) => (
                    <li key={index} className="text-base">
                      <Link
                        href={`${service.path}`}
                        className="sm:text-xl 3xl:text-3xl"
                        onClick={onClose}
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CollapsibleContent>
            </Collapsible>
          </li>

          <li className="menu-list-item w-min">
            <ScrollButton scrollInto="reviews" variant="link">
              <span className="menu-link" onClick={onClose}>
                Отзывы
              </span>
            </ScrollButton>
          </li>

          <li className="menu-list-item w-min">
            <ScrollButton scrollInto="faq" variant="link">
              <span className="menu-link" onClick={onClose}>
                FAQ
              </span>
            </ScrollButton>
          </li>

          <li className="menu-list-item w-min">
            <ScrollButton scrollInto="footer" variant="link">
              <span className="menu-link" onClick={onClose}>
                Контакты
              </span>
            </ScrollButton>
          </li>
        </ul>
      </div>
    </div>
  );
}
