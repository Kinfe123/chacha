import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "ChaCha",
  author: "Kinfish",
  description: "Streaming service based on Ethiopia",
  keywords: ["Next.js", "React", "Tailwind CSS", "Radix UI", "shadcn/ui"],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "https://kinfish-dumpy.vercel.app",
  },
  links: {
    github: "https://github.com/Kinfe123/chacha",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
}
