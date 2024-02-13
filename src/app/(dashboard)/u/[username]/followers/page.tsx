import { db } from "@/lib/db"
import { getFollowerLists, isFollowingUser } from "@/lib/follow-user"
import { getUserByUsername } from "@/lib/user-helper"
import { getSelf } from "@/lib/valid-user"
import { UserAvatar } from "@/components/user-avatar"
import FollowerList from "@/components/follower-list"
import { FollowrAvatar } from "@/components/followr-avatar"

interface FollowerPageProps {
  params: {
    username: string
  }
}

const FollowerPage = async ({ params }: FollowerPageProps) => {
  //   console.log("THe props : ", prosp)
  const self = await getSelf()
  const user = await getUserByUsername(params.username)

  const followers = await getFollowerLists(user?.id)
  const isFollowing = await isFollowingUser(user?.id)

  return (
    <div className="p-10">
      <div className="flex items-center gap-x-4">
        {followers.map((follow) => {
          return (
            <FollowrAvatar key={follow.follower.id}  imgUrl={follow.follower.imageUrl}
              username={follow.follower.username} followId={follow.followerId} isFollowing={isFollowing}/>
            // <UserAvatar
            //   key={follow.follower.externalUserId}
            //   imageUrl={follow.follower.imageUrl}
            //   username={follow.follower.username}
            //   size="lg"
            // />
          )
        })}
      </div>
    </div>
  )
}

export default FollowerPage
