// @ts-nocheck
import DeleteMsgPage from "@/app/(dashboard)/u/[username]/messages/_components/delete-msg"
import MarkAs from "@/app/(dashboard)/u/[username]/messages/_components/nark-as"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { getUserByUsername } from "@/lib/user-helper"
import { formatDate } from "@/lib/utils"

type MessageBoxProps = {
  msgid: string,
  senderName: string,
  senderId: string,
  read: boolean | null,
  msg: string,
  senTime: Date




}

export async function MessageShow({ msgid, senderName, senderId, read, msg, senTime }: MessageBoxProps) {

  const user = await getUserByUsername(senderName)

  return (
    <Card className="w-full relative max-w-sm mt-3 bg-transparent bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,100,210,0.3),rgba(255,255,255,0))]">
      <MarkAs mmsgid={msgid} read={read} />
      <DeleteMsgPage id={msgid} />
      < CardHeader className="p-4" >
        <div className="flex items-center gap-4 text-sm">
          <Avatar className="w-8 h-8 border">
            <AvatarImage alt="User" src={user.imageUrl} />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          <div className="font-semibold">{senderName}</div>
        </div>
        <div className="rounded-xl bg-transparent px-4 py-2 text-sm mt-2">{msg}</div>
      </CardHeader >
      <CardContent className="p-4 text-xs">
        <div className="flex items-center gap-2">
          <div>Message from:</div>
          <div className="font-semibold">{senderName}</div>
        </div>
        <div className="flex items-center gap-2">
          <div>Time:</div>
          {/* @ts-ignore */}
          <div>{formatDate(senTime)}</div>

        </div>

      </CardContent>
    </Card >
  )
}
