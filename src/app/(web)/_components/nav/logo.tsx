import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";


export const Logo = () => {
  return (
    <div className="flex px-3 py-2 gap-3 items-center font-heading gap-y-4">
      <div className="bg-white rounded-full p-1">
        <Image
          src="/spooky.svg"
          alt="Gamehub"
          height="40"
          width="40"
        />
      </div>
      <div className={cn(
        "flex items-center",
      
      )}>
        <p className="text-3xl font-semibold">
          Cha-Cha
        </p>
        
      </div>
    </div>
  );
};