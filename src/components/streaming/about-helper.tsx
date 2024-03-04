"use client"

import Link from "next/link"
import { MessageSquareIcon, SendHorizonal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Hint } from "@/components/hint"
import { VerifiedMark } from "@/components/verified-mark"
import MessageModal from "@/app/(dashboard)/u/[username]/messages/_components/message-modal"

import { BioModal } from "./biography"
import PaymentModal from "./featured-modal/payment-modal"

interface AboutCardProps {
  hostName: string
  hostIdentity: string
  viewerIdentity: string
  bio: string | null
  followedByCount: number
}

export const AboutCard = ({
  hostName,
  hostIdentity,
  viewerIdentity,
  bio,
  followedByCount,
}: AboutCardProps) => {
  const hostAsViewer = `host-${hostIdentity}`
  const isHost = viewerIdentity === hostAsViewer

  const followedByLabel = followedByCount === 1 ? "follower" : "followers"

  return (
    <div className="px-4">
      <div className="group flex flex-col gap-y-3 rounded-xl bg-background p-6 lg:p-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2 text-lg font-semibold lg:text-2xl">
            About {hostName}
            <VerifiedMark />
          </div>
          {isHost && <BioModal initialValue={bio} />}
        </div>
        <div className="mr-auto flex items-center justify-center text-sm text-muted-foreground">
          <span className="mr-[-5px]  font-semibold text-primary ">
            {followedByCount}
          </span>{" "}
          <Button variant="link" size="sm">
            <Link href={`/u/${hostName}/followers`}>{followedByLabel}</Link>
          </Button>
        </div>
        <p className="text-sm">
          {!bio && isHost
            ? "Your bio is a canvas awaiting your brushstrokes, don't leave it blank, let it tell your story"
            : "...."}
        </p>
        {!isHost && (
          <div className="ml-auto">
            <div className="flex items-center justify-center gap-x-2">

              <PaymentModal name={hostName} />


              <Hint label="Send a onetime message">
                <MessageModal name={hostName} hostIdentity={hostIdentity} />
              </Hint>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
