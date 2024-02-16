import { db } from "./db";

type MsgProps = {
    receiverId: string , 
    receiverName: string ,
    msg: string,
    senderName: string,
    senderId: string,
}

export const sendMessage = async ({
  receiverId,
  receiverName,
  msg,
 senderId,
 senderName
}:MsgProps) => {

    const message = await db.message.create({
        data: {
            msg:msg,
            senderId:senderId,
            senderName: senderName,
            receiverId: receiverId,
            receieverName: receiverName
        }
    })
    return message


}