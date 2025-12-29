"use client";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button";
import { useEffect, useRef, useState } from "react";

export const Navbar = () => {
  const [showTabs, setShowTabs] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY.current) {
        // Scrolling down → ocultar tabs
        setShowTabs(false);
      } else {
        // Scrolling up → mostrar tabs
        setShowTabs(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="px-20 pt-6 pb-4 flex justify-between items-center    transition-all duration-300">
      {/* Logo */}
      <div className="flex gap-2 items-center max-sm:hidden">
        <Image src="/images/logo2.svg" width={96} height={32} alt="Logo" />
        <p className="text-2xl">|</p>
        <h2 className="text-2xl font-outfit font-light">Sirisor</h2>
      </div>
      <div className="flex gap-[8px] md:hidden">
        <Image src="/images/logo.svg" alt="Logo" width={26} height={32} />
        <p className="text-[32px]">|</p>
        <h2 className="text-[32px] font-outfit">Sirisor</h2>
      </div>

      {/* ✅ Tabs con animación */}
      <div
        className={`transition-all duration-300 ${
          showTabs
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <Tabs defaultValue="inicio">
          <TabsList>
            <TabsList>
              <TabsTrigger value="inicio">
                <div>
                  <a href="#inicio">Inicio</a>
                </div>
              </TabsTrigger>
              <TabsTrigger value="afiliados">
                <div>
                  <a href="#afiliados">Afiliados</a>
                </div>
              </TabsTrigger>
              <TabsTrigger value="caracteristicas">
                <div>
                  <a href="#caracteristicas">Características</a>
                </div>
              </TabsTrigger>
              <TabsTrigger value="planes">
                <div>
                  <a href="#planes">Planes</a>
                </div>
              </TabsTrigger>
              <TabsTrigger value="faqs">
                <div>
                  <a href="#faqs">FAQs</a>
                </div>
              </TabsTrigger>
              <TabsTrigger value="contacto">
                <div>
                  <a href="#contacto">Contacto</a>
                </div>
              </TabsTrigger>
            </TabsList>
          </TabsList>
        </Tabs>
      </div>

      {/* Botón */}
      <div>
        <Button
          className="bg-blue-700 hover:bg-blue-800"
          onClick={() =>
            document
              .getElementById("planes")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Elegir mi plan
        </Button>
      </div>
    </div>
  );
  // return (
  //   <div className="px-20 pt-20 flex justify-between items-center">
  //     <div className="flex gap-[8px] justify-center items-center">
  //       <Image
  //         src={"/images/logo2.svg"}
  //         width={96}
  //         height={32}
  //         alt="Logo"
  //       ></Image>
  //       <p className="text-[32px]">|</p>
  //       <h2 className="text-[32px] font-outfit font-light leading-[100%]">
  //         Sirisor
  //       </h2>
  //     </div>
  //     <div>
  //       <Tabs defaultValue="inicio">
  //         <TabsList>
  //           <TabsTrigger value="inicio">
  //             <div>
  //               <a href="#inicio">Inicio</a>
  //             </div>
  //           </TabsTrigger>
  //           <TabsTrigger value="afiliados">
  //             <div>
  //               <a href="#afiliados">Afiliados</a>
  //             </div>
  //           </TabsTrigger>
  //           <TabsTrigger value="caracteristicas">
  //             <div>
  //               <a href="#caracteristicas">Características</a>
  //             </div>
  //           </TabsTrigger>
  //           <TabsTrigger value="planes">
  //             <div>
  //               <a href="#planes">Planes</a>
  //             </div>
  //           </TabsTrigger>
  //           <TabsTrigger value="faqs">
  //             <div>
  //               <a href="#faqs">FAQs</a>
  //             </div>
  //           </TabsTrigger>
  //           <TabsTrigger value="contacto">
  //             <div>
  //               <a href="#contacto">Contacto</a>
  //             </div>
  //           </TabsTrigger>
  //         </TabsList>
  //       </Tabs>
  //     </div>
  //     <div>
  //       <Button
  //         className="bg-blue-700 cursor-pointer hover:bg-blue-800"
  //         onClick={() =>
  //           document
  //             .getElementById("planes")
  //             ?.scrollIntoView({ behavior: "smooth" })
  //         }
  //       >
  //         Elegir mi plan
  //       </Button>
  //     </div>
  //   </div>
  // );
};
