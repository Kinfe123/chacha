import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

export const Logo = () => {
  return (
    <Link href="/streams">
      <div className="flex items-center gap-x-4 hover:opacity-75 transition">
        <div className="bg-white rounded-full p-1 mr-12 shrink-0 lg:mr-0 lg:shrink">
          {/* <Image
            src="/spooky.svg"
            alt="Gamehub"
            height="32"
            width="32"
          /> */}
        </div>
        <div className={cn(
          "hidden lg:block",

        )}>
          <p className="text-lg font-semibold">
            ChaCha
          </p>
          <p className="text-xs text-muted-foreground">
            Cook Something
          </p>
        </div>
      </div>
    </Link>
  );
};