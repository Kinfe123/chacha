import { Poppins } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-3 gap-y-4 px-3 py-2 font-heading">
        <div className="rounded-full bg-white p-1">
          {/* <Image src="/spooky.svg" alt="Gamehub" height="40" width="40" /> */}
        </div>
        <div className={cn("flex items-center")}>
          <p className="text-3xl font-semibold">Cha-Cha</p>
        </div>
      </div>
    </Link>
  )
}
