import Image from "next/image"

import { Skeleton } from "@/components/ui/skeleton"
import { LiveBadge } from "@/components/live-badge"
import { UserAvatar } from "@/components/user-avatar"

interface ThumbnailProps {
  src: string | null
  fallback: string
  isLive: boolean
  username: string
}

export const Thumbnail = ({
  src,
  fallback,
  isLive,
  username,
}: ThumbnailProps) => {
  let content

  if (!src) {
    content = (
      <div className="flex h-full w-full flex-col items-center justify-center gap-y-4 rounded-xl border-white/40 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,100,210,0.3),rgba(255,255,255,0))] transition-transform ">
        <UserAvatar
          size="lg"
          showBadge
          username={username}
          imageUrl={fallback}
          isLive={isLive}
        />
      </div>
    )
  } else {
    content = (
      <Image
        src={src}
        fill
        alt="Thumbnail"
        className="rounded-md object-cover transition-transform "
      />
    )
  }

  return (
    <div className="border-1 group relative aspect-video cursor-pointer rounded-xl border-[1.2px] border-white/10">
      <div className="bg-trasnsparent absolute inset-0 flex items-center justify-center rounded-md opacity-0 transition-opacity group-hover:opacity-100" />
      {content}
      {isLive && src && (
        <div className="absolute left-2 top-2 transition-transform ">
          <LiveBadge />
        </div>
      )}
    </div>
  )
}

export const ThumbnailSkeleton = () => {
  return (
    <div className="group relative aspect-video cursor-pointer rounded-xl">
      <Skeleton className="h-full w-full" />
    </div>
  )
}
