import { LucideIcon } from "lucide-react";

interface CardFeatureProps {
  icon: LucideIcon;
  text: string;
}

export const CardFeature = ({ icon: Icon, text }: CardFeatureProps) => {
  return (
    <>
      <div className="flex flex-col py-2 px-3 items-start gap-2  self-stretch rounded-lg bg-card  dark:border shadow-md h-full w-full">
        <Icon width={24} height={24}></Icon>
        <p className="text-xs font-medium leading-[150%] tracking-[0.18px] text-neutral-600 dark:text-neutral-300">
          {text}
        </p>
      </div>
    </>
  );
};
