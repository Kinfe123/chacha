"use server"

import { revalidatePath } from "next/cache"
import { Stream } from "@prisma/client"

import { db } from "@/lib/db"
import { getSelf } from "@/lib/valid-user"

export const updateStream = async (values: Partial<Stream>) => {
  try {
    const self = await getSelf()
    const selfStream = await db.stream.findUnique({
      where: {
        userId: self.id,
      },
    })

    if (!selfStream) {
      throw new Error("Stream not found")
    }

    const validData = {
      thumbnailUrl: values.thumbnailUrl,
      name: values.name,
      isChatEnabled: values.isChatEnabled,
      isChatFollowersOnly: values.isChatFollowersOnly,
      isChatDelayed: values.isChatDelayed,
    }

    const stream = await db.stream.update({
      where: {
        id: selfStream.id,
      },
      data: {
        ...validData,
      },
    })

    revalidatePath(`/u/${self.username}/chat`)
    revalidatePath(`/u/${self.username}`)
    revalidatePath(`/${self.username}`)

    return stream
  } catch {
    throw new Error("Internal Error")
  }
}
