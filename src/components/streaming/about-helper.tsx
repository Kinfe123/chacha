"use client"

import { Button } from "@/components/ui/button"
import { VerifiedMark } from "@/components/verified-mark"

import { BioModal } from "./biography"

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
            {followedByLabel}
          </Button>
        </div>
        <p className="text-sm">
          {bio || "This user prefers to keep an air of mystery about them."}
        </p>
      </div>
    </div>
  )
}
