"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { useEffect, useRef, useState } from "react";
import { ModeToggle } from "../ui/mode-toggle";
import NavbarTabs from "../ui/tabs-trigger";
import MobileMenu from "../ui/bread-menu";

export const Navbar = () => {
  const [showTabs, setShowTabs] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY.current) {
        setShowTabs(false);
      } else {
        setShowTabs(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`
        px-4 pt-12 pb-3
        sm:px-6 sm:pt-14 sm:pb-3.5
        md:px-10 md:pt-16 md:pb-4
        lg:px-16 lg:pt-14
        xl:px-20 xl:pt-11
        flex justify-between items-center 
        transition-all duration-300
        ${showTabs
          ? "from-foreground/20 dark:from-foreground/5 bg-gradient-to-b to-transparent"
          : "from-foreground/0 bg-gradient-to-b to-transparent"
        }
      `}
    >
      {/* Logo - Mobile (< 640px) */}
      <div
        className={`
          flex gap-2 items-center sm:hidden
          transition-all duration-300
          ${showTabs
            ? "opacity-80 translate-y-0"
            : "opacity-0 -translate-y-3 pointer-events-none"
          }
        `}
      >
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={24}
          height={28}
          className="dark:invert dark:brightness-0 dark:contrast-200"
        />
        <p className="text-2xl">|</p>
        <h2 className="text-2xl font-outfit font-light">Sirisor</h2>
      </div>

      {/* Logo - Tablet y Desktop (>= 640px) */}
      <div
        className={`
          hidden sm:flex gap-2 items-center
          transition-all duration-300
          ${showTabs
            ? "opacity-80 translate-y-0"
            : "opacity-0 -translate-y-3 pointer-events-none"
          }
        `}
      >
        <Image
          src="/images/logo2.svg"
          width={96}
          height={32}
          alt="Logo"
          className="dark:invert dark:brightness-0 dark:contrast-200"
        />
        <p className="text-2xl">|</p>
        <h2 className="text-2xl font-outfit font-light">Sirisor</h2>
      </div>

      {/* Tabs - Solo visible en Laptop y Desktop (>= 1024px) */}
      <div
        className={`
          hidden lg:block
          transition-all duration-300
          ${showTabs
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-3 pointer-events-none"
          }
        `}
      >
        <NavbarTabs />
      </div>

      {/* Botones - Desktop (>= 1024px) */}
      <div
        className={`
          hidden lg:flex gap-2.5 items-center
          transition-all duration-300
          ${showTabs
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-3 pointer-events-none"
          }
        `}
      >
        <ModeToggle />
        <Button
          className="
            bg-blue-700 hover:bg-blue-800 
            dark:bg-blue-600 dark:hover:bg-blue-700 
            dark:text-white cursor-pointer
            whitespace-nowrap
            px-4 py-2
            xl:px-6
          "
          onClick={() =>
            document
              .getElementById("planes")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Elegir mi plan
        </Button>
      </div>

      {/* Mobile Menu - Mobile y Tablet (< 1024px) */}
      <div
        className={`
          flex lg:hidden items-center gap-2
          transition-all duration-300
          ${showTabs
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-3 pointer-events-none"
          }
        `}
      >
        {/* ModeToggle visible en tablets */}
        <div className="hidden sm:block lg:hidden">
          <ModeToggle />
        </div>
        <MobileMenu />
      </div>
    </div>
  );
};