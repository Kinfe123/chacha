"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useCreatorSidebar } from "@/store/use-creator-sidebar";
import { Hint } from "@/components/hint";

interface NavItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
  isActive: boolean;
  isNewMsg?: number
};

export const NavItem = ({
  icon: Icon,
  label,
  href,
  isActive,
  isNewMsg,
}: NavItemProps) => {
  const { collapsed } = useCreatorSidebar((state) => state);

  return (
    <Button
      asChild
      variant="ghost"
      className={cn(
        "w-full h-12",
        collapsed ? "justify-center" : "justify-start",
        isActive && "bg-accent",
      )}
    >
      <Link href={href}>
        <div className="flex items-center gap-x-4">
          {!collapsed && (<Icon className={cn(
            "h-4 w-4",
            collapsed ? "mr-0" : "mr-2"
          )} />)}
          {collapsed && (


            <Hint asChild label={label}>

              <Icon className={cn(
                "h-4 w-4",
                collapsed ? "mr-0" : "mr-2"
              )} />

            </Hint>

          )}

          {!collapsed && (
            <div className='flex justify-between items-center'>
              {label === '1 time Messages' ? <p className="font-bold">{label}</p> : <p>{label}</p>}
              {label === '1 time Messages' ? <p className="font-bold absolute right-5">{isNewMsg}</p> : ''}
            </div>
          )}
        </div>
      </Link>
    </Button>
  );
};

export const NavItemSkeleton = () => {
  return (
    <li className="flex items-center gap-x-4 px-3 py-2">
      <Skeleton className="min-h-[48px] min-w-[48px] rounded-md" />
      <div className="flex-1 hidden lg:block">
        <Skeleton className="h-6" />
      </div>
    </li>
  );
};