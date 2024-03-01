'use server'

import { z } from 'zod'
import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"


const formSchema = z.object({
    email: z.string().email(),
    msg: z.string().min(3)
})

export const submitMsg = async (state: any , formData: FormData) => {
    console.log('The form msg is  :  , ', formData)
    const email = formData.get('email') as string
    const msg = formData.get('msg') as string

    const formStatus = formSchema.safeParse({
        email: email,
        msg: msg
    })
    let result = null
    if (formStatus.success) {

        result = await db.forms.create({
            data: {
                email: email,
                msg: msg
            }
        })
    }

    revalidatePath("/")
    return result


}