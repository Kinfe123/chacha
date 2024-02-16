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
            read: read
        }
    })
    return readMesasge



}
export const getAllMessages = async (id: string) => {
    const allMessages = await db.message.findMany({
        where: {
            receiverId: id,
        }
    })
    return allMessages
}

export const deleteMsg = async (id: string) => {
    const deleteMsg = await db.message.delete({
        where: {
            // this is optional we cna live it as id only since it matches with the where clause id
            id: id
        }
    })
    return deleteMsg
}