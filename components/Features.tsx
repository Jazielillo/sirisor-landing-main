import {
  BanknoteX,
  ChartNoAxesCombined,
  ClockFading,
  MonitorSmartphone,
} from "lucide-react";
import { Badge } from "./ui/badge";
import { CardFeature } from "./ui/card-feature";

export const Features = () => {
  return (
    <div className="
      my-10
      sm:my-12 sm:mx-6
      md:my-16 md:mx-12
      lg:my-20 lg:mx-[120px]
    " id="afiliados">
      <div className="
        flex flex-col px-6 gap-6 self-stretch justify-center items-start
        sm:px-8 sm:gap-7
        md:px-12 md:gap-8
        lg:px-20 lg:justify-between lg:items-center lg:flex-row lg:gap-12
      ">
        {/* Header Section */}
        <div className="
          flex flex-col justify-center items-center gap-2 self-stretch
          sm:gap-3 sm:items-center
          md:items-center md:gap-4
          lg:items-start lg:self-auto
        ">
          <Badge variant="secondary">¿Por qué deberías elegir Sirisor?</Badge>
          <h3 className="
            text-3xl font-semibold leading-[100%] tracking-[-0.3px] text-center
            sm:text-4xl
            md:text-[40px]
            lg:text-[42px] lg:text-left
          ">
            Gestiona, Sortea y Gana
          </h3>
        </div>
        
        {/* Features Grid */}
        <div className="
          w-full flex flex-col gap-4
          sm:gap-5 sm:max-w-2xl sm:mx-auto
          md:gap-5 md:max-w-3xl
          lg:w-auto lg:max-w-none lg:mx-0 lg:gap-5
        ">
          <div className="
            flex items-center gap-4 self-stretch h-[84px]
            sm:gap-5
            md:gap-5
          ">
            <CardFeature
              text="Servicio disponible 24/7"
              icon={ClockFading}
            />
            <CardFeature
              text="Pensado en la mejor experiencia de usabilidad"
              icon={MonitorSmartphone}
            />
          </div>
          
          <div className="
            flex items-center gap-4 self-stretch  h-[84px]
            sm:gap-5
            md:gap-5
          ">
            <CardFeature
              text="Actualización de estadísticas en tiempo real"
              icon={ChartNoAxesCombined}
            />
            <CardFeature
              text="Sin comisiones ocultas"
              icon={BanknoteX}
            />
          </div>
        </div>
      </div>
    </div>

  );
};
