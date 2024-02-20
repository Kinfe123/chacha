import Link from "next/link";
import { HomeIcon } from "lucide-react";
import { UserButton, currentUser } from "@clerk/nextjs";
import {  LogOut, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

import UserNav from "@/components/user-nav";

export const Actions = async () => {
  const user = await currentUser()
  const initials = `${user?.firstName?.charAt(0) ?? ""} ${user?.lastName?.charAt(0) ?? ""
    }`
  return (
    <div className="flex items-center justify-end gap-x-3">
      <Button
        size="sm"
        variant="ghost"
        className="text-muted-foreground hover:text-primary"
        asChild
      >
        <Link href="/">
          <HomeIcon className="h-4 w-4 mr-2" />
          Homie
        </Link>
      </Button>
      {/* <UserButton
        afterSignOutUrl="/"
      /> */}
      {user && (<UserNav />)}
    </div>
  );
};