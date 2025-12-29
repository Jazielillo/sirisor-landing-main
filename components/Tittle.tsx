'use client'
import { Button } from "./ui/button";

export const Tittle = () => {
  return (
    <div className="
      flex w-full flex-col items-center gap-4 px-8 my-10
      sm:px-16 sm:gap-5
      md:px-24
      lg:px-32
      xl:width-[968px] xl:px-[272px]
    ">
      <h3 className="
        text-center text-base font-light leading-4 tracking-[-0.16px] text-neutral-500 font-geist dark:text-neutral-400
        sm:text-xl sm:leading-5
        md:text-[22px] md:leading-[26px]
        xl:text-[24px] xl:leading-6
      ">
        ¡La forma más divertida de crecer y ganar!
      </h3>
      <h2 className="
        text-center text-[62px] not-italic font-extrabold leading-[62px] self-stretch font-geist
        sm:text-[70px] sm:leading-[70px]
        md:text-[72px] md:leading-[72px]
        lg:text-[76px] lg:leading-[76px]
        xl:text-[80px] xl:leading-[80px]
      ">
        Tu Sistema De Rifas y Sorteos Digitales
      </h2>
      <Button
        variant="outline"
        className="shadow-md cursor-pointer sm:text-base sm:px-5"
        onClick={() =>
          document
            .getElementById("planes")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Ver detalles
      </Button>
    </div>
  );
};