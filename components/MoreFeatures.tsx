"use client";
import { useState } from "react";
import {
  CalendarClock,
  ChartNoAxesCombined,
  GlobeLock,
  LucideIcon,
  MonitorSmartphone,
  Rocket,
  Settings2,
  ShieldCheck,
  ShieldUser,
  Ticket,
  User,
} from "lucide-react";
import Image from "next/image";
import { Accordion } from "./ui/accordion";
import { AccordionI } from "./ui/accordion-base";
import { Button } from "./ui/button";
import { GalleryMoreFeatures } from "./ui/GalleryMoreFeatures";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { motion, AnimatePresence } from "framer-motion";

type paragraphObj = {
  text: string;
  highlight: boolean;
};

type features = {
  item: string;
  title: string;
  icon: LucideIcon;
  color: string;
  paragraph: paragraphObj[];
  color_dark?: string;
};

export const MoreFeatures = () => {
  const [active, setActive] = useState<string>("admin"); // estado del item activo

  const featuresAdmin: features[] = [
    {
      item: "item-1",
      title: "Crea y lanza al instante",
      icon: Rocket,
      color: "text-blue-500",
      color_dark: "dark:text-blue-400",
      paragraph: [
        {
          text: "Configura y publica tus rifas en ",
          highlight: false,
        },
        { text: "cuestión de minutos", highlight: true },
        {
          text: "con un sistema intuitivo que te guía paso a paso.",
          highlight: false,
        },
      ],
    },
    {
      item: "item-2",
      title: "Mide tu éxito",
      icon: ChartNoAxesCombined,
      color: "text-blue-500",
      color_dark: "dark:text-blue-400",
      paragraph: [
        {
          text: "Consulta reportes ",
          highlight: false,
        },
        { text: "diarios, semanales, mensuales y anuales", highlight: true },
        {
          text: "para conocer el desempeño de tus rifas en",
          highlight: false,
        },
        { text: "tiempo real.", highlight: true },
      ],
    },
    {
      item: "item-3",
      title: "Control y seguridad total",
      icon: GlobeLock,
      color: "text-blue-500",
      color_dark: "dark:text-blue-400",
      paragraph: [
        {
          text: "Administra boletos, participantes y premios desde la ",
          highlight: false,
        },
        {
          text: "plataforma de manera sencilla y segura.",
          highlight: true,
        },
      ],
    },
    {
      item: "item-4",
      title: "Pagos directos y seguros",
      icon: ShieldCheck,
      color: "text-blue-500",
      color_dark: "dark:text-blue-400",
      paragraph: [
        {
          text: "Recibe el dinero de tus rifas ",
          highlight: false,
        },
        {
          text: "directo a tus cuentas",
          highlight: true,
        },
      ],
    },
    {
      item: "item-5",
      title: "Tu rifa, tu estilo",
      icon: Ticket,
      color: "text-blue-500",
      color_dark: "dark:text-blue-400",
      paragraph: [
        {
          text: "Personaliza el diseño de tus rifas para que se adapten a tu marca.",
          highlight: false,
        },
        {
          text: "Elige entre múltiples plantillas y opciones de personalización.",
          highlight: true,
        },
      ],
    },
  ];

  const featuresPlayer: features[] = [
    {
      item: "item-1",
      title: "Disponible 24/7",
      icon: CalendarClock,
      color: "text-green-600",
      color_dark: "dark:text-green-500",
      paragraph: [
        {
          text: "Permite que tus participantes compren boletos  ",
          highlight: false,
        },
        { text: "en segundos", highlight: true },
        {
          text: "sin complicaciones.",
          highlight: false,
        },
      ],
    },
    {
      item: "item-2",
      title: "Números a su elección o a su suerte",
      icon: Ticket,
      color: "text-green-600",
      color_dark: "dark:text-green-500",
      paragraph: [
        {
          text: "Tendrán la opción de elegir sus números de boleto favoritos o podrás ofrecerles un servicio de ",
          highlight: false,
        },
        {
          text: "números de la suerte",
          highlight: true,
        },
        {
          text: " en donde tu plataforma de manera aleatoria les proporcionará sus boletos.",
          highlight: false,
        },
      ],
    },
    {
      item: "item-3",
      title: "Control y seguridad total",
      icon: ShieldUser,
      color: "text-green-600",
      color_dark: "dark:text-green-500",
      paragraph: [
        {
          text: "Tus usuarios tendrán ",
          highlight: false,
        },
        {
          text: "acceso independiente",
          highlight: true,
        },
        {
          text: "a su cuenta desde google o su usuario y contraseña donde podrán consultar sus boletos, compras y más.",
          highlight: false,
        },
      ],
    },
    {
      item: "item-4",
      title: "Boletos verificados",
      icon: ShieldCheck,
      color: "text-green-600",
      color_dark: "dark:text-green-500",
      paragraph: [
        {
          text: "Podrán  ",
          highlight: false,
        },
        {
          text: "verificar sus boletos",
          highlight: true,
        },
        {
          text: "desde su misma plataforma o desde la de tu sorteo.",
          highlight: false,
        },
      ],
    },
    {
      item: "item-5",
      title: "Acceso multiplataforma",
      icon: MonitorSmartphone,
      color: "text-green-600",
      color_dark: "dark:text-green-500",
      paragraph: [
        {
          text: "Tus rifas estarán disponibles en ",
          highlight: false,
        },
        {
          text: "computadoras, tablets y celulares",
          highlight: true,
        },
        {
          text: ", para que nadie quede fuera.",
          highlight: false,
        },
      ],
    },
  ];

  const fadeInVariants = {
    initial: { opacity: 0 }, // Comienza invisible
    animate: { opacity: 1 }, // Se anima a ser totalmente visible
    exit: { opacity: 0 }, // Se anima a ser invisible al salir
  };

  return (
    <>
      <div
        className="
    flex flex-col px-6 gap-5 self-stretch items-center mb-20 
    max-sm:mb-5
    sm:px-8 sm:gap-6
    md:px-12 md:gap-8
    lg:px-16 lg:items-start lg:flex-row lg:mx-16 lg:gap-12
    xl:px-20 xl:mx-[120px] xl:gap-20
  "
      >
        <div
          className="
      flex flex-col items-center
      md:gap-5
      lg:flex lg:flex-col lg:items-center lg:flex-1
    "
        >
          <Tabs defaultValue="admin" className="mb-5">
            <TabsList>
              <TabsTrigger
                value="admin"
                onClick={() => setActive("admin")}
                className="cursor-pointer"
              >
                <div className="flex py-1 px-2 justify-center items-center gap-1.5">
                  <Settings2 width={20} height={20}></Settings2>
                  <p>Administrador</p>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="player"
                onClick={() => setActive("player")}
                className="cursor-pointer"
              >
                <div className="flex py-1 px-2 justify-center items-center gap-1.5">
                  <User width={20} height={20}></User>
                  <p>Jugador</p>
                </div>
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex flex-col justify-center items-end relative pb-12">
            {/* Laptop */}
            <div
              className="
          relative aspect-[516/330.57] w-[300px]
          sm:w-[400px]
          md:w-[480px]
          lg:w-[420px]
          xl:w-[516px]
        "
            >
              <Image
                src="/images/laptop.png"
                alt="Laptop"
                fill
                className="object-contain"
                quality={100}
              />
            </div>

            {/* Mobile */}
            <div
              className="
          absolute aspect-[31/64] w-[70px] max-sm:top-25 top-48
          sm:w-[80px]
          md:w-[88px]
          lg:w-[76px]
          xl:w-[93px]
        "
            >
              <Image
                src="/images/mobile.png"
                alt="Mobils"
                fill
                className="object-contain"
                quality={100}
              />
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={fadeInVariants}
            transition={{ duration: 0.2 }}
            className="
          w-full
          md:flex md:flex-col md:justify-center md:items-end md:gap-5
          lg:pt-[54px] lg:flex-1 lg:max-w-[500px]
          xl:max-w-none
        "
          >
            {active === "admin" ? (
              <>
                <Accordion type="multiple" className="w-full">
                  {featuresAdmin.map((feature) => (
                    <AccordionI
                      key={feature.item}
                      icon={feature.icon}
                      item={feature.item}
                      title={feature.title}
                      color={feature.color}
                      color_dark={feature.color_dark}
                      paragraph={feature.paragraph}
                    />
                  ))}
                </Accordion>
                <div className="max-sm:w-full my-5 cursor-pointer">
                  <Button
                    variant={"outline"}
                    className="w-full"
                    onClick={() =>
                      document
                        .getElementById("to-join")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Quiero iniciar ahora
                  </Button>
                </div>
              </>
            ) : (
              <>
                <Accordion type="multiple" className="w-full">
                  {featuresPlayer.map((feature) => (
                    <AccordionI
                      key={feature.item}
                      icon={feature.icon}
                      item={feature.item}
                      title={feature.title}
                      color={feature.color}
                      color_dark={feature.color_dark}
                      paragraph={feature.paragraph}
                    />
                  ))}
                </Accordion>
                <div className="max-sm:w-full mb-5 cursor-pointer">
                  <Button variant={"outline"} className="w-full">
                    Quiero iniciar ahora
                  </Button>
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      <GalleryMoreFeatures option={active}></GalleryMoreFeatures>
    </>
  );
};
