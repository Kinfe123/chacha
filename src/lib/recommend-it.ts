import { db } from "@/lib/db"
import { getSelf } from "@/lib/valid-user"

export const getRecommended = async () => {
  let userId

  try {
    const self = await getSelf()
    userId = self.id
  } catch {
    userId = null
  }

  let users = []

  if (userId) {
    // this dees a fetching with and clause of 
    // 1 .The user is not logged in or th user should not apear on the list
    // 2. The user should not be included in followers lists
    // 3. The user is not found in blocked lists
    users = await db.user.findMany({
      where: {
        AND: [
          {
            NOT: {
              id: userId,
            },
          },
          {
            NOT: {
              followedBy: {
                some: {
                  followerId: userId,
                },
              },
            },
          },
          {
            NOT: {
              blocking: {
                some: {
                  blockedId: userId,
                },
              },
            },
          },
        ],
      },
      include: {
        stream: {
          select: {
            isLive: true,
          },
        },
      },
      orderBy: [
        {
          stream: {
            isLive: "desc",
          },
        },
        {
          createdAt: "desc",
        },
      ],
    })
  } else {
    users = await db.user.findMany({
      include: {
        stream: {
          select: {
            isLive: true,
          },
        },
      },
      orderBy: [
        {
          stream: {
            isLive: "desc",
          },
        },
        {
          createdAt: "desc",
        },
      ],
    })
  }

  return users
}
