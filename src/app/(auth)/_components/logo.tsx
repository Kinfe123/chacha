import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <div className="flex flex-col items-center font-heading gap-y-4">
      <div className="bg-white rounded-full p-1">
        <Image
          src="/spooky.svg"
          alt="Gamehub"
          height="80"
          width="80"
        />
      </div>
      <div className={cn(
        "flex flex-col items-center",
      
      )}>
        <p className="text-4xl font-semibold">
          Cha-Cha
        </p>
        <p className="text-md text-muted-foreground">
          Let&apos;s Gather - Ethiopia&apos;s first streaming services.
        </p>
      </div>
    </div>
  );
};