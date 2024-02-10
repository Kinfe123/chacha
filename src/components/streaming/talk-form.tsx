"use client"

import { useState } from "react"
import { SendHorizonal } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"

import PaymentModal from "./featured-modal/payment-modal"
import { ChatInfo } from "./talk-info"

interface ChatFormProps {
  onSubmit: () => void
  value: string
  onChange: (value: string) => void
  isHidden: boolean
  isFollowersOnly: boolean
  isFollowing: boolean
  isDelayed: boolean
  hostName: string
}

export const ChatForm = ({
  onSubmit,
  value,
  onChange,
  hostName,
  isHidden,
  isFollowersOnly,
  isFollowing,
  isDelayed,
}: ChatFormProps) => {
  const [isDelayBlocked, setIsDelayBlocked] = useState(false)

  const isFollowersOnlyAndNotFollowing = isFollowersOnly && !isFollowing
  // disabling the button if the user is blocked by delay or not following or is allowed only for followers or ishidden
  const isDisabled =
    isHidden || isDelayBlocked || isFollowersOnlyAndNotFollowing

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()

    // this conidtion all depends on the user setting like isDelayed or isfolloweronly and stuff

    if (!value || isDisabled) return

    if (isDelayed && !isDelayBlocked) {
      setIsDelayBlocked(true)
      setTimeout(() => {
        setIsDelayBlocked(false)
        onSubmit()
      }, 3000)
    } else {
      onSubmit()
    }
  }

  if (isHidden) {
    return null
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-y-4 p-3"
    >
      <div className="w-full">
        <ChatInfo isDelayed={isDelayed} isFollowersOnly={isFollowersOnly} />
        <Input
          onChange={(e) => onChange(e.target.value)}
          value={value}
          disabled={isDisabled}
          placeholder="Send a message"
          className={cn(
            "border-white/10",
            (isFollowersOnly || isDelayed) && "rounded-t-none border-t-0"
          )}
        />
      </div>
      <div className="ml-auto">
        <div className="flex items-center justify-center gap-x-2">
          <PaymentModal name={hostName} />
          <Button
            type="submit"
            variant="default"
            size="sm"
            disabled={isDisabled || value === ""}
          >
            <SendHorizonal className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </form>
  )
}

export const ChatFormSkeleton = () => {
  return (
    <div className="flex flex-col items-center gap-y-4 p-3">
      <Skeleton className="h-10 w-full" />
      <div className="ml-auto flex items-center gap-x-2">
        <Skeleton className="h-7 w-7" />
        <Skeleton className="h-7 w-12" />
      </div>
    </div>
  )
}
