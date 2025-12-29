import { Accordion } from "@radix-ui/react-accordion";
import { Badge } from "./ui/badge";
import { AccordionI } from "./ui/accordion-base";
import { MessageCircleQuestion } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const Questions = () => {
  return (
    <div className="flex px-6 flex-col items-center gap-5 self-stretch sm:px-12 md:px-32 lg:px-48 xl:px-[256px]">
  <div className="flex flex-col justify-center items-center gap-2 self-stretch md:items-start">
    <Badge variant={'secondary'} className="bg-neutral-100 dark:bg-neutral-600">FAQs</Badge>
    <h3 className="heading-2">Resolvemos todas tus dudas</h3>
  </div>
  <div className="flex flex-col items-start gap-2 self-stretch md:mb-20">
    <Accordion type="multiple" className="md:w-full">
      <AccordionI
        icon={MessageCircleQuestion}
        item="item-1"
        title="¿Necesito conocimientos técnicos para usar Sirisor?"
        color="text-red-400"
        color_dark="dark:text-red-300"
        paragraph={[
          {
            text: "Para nada, la plataforma fue creada de una manera fácil e intuitiva y no requiere ninguna experiencia.",
            highlight: false,
          },
        ]}
      />
      <AccordionI
        icon={MessageCircleQuestion}
        item="item-2"
        title="¿En cuanto estará habilitada mi plataforma?"
        color="text-red-400"
        color_dark="dark:text-red-300"
        paragraph={[
          {
            text: "El acceso a la plataforma esta de manera inmediata posterior a tu pago.",
            highlight: false,
          },
        ]}
      />
      <AccordionI
        icon={MessageCircleQuestion}
        item="item-3"
        title="¿Puedo utilizar un dominio propio aunque mi plan no lo incluya?"
        color="text-red-400"
        color_dark="dark:text-red-300"
        paragraph={[
          {
            text: "Por supuesto, en caso de ya tener tu dominio, podemos incluirlo sin costo adicional.",
            highlight: false,
          },
        ]}
      />
      <AccordionI
        icon={MessageCircleQuestion}
        item="item-4"
        title="¿Hay costos adicionales?"
        color="text-red-400"
        color_dark="dark:text-red-300"
        paragraph={[
          {
            text: "No, el contenido de tu plan es lo que tendrás disponible de manera inmediata.",
            highlight: false,
          },
        ]}
      />
      <AccordionI
        icon={MessageCircleQuestion}
        item="item-5"
        title="¿Puedo agregar alguna característica adicional?"
        color="text-red-400"
        color_dark="dark:text-red-300"
        paragraph={[
          {
            text: "Por supuesto, puedes ponerte en contacto con nosotros para evaluar tus necesidades y el costo de dichas funcionalidades que no vienen incluídas en tu plan.",
            highlight: false,
          },
        ]}
      />
    </Accordion>
  </div>
  <div className="sm:flex sm:flex-col sm:gap-8 md:flex-row md:items-start md:gap-12 lg:gap-16 xl:gap-20 md:self-stretch">
    <div className="sm:flex-1">
      <p className="heading-4 max-sm:text-[16px] max-sm:font-normal mb-5">
        ¿Aún no solucionas tus dudas? Ponte en contacto con nosotros
        llenando el siguiente formulario:
      </p>
    </div>
    <section
      id="contacto"
      className="flex flex-col gap-5 sm:flex-1 md:items-center md:w-full"
    >
      <div className="grid w-full items-center gap-3">
        <Label htmlFor="name">Nombre *</Label>
        <Input type="text" id="name" placeholder="Ej: John Doe" />
      </div>
      <div className="grid w-full items-center gap-3">
        <Label htmlFor="email">Correo electrónico *</Label>
        <Input type="email" id="email" placeholder="Ej: john@example.com" />
      </div>
      <div className="grid w-full items-center gap-3">
        <Label htmlFor="phone">Teléfono *</Label>
        <Input type="text" id="phone" placeholder="Ej. +52 00 00 000 000" />
      </div>
      <div className="grid w-full items-center gap-3">
        <Label htmlFor="message">Mensaje *</Label>
        <Input
          type="text"
          id="message"
          placeholder="Escribe tu mensaje aquí"
        />
      </div>
      <div className="w-full">
        <Button className="w-full bg-neutral-100 cursor-pointer hover:bg-neutral-200" variant={"outline"}>
          Enviar mis datos
        </Button>
      </div>
    </section>
  </div>
</div>
  );
};
