import { isFollowingUser, meFollowing } from "@/lib/follow-user"
import { getUserByUsername } from "@/lib/user-helper"

import { FollowrAvatar } from "./follower-list-card"

interface FollowerListProos {
  imgUrl: string
  username: string
  followId: string
  isFollowing?: boolean
}

const FollowerAvater = async ({
  imgUrl,
  username,
  followId,
}: FollowerListProos) => {
  const followUser = await getUserByUsername(username)
  const isFollowing = await meFollowing(followUser?.id)
 
  return (
    <>
      <FollowrAvatar
        key={followId}
        username={username}
        imgUrl={imgUrl}
        followId={followId}
        isFollowing={isFollowing}
      />
    </>
  )
}

export default FollowerAvater
