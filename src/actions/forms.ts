'use server'

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"


export const submitMsg = async (formData: FormData) => {
    const email = formData.get('email') as string
    const msg = formData.get('msg') as string 
    const sendMsg = await db.forms.create({
        data: {
            email: email,
            msg:msg
        }
    })

    revalidatePath("/")
    return sendMsg


}