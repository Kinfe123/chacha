"use server"

import { readMessage, sendMessage } from "@/lib/msg"
import { getSelf } from "@/lib/valid-user"

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
    const readmsg = await readMessage(id , read)
    return readmsg
    
}
