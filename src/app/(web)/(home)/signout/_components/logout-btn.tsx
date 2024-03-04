"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { SignOutButton } from "@clerk/nextjs"

import { cn } from "@/lib/utils"
import { useMounted } from "@/hooks/use-mount"
import { Button, buttonVariants } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

import { Loader } from "lucide-react"

export function LogOutButtons() {
    const router = useRouter()
    const mounted = useMounted()
    const [isPending, startTransition] = React.useTransition()

    return (
        <div className="flex max-w-3xl mx-auto  items-center space-x-2">
            {mounted ? (
                <SignOutButton
                    signOutCallback={() =>
                        startTransition(() => {
                            router.push(`${window.location.origin}/?redirect=false`)
                        })
                    }
                >
                    <Button
                        aria-label="Log out"
                        size="sm"
                        className="w-full"
                        disabled={isPending}
                    >
                        {isPending && (
                            <Loader className="mr-2 size-4 animate-spin" />
                        )}
                        Log out
                    </Button>
                </SignOutButton>
            ) : (
                <Skeleton
                    className={cn(
                        buttonVariants({ size: "sm" }),
                        "w-full bg-muted text-muted-foreground"
                    )}
                >
                    Log out
                </Skeleton>
            )}
            <Button
                aria-label="Go back to the previous page"
                variant="ghost"
                size="sm"
                className="w-full"
                onClick={() => router.back()}
                disabled={isPending}
            >
                Go back
            </Button>
        </div>
    )
}