import { ListChecks, Sparkles, TicketCheck } from "lucide-react";
import { ToJoinCard } from "./ui/ToJoinCard";
import { Badge } from "./ui/badge";

export const ToJoin = () => {
  return (
    <div className="flex flex-col items-start my-10 xl:px-[120px] lg:px-16 md:px-12 sm:px-8">
      <div className="flex max-sm:px-6 flex-col items-center gap-5 self-stretch">
        <div className="flex flex-col justify-center items-center gap-2 self-stretch">
          <Badge variant="secondary" className="bg-neutral-100 dark:bg-neutral-600">
            Pasos para iniciar
          </Badge>
          <h2 className="heading-2">
            Únete en unos <span className="text-[#5EBD00] dark:text-[#5EBD00]">minutos</span>
          </h2>
        </div>
        <div className="flex flex-col items-start gap-4 self-stretch md:flex-row md:items-stretch">
          <ToJoinCard
            icon={TicketCheck}
            title="1. Elige tu plan favorito."
          ></ToJoinCard>
          <ToJoinCard
            icon={ListChecks}
            title="2. Completa el registro."
          ></ToJoinCard>
          <ToJoinCard
            icon={Sparkles}
            title="3. Finaliza tu compra y ¡puedes iniciar tu primer sorteo!"
          ></ToJoinCard>
        </div>
      </div>
    </div>
  );
};
