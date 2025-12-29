"use client";

import { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function NavbarTabs() {
  const [activeTab, setActiveTab] = useState("inicio");

  useEffect(() => {
  const sections = [
    "inicio",
    "afiliados",
    "caracteristicas",
    "planes",
    "faqs",
    "contacto",
  ];

  const handleScroll = () => {
    const middle = window.innerHeight / 2;

    let closestSection = activeTab;
    let smallestDistance = Infinity;

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const sectionMiddle = rect.top + rect.height / 2;

      const distance = Math.abs(sectionMiddle - middle);
      if (distance < smallestDistance) {
        smallestDistance = distance;
        closestSection = id;
      }
    });

    if (closestSection !== activeTab) {
      setActiveTab(closestSection);
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, [activeTab]);

  // Para que al tocar un tab haga scroll suave
  const handleTabChange = (value: string) => {
    const section = document.getElementById(value);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setActiveTab(value);
  };

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange}>
      <TabsList>
        <TabsTrigger value="inicio" className="cursor-pointer">Inicio</TabsTrigger>
        <TabsTrigger value="afiliados" className="cursor-pointer">Afiliados</TabsTrigger>
        <TabsTrigger value="caracteristicas" className="cursor-pointer">Características</TabsTrigger>
        <TabsTrigger value="planes" className="cursor-pointer">Planes</TabsTrigger>
        <TabsTrigger value="faqs" className="cursor-pointer">FAQs</TabsTrigger>
        <TabsTrigger value="contacto" className="cursor-pointer">Contacto</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
