'use server'
import { z } from 'zod'
import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { eachMonthOfInterval } from 'date-fns'


const formSchema = z.object({
    email: z.string().email(5),
    msg: z.string().min(3)
})

export const submitMsg = async (formData: FormData) => {
    const email = formData.get('email') as string
    const msg = formData.get('msg') as string

    const formStatus = formSchema.safeParse({
        email: email,
        msg: msg
    })
    let result = null
    if(formStatus.success) {

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