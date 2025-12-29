import { Menu } from "lucide-react";
import Image from "next/image";

export const NavbarMovil = () => {
  return (
    <div className="w-full flex px-8 pt-16 justify-between">
      <div className="flex gap-[8px]">
        <Image src="/images/logo.svg" alt="Logo" width={26} height={32} />
        <p className="text-[32px]">|</p>
        <h2 className="text-[32px] font-outfit">Sirisor</h2>
      </div>
      <div className="flex justify-center items-center">
        <Menu className="text-[32px]"></Menu>
      </div>
    </div>
  );
};
