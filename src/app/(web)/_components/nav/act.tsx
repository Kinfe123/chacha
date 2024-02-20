import Link from "next/link";
import { Clapperboard, CreditCard, LayoutDashboard, LogOut, Settings } from "lucide-react";
import {
  SignInButton,
  UserButton,
  currentUser
} from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger, DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut } from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Actions = async () => {
  const user = await currentUser();
  const initials = `${user?.firstName?.charAt(0) ?? ""} ${user?.lastName?.charAt(0) ?? ""
    }`

  return (
    <div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-0">
      {!user && (
        <SignInButton>
          <Button size="sm" variant="default">
            Login
          </Button>
        </SignInButton>
      )}
      {!!user && (
        <div className="flex items-center gap-x-4">
          {/* <ModeToggle /> */}
          <Button
            size="sm"
            variant="ghost"
            className="text-muted-foreground hover:text-primary"
            asChild
          >
            <Link href={`/u/${user.username}`}>
              <Clapperboard className="h-5 w-5 lg:mr-2" />
              <span className="hidden lg:block">
                Cook something
              </span>
            </Link>
          </Button>
          {user && (<DropdownMenu >
            <DropdownMenuTrigger asChild>
              <Button
                variant="secondary"
                className="relative size-8 rounded-full"
              >
                <Avatar className="size-8">
                  <AvatarImage
                    src={user.imageUrl}
                    alt={user.username ?? ""}
                  />
                  <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-transparent/80 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,100,210,0.3),rgba(255,255,255,0))]" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {user.firstName} {user.lastName}
                  </p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {user.emailAddresses[0].emailAddress}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link href={`/u/${user.username}`}>
                    <LayoutDashboard
                      className="mr-2 size-4"
                      aria-hidden="true"
                    />
                    Dashboard
                    <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={`/u/${user.username}/payments`}>
                    <CreditCard
                      className="mr-2 size-4"
                      aria-hidden="true"
                    />
                    Payments
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={`/u/${user.username}/setting`}>
                    <Settings className="mr-2 size-4" aria-hidden="true" />
                    Settings
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/signout">
                  <LogOut className="mr-2 size-4" aria-hidden="true" />
                  Log out
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>)}

        </div>
      )}
    </div>
  );
};