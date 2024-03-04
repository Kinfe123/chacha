"use client"

import { useEffect, useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { onFollow, onMeFollow, onUnfollow } from "@/actions/follow"
import { useAuth } from "@clerk/nextjs"
import { Loader } from "lucide-react"
import { toast } from "sonner"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { onMeUnfollow } from "@/lib/follow-user"

interface FollowerListProos {
  imgUrl: string
  username: string
  followId: string
  isFollowing?: boolean
  disabled: boolean
}

export function FollowrAvatar({
  username,
  imgUrl,
  followId,
  isFollowing,
  disabled
}: FollowerListProos) {
  const [isPending, startTransition] = useTransition()

  const { userId } = useAuth()
  const router = useRouter()
  const [isFollow, setIsFollow] = useState<boolean>(false)
  const handleFollow = () => {
    startTransition(() => {
      onMeFollow(followId)
        .then((data) =>
          toast.success(`You are now following ${data.follower.username}`)
        )
        .catch((err) => console.log("ERROR: ", err))
    })
  }

  const handleUnfollow = () => {
    startTransition(() => {
      onMeUnfollow(followId)
        .then((data) =>
          toast.success(`You have unfollowed ${data.follower.username}`)
        )
        .catch(() => toast.error("Something went wrong"))
    })
  }
  const toggleFollow = () => {
    if (!userId) {
      return router.push("/sign-in")
    }

    if (isFollow) {
      handleUnfollow()
    } else {
      handleFollow()
    }
  }

  // const handleUpdates = async () => {
  //   const res = await getUserByUsername(username)
  //   const isFollowing = await isFollowingUser(res?.id)
  //   setIsFollow(isFollowing)
  // }
  // useEffect(() => {
  //   handleUpdates()
  // }, [isPending])
  // useEffect(() => {
  //   handleUpdates()
  // }, [])
  return (
    <Card className="flex w-fit items-center justify-between bg-transparent">
      <CardHeader className="grid gap-1 p-4">
        <div className="flex items-center">
          <Avatar className="">
            <AvatarImage className="object-cover" alt={username} src={imgUrl} />
            <AvatarFallback>
              {username[0] + username[username.length - 1]}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 flex flex-col md:flex-col">
            <CardTitle className="text-base">@{username}</CardTitle>
            <Button disabled={disabled} className="mt-2 md:mt-0" size="sm" onClick={toggleFollow}>
              {isPending && <Loader className="mr-2 h-3  w-3 animate-spin" />}
              {isFollowing ? "UnFollow" : "Follow"}
            </Button>
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}
