import { db } from "./db";

type MsgProps = {
    receiverId: string,
    receiverName: string,
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
}: MsgProps) => {

    const message = await db.message.create({
        data: {
            msg: msg,
            senderId: senderId,
            senderName: senderName,
            receiverId: receiverId,
            receieverName: receiverName
        }
    })
    return message


}

export const readMessage = async (id: string, read: boolean) => {
    const readMesasge = await db.message.update({
        where: {
            id: id,
        },
        data: {
            read: !read
        }
    })
    return readMesasge



}
export const getAllMessages = async (id: string) => {
    const allMessages = await db.message.findMany({
        where: {
            senderId: id,
        }
    })
    return allMessages
}