"use server"

import { deleteMsg, readMessage, sendMessage } from "@/lib/msg"
import { getSelf } from "@/lib/valid-user"
import { revalidatePath } from "next/cache"

type MsgProps = {
  receiverId: string
  receiverName: string
  msg: string
}
export const onSendMessage = async ({
  receiverId,
  receiverName,
  msg,
}: MsgProps) => {
  const self = await getSelf()
  const sendMsg = await sendMessage({
    msg: msg,
    receiverId: receiverId,
    receiverName: receiverName,
    senderName: self.username,
    senderId: self.id,
  })

  return sendMsg
}

export const onReadMessage = async (id: string , read: boolean) => {
    const self = await getSelf()
    const readmsg = await readMessage(id , read)
    revalidatePath(`/u/${self.username}/messages `)
    return readmsg
    
}


export const onDelete = async (id: string) => {
  const delmsg = await deleteMsg(id)
  return delmsg
}