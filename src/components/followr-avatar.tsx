"use client"

import { useTransition } from "react"
import { useRouter } from "next/navigation"
import { onFollow, onUnfollow } from "@/actions/follow"
import { useAuth } from "@clerk/nextjs"
import { toast } from "sonner"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"

interface FollowerListProos {
  imgUrl: string
  username: string
  followId: string
  isFollowing: boolean
}

export function FollowrAvatar({
  username,
  imgUrl,
  followId,
  isFollowing,
}: FollowerListProos) {
  const [isPending, startTransition] = useTransition()
  const { userId } = useAuth()
  const router = useRouter()
  const handleFollow = () => {
    startTransition(() => {
      onFollow(followId)
        .then((data) =>
          toast.success(`You are now following ${data.following.username}`)
        )
        .catch(() => toast.error("Something went wrong"))
    })
  }

  const handleUnfollow = () => {
    startTransition(() => {
      onUnfollow(followId)
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

    if (isFollowing) {
      handleUnfollow()
    } else {
      handleFollow()
    }
  }

  return (
    <Card className="flex w-fit items-center justify-between bg-transparent">
      <CardHeader className="grid gap-1 p-4">
        <div className="flex items-center">
          <Avatar className="aspect-square h-10 w-10">
            <AvatarImage alt="@shadcn" src={imgUrl} />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
          <div className="ml-4 flex flex-col md:flex-col">
            <CardTitle className="text-base">@{username}</CardTitle>
            <Button className="mt-2 md:mt-0" size="sm"  onClick={toggleFollow}>
              {isFollowing ? 'UnFollow' : "Follow"}
            </Button>
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}
