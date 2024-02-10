import { db } from "@/lib/db"
import { getFollowerLists } from "@/lib/follow-user"
import { getSelf } from "@/lib/valid-user"

const FollowerPage = async  () => {
    const self = await getSelf()
    const followers = await getFollowerLists(self.id)
    
    
    
    return (
        <div>

        </div>
    )
}

export default FollowerPage