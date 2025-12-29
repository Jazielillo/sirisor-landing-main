"use client";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="flex py-5 px-6 flex-col items-start gap-5 bg-neutral-50 dark:bg-neutral-900 md:mt-20 mt-5">
      <Image src={"/images/logo.svg"} alt="logo" width={33} height={40} className="dark:invert dark:brightness-0 dark:contrast-200"></Image>
      <p className="p-medium">Created By HERO Software 2025</p>
    </div>
  );
};
