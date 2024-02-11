"use client"

import { useTransition } from "react"
import { useRouter } from "next/navigation"
import { onFollow, onUnfollow } from "@/actions/follow"
import { useAuth } from "@clerk/nextjs"
import { Heart, Loader } from "lucide-react"
import { toast } from "sonner"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

interface ActionsProps {
  hostIdentity: string
  isFollowing: boolean
  isHost: boolean
}

export const Actions = ({
  hostIdentity,
  isFollowing,
  isHost,
}: ActionsProps) => {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const { userId } = useAuth()

  const handleFollow = () => {
    startTransition(() => {
      onFollow(hostIdentity)
        .then((data) =>
          toast.success(`You are now following ${data.following.username}`)
        )
        .catch(() => toast.error("Something went wrong"))
    })
  }

  const handleUnfollow = () => {
    startTransition(() => {
      onUnfollow(hostIdentity)
        .then((data) =>
          toast.success(`You have unfollowed ${data.following.username}`)
        )
        .catch(() => toast.error("Something went wrong"))
    })
  }

  const toggleFollow = () => {
    if (!userId) {
      return router.push("/sign-in")
    }

    if (isHost) return

    if (isFollowing) {
      handleUnfollow()
    } else {
      handleFollow()
    }
  }

  return (
    <div className="flex">
      {!isHost && (
        <Button
          disabled={isPending}
          onClick={toggleFollow}
          variant="default"
          size="sm"
          className="w-full lg:w-auto"
        >
          {isPending && <Loader className="mr-2 h-3  w-3 animate-spin" />}
          {!isPending && (
            <Heart
              className={cn(
                "mr-2 h-4 w-4",
                isFollowing ? "fill-white" : "fill-none"
              )}
            />
          )}
          {isFollowing ? "Unfollow" : "Follow"}
        </Button>
      )}

    </div>
  )
}

export const ActionsSkeleton = () => {
  return <Skeleton className="h-10 w-full lg:w-24" />
}
