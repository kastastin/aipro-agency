"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "@/components/Logo";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import MenuContent from "./MenuContent";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function openMenu() {
    setIsMenuOpen(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="fixed top-0 z-30 h-[60px] w-full">
      <div className="container mx-auto">
        <div className="flex h-[60px] items-center justify-between">
          <Logo />

          {/* Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger>
              <Image
                src="/menu.svg"
                alt="Menu icon"
                width={32}
                height={25}
                className="cursor-pointer hover:opacity-70"
                onClick={openMenu}
              />
            </SheetTrigger>

            <SheetContent>
              <MenuContent onClose={closeMenu} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
