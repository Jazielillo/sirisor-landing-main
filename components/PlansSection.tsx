import { Badge } from "./ui/badge";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import PeekCarouselPlans from "./ui/PlansCarusel";

export const PlansSection = () => {
  return (
    <div className="flex flex-col items-center gap-5 self-stretch px-6 mb-10 overflow-hidden">
      <div className="flex flex-col justify-center items-center gap-2 self-stretch">
        <Badge variant="secondary" className="bg-neutral-100 dark:bg-neutral-600">
          Selecciona tu plan favorito
        </Badge>
        <h3 className="heading-2 self-stretch text-center">
          Planes adaptados a tu alcance
        </h3>
      </div>
      <Tabs defaultValue="monthly">
        <TabsList>
          <TabsTrigger value="monthly">Pago mensual</TabsTrigger>
          <TabsTrigger value="yearly">Pago anual</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="flex px-6 justify-center items-center gap-5 overflow-x-hidden">
        <PeekCarouselPlans></PeekCarouselPlans>
      </div>
    </div>
  );
};
