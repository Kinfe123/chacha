import "@/styles/globals.css"
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { fontSans , fontHeading , fontUrban, fontSubheading } from "../../assets/fonts"
import type { Metadata, Viewport } from "next"
import {Toaster} from 'sonner'
import { Inter } from "next/font/google"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url.base),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url.author,
    },
  ],
  creator: siteConfig.author,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url.base,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@_rdev7",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (

    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-transparent font-subheading antialiased",
            inter.className,
            fontSans.variable,
            fontHeading.variable,
            fontUrban.variable,
            fontSubheading.variable
          )}
        >
        <div className="hidden dark:block">
          <div className="absolute  bottom-0 top-0 z-[-2] h-screen overflow-hidden    w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,100,210,0.3),rgba(255,255,255,0))]">

          </div>
        </div>
        <div className="block dark:hidden">
        <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>

        </div>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster theme="system" position="bottom-right"/>
            {children}

          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
