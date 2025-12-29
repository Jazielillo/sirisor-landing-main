"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function PeekCarousel() {
  const options = [
    {
      id: "1",
      title: " de sorteos",
      image: "/images/orange.png",
    },
    {
      id: "2",
      title: "Usuario",
      image: "/images/orange.png",
    },
    {
      id: "3",
      title: "Estoy harto",
      image: "/images/orange.png",
    },
    {
      id: "4",
      title: "Otra vez yo",
      image: "/images/orange.png",
    }
  ];

  return (
    <Carousel
      opts={{
        align: "start",
        loop: false,
        dragFree: true,
      }}
      className="w-full"
    >
      <CarouselContent className="md:-ml-4 flex gap-2 ">
        {options.map((item) => (
          <CarouselItem
            key={item.id}
            className="basis-[85%] md:basis-[45%] lg:basis-[30%] rounded-[12px] "
          >
            <Image
              width={333}
              height={310}
              alt={`${item.id}`}
              src={item.image}
              className="rounded-tr-[12px] rounded-tl-[12px] w-full"
            ></Image>
            <div className="flex items-center p-3 gap-2 border-r border-b border-l border-default-100 bg-background rounded-br-[12px] rounded-bl-[12px] hover:shadow-lg">
              <p className="heading-4">{item.title}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
