import { Crown } from "lucide-react";
import { Badge } from "./badge";
import PeekCarousel from "./custom-carrousel";

export const GalleryMoreFeatures = ({ option }: { option: string }) => {
  return (
    <div
      className="flex flex-col items-start gap-5 w-full py-10 bg-neutral-100 dark:bg-neutral-900 px-6 md:px-[120px] md:items-center
    "
    >
      <Badge variant="secondary" className="bg-neutral-200 dark:bg-neutral-600">
        <Crown />
        Un poco de lo que verás como {option == 'admin' ? 'administrador' : 'jugador'}
      </Badge>
      <div className="flex items-start gap-5 self-stretch">
        <PeekCarousel></PeekCarousel>
      </div>
    </div>
  );
};
