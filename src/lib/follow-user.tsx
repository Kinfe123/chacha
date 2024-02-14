import { db } from "@/lib/db"
import { getSelf } from "@/lib/valid-user"

export const getFollowedUsers = async () => {
  try {
    const self = await getSelf()

    const followedUsers = db.follow.findMany({
      where: {
        followerId: self.id,
        following: {
          blocking: {
            none: {
              blockedId: self.id,
            },
          },
        },
      },
      include: {
        following: {
          include: {
            stream: {
              select: {
                isLive: true,
              },
            },
          },
        },
      },
      orderBy: [
        {
          following: {
            stream: {
              isLive: "desc",
            },
          },
        },
        {
          createdAt: "desc",
        },
      ],
    })

    return followedUsers
  } catch {
    return []
  }
}

export const isFollowingUser = async (id: string | undefined) => {
  try {
    const self = await getSelf()

    const otherUser = await db.user.findUnique({
      where: { id },
    })

    if (!otherUser) {
      throw new Error("User not found")
    }

    if (otherUser.id === self.id) {
      return true
    }

    const existingFollow = await db.follow.findFirst({
      where: {
        followerId: self.id,
        followingId: otherUser.id,
      },
    })

    return !!existingFollow
  } catch {
    return false
  }
}

export const meFollowing = async (id: string | undefined) => {
  try {
    const self = await getSelf()

    const otherUser = await db.user.findUnique({
      where: { id },
    })

    if (!otherUser) {
      throw new Error("User not found")
    }

    if (otherUser.id === self.id) {
      return true
    }

    const existingFollow = await db.follow.findFirst({
      where: {
        followerId: otherUser.id,
        followingId: self.id,
      },
    })

    return !!existingFollow
  } catch {
    return false
  }
}

export const mefollowUser = async (id: string) => {
  const self = await getSelf()

  const otherUser = await db.user.findUnique({
    where: { id },
  })

  if (!otherUser) {
    throw new Error("User not found")
  }

  if (otherUser.id === self.id) {
    throw new Error("Cannot follow yourself")
  }

  const existingFollow = await db.follow.findFirst({
    where: {
      followerId: id,
      followingId: self.id,
    },
  })

  if (existingFollow) {
    throw new Error("Already following")
  }

  const follow = await db.follow.create({
    data: {
      // it is the self that is following and it is the other guys who should be in our following lists
      followerId: id,
      followingId: self.id,
    },
    include: {
      // we are returning a the follwing and follower relation with the [] User
      following: true,
      follower: true,
    },
  })

  return follow
}
export const followUser = async (id: string) => {
  const self = await getSelf()

  const otherUser = await db.user.findUnique({
    where: { id },
  })

  if (!otherUser) {
    throw new Error("User not found")
  }

  if (otherUser.id === self.id) {
    throw new Error("Cannot follow yourself")
  }

  const existingFollow = await db.follow.findFirst({
    where: {
      followerId: self.id,
      followingId: otherUser.id,
    },
  })

  if (existingFollow) {
    throw new Error("Already following")
  }

  const follow = await db.follow.create({
    data: {
      // it is the self that is following and it is the other guys who should be in our following lists
      followerId: self.id,
      followingId: otherUser.id,
    },
    include: {
      // we are returning a the follwing and follower relation with the [] User
      following: true,
      follower: true,
    },
  })

  return follow
}

export const getFollowerLists = async (id: string | undefined) => {
  const self = await getSelf()
  const followers = await db.follow.findMany({
    where: {
      followingId: id,
    },
    include: {
      follower: true,
    },
  })
  if (!followers) {
    return []
  }
  return followers
}

export const unfollowUser = async (id: string) => {
  const self = await getSelf()

  const otherUser = await db.user.findUnique({
    where: {
      id,
    },
  })

  if (!otherUser) {
    throw new Error("User not found")
  }

  if (otherUser.id === self.id) {
    throw new Error("Cannot unfollow yourself")
  }

  const existingFollow = await db.follow.findFirst({
    where: {
      followerId: self.id,
      followingId: otherUser.id,
    },

  })
  // here we havee identified the person to be unfollowd so we need to delete simply

  if (!existingFollow) {
    throw new Error("Not following")
  }

  const follow = await db.follow.delete({
    where: {
      id: existingFollow.id,
    },
    include: {
      following: true,
      follower: true,
    },
  })

  return follow
}


export const onMeUnfollow = async (id: string) => {

  const self = await getSelf()

  const otherUser = await db.user.findUnique({
    where: {
      id,
    },
  })

  if (!otherUser) {
    throw new Error("User not found")
  }

  if (otherUser.id === self.id) {
    throw new Error("Cannot unfollow yourself")
  }

  const existingFollow = await db.follow.findFirst({
    where: {
      followerId: self.id,
      followingId: otherUser.id,
    },

  })
  // here we havee identified the person to be unfollowd so we need to delete simply

  if (!existingFollow) {
    throw new Error("Not following")
  }

  const follow = await db.follow.delete({
    where: {
      id: id,
    },
    include: {
      following: true,
      follower: true,
    },
  })

  return follow
  
  
}