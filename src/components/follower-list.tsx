import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "./ui/button"

interface FollowerListProos {
  imgUrl: string
  username: string
}
const FollowerList = ({ imgUrl, username }: FollowerListProos) => {
  return (
    <div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src={imgUrl} alt={username} />
          <AvatarFallback>{username[0]}</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
        
        </div>
        <div className="ml-auto text-sm font-medium leading-none">
          {username}
        </div>
        <Button>Follow</Button>
      </div>
    </div>
  )
}
export default FollowerList
