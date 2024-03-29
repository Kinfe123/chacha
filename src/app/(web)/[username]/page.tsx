import { notFound } from "next/navigation"

import { isBlockedByUser } from "@/lib/blocks"
import { isFollowingUser } from "@/lib/follow-user"
import { getUserByUsername } from "@/lib/user-helper"
import { StreamPlayer } from "@/components/streaming"

import { Sidebar } from "../_components/sidebar"

interface UserPageProps {
  params: {
    username: string
  }
}

const UserPage = async ({ params }: UserPageProps) => {
  const user = await getUserByUsername(params.username)

  if (!user || !user.stream) {
    notFound()
  }
  // we are looking for if the user in parama is found in our follow relationship
  const isFollowing = await isFollowingUser(user.id)
  const isBlocked = await isBlockedByUser(user.id)

  if (isBlocked) {
    notFound()
  }

  return (
    <div>
      {/* the user is {user.username}
      <Actions userId={user.id} isFollowing={isFollowing} /> */}
      <StreamPlayer
        user={user}
        stream={user.stream}
        isFollowing={isFollowing}
      />
    </div>
  )
}

export default UserPage
