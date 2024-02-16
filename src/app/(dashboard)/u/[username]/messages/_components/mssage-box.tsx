import { getUserByUsername } from "@/lib/user-helper"
import { sendError } from "next/dist/server/api-utils"

type MessageBoxProps = {
    msgid: string, 
    senderName: string,
    senderId: string , 
    read:boolean | null,
    msg: string,



}

const MessageBox = async ({msgid , senderName , senderId , read , msg}: MessageBoxProps) => {
   const user = await getUserByUsername(senderName)

   return (
        <section className="w-full py-12 md:py-14 lg:py-20 border-t">
            <div className="container grid items-center gap-4 px-4 md:px-6">

                <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
                    <div className="grid gap-2">
                        <p className="text-gray-500 dark:text-gray-400">
                            {msg}
                        </p>
                        <div className="inline-flex items-center space-x-2">
                            <img
                                alt="Avatar"
                                className="rounded-full"
                                height="40"
                                src={user?.imageUrl}
                                style={{
                                    aspectRatio: "40/40",
                                    objectFit: "cover",
                                }}
                                width="40"
                            />
                            <div className="grid gap-1">
                                <h4 className="font-semibold">{senderName}</h4>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Acme Corporation</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}


export default MessageBox