import { LucideIcon } from "lucide-react";

interface ToJoinCardProps {
  title: string;
  icon: LucideIcon;
  isSelected?: boolean;
}

export const ToJoinCard = ({
  title,
  icon: Icon,
}: ToJoinCardProps) => {
  return (
    <div
      className={`bg-card dark:border  flex items-center py-2 px-3 gap-2 self-stretch rounded-[8px] shadow-md flex-1 hover:bg-blue-200 dark:hover:bg-blue-800 cursor-pointer hover:text-blue-600`}
    >
      <div className="flex p-2 gap-2.5 items-center">
        <div className="flex p-2 gap-2.5 items-center rounded-sm bg-blue-50">
          <Icon width={24} height={24} className="text-blue-600"></Icon>
        </div>
        <p className="p-regular text-gray-600 dark:text-white">{title}</p>
      </div>
    </div>
  );
};
