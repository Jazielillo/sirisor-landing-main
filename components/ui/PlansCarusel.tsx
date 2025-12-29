"use client";
import React, { useState } from "react";
import { CircleCheck } from "lucide-react";
import { Badge } from "./badge";
import { Carousel, CarouselContent, CarouselItem } from "./carousel";
import { Button } from "./button";

export default function PeekCarouselPlans() {
  const [planSeleccionado, setPlanSeleccionado] = useState("Plan Plus");

  const basic_plan = [
    {
      feature: "1 Sorteo activo.",
    },
    {
      feature: "Máximo 2 mil boletos.",
    },
    {
      feature: "Máximo 3 premios por sorteo.",
    },
    {
      feature: "Subdominio personalizado.",
    },
    {
      feature: "Participantes ilimitados.",
    },
    {
      feature: "Capacitación por videollamada.",
    },
    {
      feature: "Soporte prioritario por correo electrónico.",
    },
    {
      feature: "1 usuario administrador.",
    },
    {
      feature: "Historial de los últimos 10 sorteos activos.",
    },
    {
      feature: "Instalación y configuración gratuita.",
    },
  ];

  const plus_plan = [
    { feature: "5 Sorteos activos." },
    { feature: "Máximo 30 mil boletos." },
    { feature: "Máximo 10 premios por sorteo." },
    { feature: "Tu dominio." },
    { feature: "Participantes ilimitados." },
    { feature: "Capacitación por videollamada." },
    { feature: "Soporte prioritario por correo electrónico." },
    { feature: "5 usuarios administradores." },
    { feature: "Historial de los últimos 20 sorteos activos." },
    { feature: "Instalación y configuración gratuita." },
  ];

  const ultimate_plan = [
    { feature: "5 Sorteos activos." },
    { feature: "Máximo 30 mil boletos." },
    { feature: "Máximo 10 premios por sorteo." },
    { feature: "Tu dominio." },
    { feature: "Participantes ilimitados." },
    { feature: "Capacitación por videollamada." },
    { feature: "Soporte prioritario por correo electrónico." },
    { feature: "5 usuarios administradores." },
    { feature: "Historial de los últimos 20 sorteos activos." },
    { feature: "Instalación y configuración gratuita." },
  ];

  const handleSeleccionarPlan = (plan: string) => {
    setPlanSeleccionado(plan);
  };
  return (
    <Carousel
  opts={{
    align: "center",
    loop: false,
    dragFree: true,
    startIndex: 1,
  }}
  className="max-sm:w-[400px] sm:w-full sm:max-w-4xl sm:mx-auto lg:max-w-none"
>
  <CarouselContent className="-ml-2 sm:-ml-2 lg:-ml-4">
    <CarouselItem className="pl-2 sm:pl-2 lg:pl-4 basis-auto flex justify-center">
      <div
        className={`bg-card flex py-3 px-4 sm:py-3 sm:px-3 lg:py-3 lg:px-4 flex-col items-center gap-5 sm:gap-3 lg:gap-5 rounded-xl border w-[320px] sm:w-[260px] lg:w-[320px] select-none cursor-pointer transition-all duration-200 mb-2.5 max-sm:shadow-lg
    ${
      planSeleccionado === "Plan Básico"
        ? "border-blue-700 scale-100 shadow-md dark:border-blue-200"
        : "border-neutral-100 scale-93 hover:scale-95"
    }
  `}
        onClick={() => handleSeleccionarPlan("Plan Básico")}
      >
        <div className="flex flex-col justify-end items-start gap-2 self-stretch">
          <div className="flex items-start gap-2 self-stretch">
            <div className="flex flex-col items-start flex-1 justify-center">
              <div className="flex gap-1">
                <input
                  type="radio"
                  name="plan"
                  checked={planSeleccionado === "Plan Básico"}
                  onChange={() => handleSeleccionarPlan("Plan Básico")}
                  className="cursor-pointer max-sm:hidden"
                />
                <h3 className="heading-4 text-start text-neutral-600 dark:text-neutral-300">
                  Plan Básico
                </h3>
              </div>
              <p className="p-small text-neutral-400 sm:text-xs lg:text-sm">
                Perfecto para empezar*
              </p>
            </div>
          </div>
          <div>
            <h3 className="heading-2">$698 mxn</h3>
          </div>
          <div className="flex p-2 sm:p-1 lg:p-2 flex-col items-start gap-2.5 sm:gap-1.5 lg:gap-2.5 self-stretch">
            {basic_plan.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 self-stretch"
              >
                <CircleCheck
                  className="text-green-600 dark:text-green-500 sm:w-4 sm:h-4 lg:w-5 lg:h-5"
                  width={20}
                  height={20}
                ></CircleCheck>
                <p className="text-neutral-400 dark:text-neutral-300 sm:text-xs lg:text-sm">
                  {item.feature}
                </p>
              </div>
            ))}

            <div className="w-full">
              <Button
                className={
                  planSeleccionado === "Plan Básico"
                    ? "bg-blue-700 hover:bg-blue-800 text-white sm:visible invisible w-full cursor-pointer dark:bg-indigo-600 dark:hover:bg-indigo-500"
                    : "bg-neutral-100 hover:bg-neutral-200 text-black sm:visible invisible w-full cursor-pointer dark:bg-neutral-100 dark:hover:bg-neutral-200 dark:text-black"
                }
              >
                <p className="p-small">Me interesa</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </CarouselItem>
    <CarouselItem className="pl-2 sm:pl-2 lg:pl-4 basis-auto flex justify-center ">
      <div
        className={`bg-card flex py-5 px-6 sm:py-4 sm:px-4 lg:py-5 lg:px-6 flex-col items-center gap-5 sm:gap-3 lg:gap-5 rounded-xl border w-[320px] sm:w-[260px] lg:w-[320px] select-none cursor-pointer transition-all duration-200 mb-2.5
    ${
      planSeleccionado === "Plan Plus"
        ? "sm:border-blue-700 shadow-lg dark:border-blue-200"
        : "border-neutral-100 hover:border-blue-300 scale-93 hover:scale-95"
    }
  `}
        onClick={() => handleSeleccionarPlan("Plan Plus")}
      >
        <div className="flex flex-col justify-end items-start gap-2 self-stretch">
          <div className="flex items-start gap-2 self-stretch">
            <div className="flex flex-col items-start flex-1 justify-center">
              <div className="flex gap-1">
                <input
                  type="radio"
                  name="plan"
                  checked={planSeleccionado === "Plan Plus"}
                  onChange={() => handleSeleccionarPlan("Plan Plus")}
                  className="cursor-pointer max-sm:hidden"
                />
                <h3 className="heading-4 text-start text-neutral-600 dark:text-neutral-300">
                  Plan Plus
                </h3>
              </div>
              <p className="p-small text-neutral-400 sm:text-xs lg:text-sm">
                Para quienes buscan crecimiento
              </p>
            </div>
            <div className="flex m-h-6 justify-center items-center gap-1.5 rounded-md">
              <Badge className="bg-green-600">Popular</Badge>
            </div>
          </div>
          <div>
            <h3 className="heading-2">$1,840 mxn</h3>
          </div>
          <div className="flex p-2 sm:p-1 lg:p-2 flex-col items-start gap-2.5 sm:gap-1.5 lg:gap-2.5 self-stretch">
            {plus_plan.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 self-stretch"
              >
                <CircleCheck
                  className="text-green-600 dark:text-green-500 sm:w-4 sm:h-4 lg:w-5 lg:h-5"
                  width={20}
                  height={20}
                ></CircleCheck>
                <p className="text-neutral-400 dark:text-neutral-300 sm:text-xs lg:text-sm">
                  {item.feature}
                </p>
              </div>
            ))}
            <div className="w-full">
              <Button
                className={
                  planSeleccionado === "Plan Plus"
                    ? "bg-blue-700 hover:bg-blue-800 text-white sm:visible invisible w-full cursor-pointer dark:bg-indigo-600 dark:hover:bg-indigo-500"
                    : "bg-neutral-100 hover:bg-neutral-200 text-black sm:visible invisible w-full cursor-pointer dark:bg-neutral-100 dark:hover:bg-neutral-200 dark:text-black"
                }
              >
                <p className="p-small">Me interesa</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </CarouselItem>
    <CarouselItem className="pl-2 sm:pl-2 lg:pl-4 basis-auto flex justify-center">
      <div
        className={`bg-card flex py-3 px-4 sm:py-3 sm:px-3 lg:py-3 lg:px-4 flex-col items-center gap-5 sm:gap-3 lg:gap-5 rounded-xl border w-[320px] sm:w-[260px] lg:w-[320px] select-none cursor-pointer transition-all duration-200 mb-2.5 max-sm:shadow-lg
    ${
      planSeleccionado === "Plan Ultimate"
        ? "border-blue-700 scale-100 shadow-md dark:border-blue-200"
        : "border-neutral-100 scale-94 hover:scale-99"
    }
  `}
        onClick={() => handleSeleccionarPlan("Plan Ultimate")}
      >
        <div className="flex flex-col justify-end items-start gap-2 self-stretch">
          <div className="flex items-start gap-2 self-stretch">
            <div className="flex flex-col items-start flex-1 justify-center">
              <div className="flex gap-1">
                <input
                  type="radio"
                  name="plan"
                  checked={planSeleccionado === "Plan Ultimate"}
                  onChange={() => handleSeleccionarPlan("Plan Ultimate")}
                  className="cursor-pointer max-sm:hidden"
                />
                <h3 className="heading-4 text-start text-neutral-600 dark:text-neutral-300">
                  Plan Ultimate
                </h3>
              </div>
              <p className="p-small text-neutral-400 sm:text-xs lg:text-sm">
                Perfecto para los más experimentados{" "}
              </p>
            </div>
          </div>
          <div>
            <h3 className="heading-2">$3,680 mxn</h3>
          </div>
          <div className="flex p-2 sm:p-1 lg:p-2 flex-col items-start gap-2.5 sm:gap-1.5 lg:gap-2.5 self-stretch">
            {ultimate_plan.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 self-stretch"
              >
                <CircleCheck
                  className="text-green-600 dark:text-green-500 sm:w-4 sm:h-4 lg:w-5 lg:h-5"
                  width={20}
                  height={20}
                ></CircleCheck>
                <p className="text-neutral-400 dark:text-neutral-300 sm:text-xs lg:text-sm">
                  {item.feature}
                </p>
              </div>
            ))}
            <div className="w-full">
              <Button
                className={
                  planSeleccionado === "Plan Ultimate"
                    ? "bg-blue-700 hover:bg-blue-800 text-white sm:visible invisible w-full cursor-pointer dark:bg-indigo-600 dark:hover:bg-indigo-500"
                    : "bg-neutral-100 hover:bg-neutral-200 text-black sm:visible invisible w-full cursor-pointer dark:bg-neutral-100 dark:hover:bg-neutral-200 dark:text-black"
                }
              >
                <p className="p-small">Me interesa</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </CarouselItem>
  </CarouselContent>
</Carousel>
  );
}