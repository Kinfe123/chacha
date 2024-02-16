"use server"

import { sendMessage } from "@/lib/msg"
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
