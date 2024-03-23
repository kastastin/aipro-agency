"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

import Logo from "@/components/Logo";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from "@/components/ui/sheet";
import MenuContent from "./MenuContent";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const markerRef = useRef(null);

  useEffect(() => {
    const currMarker = markerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => setIsScrolled(!entry.isIntersecting),
      { threshold: 0 },
    );

    if (currMarker) observer.observe(currMarker);

    return () => {
      if (currMarker) observer.unobserve(currMarker);
    };
  }, []);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <div className="h-[1px]" ref={markerRef} />

      <header
        className={`fixed top-0 z-30 h-[60px] w-full xl:h-[100px] ${isScrolled ? "bg-transparent shadow-xl backdrop-blur-[2px]" : ""}`}
      >
        <div className="container mx-auto">
          <div className="flex h-[60px] items-center justify-between xl:h-[100px]">
            <Logo />

            {/* Menu */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger>
                <div className="relative size-[32px] xl:size-[50px]">
                  <Image
                    src="/menu.svg"
                    alt="Menu icon"
                    fill
                    className="cursor-pointer hover:opacity-70"
                    onClick={openMenu}
                  />
                </div>
              </SheetTrigger>

              <SheetContent>
                <MenuContent onClose={closeMenu} />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
