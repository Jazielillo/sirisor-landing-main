import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LucideIcon } from "lucide-react";

interface AccordionBaseProps {
  icon: LucideIcon;
  color: string;
  title: string;
  paragraph: TextPart[];
  item: string;
  color_dark?: string;
}

interface TextPart {
  text: string;
  highlight?: boolean;
}

export function AccordionI({
  icon: Icon,
  title,
  color,
  paragraph,
  item,
  color_dark
}: AccordionBaseProps) {
  return (
      <AccordionItem value={`${item}`} className="">
        <AccordionTrigger className="flex py-[15.5px] items-center gap-2 self-stretch hover:no-underline cursor-pointer">
          <div className="flex items-center gap-2">
            <Icon className={`${color}`} width={20} height={20} />
            <p>{title}</p>
          </div>
        </AccordionTrigger>
        <AccordionContent className="">
          {/* Párrafo con texto y palabras azules */}
          <p className="text-sm leading-relaxed text-muted-foreground dark:text-neutral-300">
            {paragraph.map((part, index) =>
              part.highlight ? (
                <span key={index} className={`${color} ${color_dark} font-medium`}>
                  {" "}
                  {part.text}{" "}
                </span>
              ) : (
                <span key={index}> {part.text} </span>
              )
            )}
          </p>
        </AccordionContent>
      </AccordionItem>
  );
}
