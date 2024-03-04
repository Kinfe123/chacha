import Link from "next/link";
import { Clapperboard } from "lucide-react";
import {
  SignInButton,

  currentUser
} from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import UserNav from "@/components/user-nav";

export const Actions = async () => {
  const user = await currentUser();


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
          <UserNav />

        </div>
      )}
    </div>
  );
};