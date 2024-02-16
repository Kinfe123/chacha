"use client"

import Image from "next/image"
import { Pencil } from "lucide-react"

import { Separator } from "@/components/ui/separator"

import { InfoModal } from "./info-modal"

interface InfoCardProps {
  name: string
  thumbnailUrl: string | null
  hostIdentity: string
  viewerIdentity: string
}

export const InfoCard = ({
  name,
  thumbnailUrl,
  hostIdentity,
  viewerIdentity,
}: InfoCardProps) => {
  const hostAsViewer = `host-${hostIdentity}`
  const isHost = viewerIdentity === hostAsViewer

  if (!isHost) return null

  return (
    <div className="px-4">
      <div className="rounded-xl bg-background">
        <div className="flex items-center gap-x-2.5 p-4">
          <div className="h-auto w-auto rounded-md border-2 border-white/5 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,100,210,0.3),rgba(255,255,255,0))] p-2">
            <Pencil className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-sm font-semibold capitalize lg:text-lg">
              Edit your stream info
            </h2>
            <p className="text-xs text-muted-foreground lg:text-sm">
              Let others know what you cooking..
            </p>
          </div>
          <InfoModal initialName={name} initialThumbnailUrl={thumbnailUrl} />
        </div>
        <Separator />
        <div className="space-y-4 p-4 lg:p-6">
          <div>
            <h3 className="mb-2 text-sm text-muted-foreground">Name</h3>
            <p className="text-sm font-semibold">{name}</p>
          </div>
          <div>
            <h3 className="mb-2 text-sm text-muted-foreground">Thumbnail</h3>
            {thumbnailUrl && (
              <div className="relative aspect-video w-[200px] overflow-hidden rounded-md border border-white/10">
                <Image
                  fill
                  src={thumbnailUrl}
                  alt={name}
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
