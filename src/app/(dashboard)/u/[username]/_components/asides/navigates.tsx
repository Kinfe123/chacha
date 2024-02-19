"use client"

import { usePathname } from "next/navigation"
import { useUser } from "@clerk/nextjs"
import {
  DollarSign,
  Fullscreen,
  KeyRound,
  MessageSquare,
  Settings,
  Users,
  MessageSquareIcon
} from "lucide-react"
import { type Message } from "@prisma/client"
import { NavItem, NavItemSkeleton } from "./items"

export const Navigation = ({ count }: { count: number }) => {
  const pathname = usePathname()
  const { user } = useUser()

  const routes = [
    {
      label: "Stream",
      href: `/u/${user?.username}`,
      icon: Fullscreen,


    },
    {
      label: "Keys",
      href: `/u/${user?.username}/keys`,
      icon: KeyRound,
    },
    {
      label: "Chat",
      href: `/u/${user?.username}/chat`,
      icon: MessageSquare,
    },
    {
      label: "Jemaw",
      href: `/u/${user?.username}/jemaw`,
      icon: Users,
    },
    {
      label: "Payments & Analytics",
      href: `/u/${user?.username}/payments`,
      icon: DollarSign,
    },
    {
      label: "1 time Messages",
      href: `/u/${user?.username}/messages`,
      icon: MessageSquareIcon,
      isNewMsg: count
    },
    {
      label: "Account Setting",
      href: `/u/${user?.username}/setting`,
      icon: Settings,
    },
  ]

  if (!user?.username) {
    return (
      <ul className="space-y-2">
        {[...Array(5)].map((_, i) => (
          <NavItemSkeleton key={i} />
        ))}
      </ul>
    )
  }

  return (
    <ul className="space-y-2 px-2 pt-4 lg:pt-0">
      {routes.map((route) => (
        <NavItem
          key={route.href}
          label={route.label}
          icon={route.icon}
          href={route.href}
          isNewMsg={count}
          isActive={pathname === route.href}
        />
      ))}
    </ul>
  )
}
