import { isFollowingUser, meFollowing } from "@/lib/follow-user"
import { getUserByUsername } from "@/lib/user-helper"

import { FollowrAvatar } from "./follower-list-card"
import { getSelf } from "@/lib/valid-user"

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
  const self = await getSelf()
  const disabled = self.id === followId
  return (
    <>
      <FollowrAvatar
        key={followId}
        username={username}
        imgUrl={imgUrl}
        followId={followId}
        isFollowing={isFollowing}
        disabled={disabled}
      />
    </>
  )
}

export default FollowerAvater
