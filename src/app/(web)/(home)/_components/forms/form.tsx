'use client'

import { FormEvent } from 'react'
import styles from './forms.module.css'
import { cn } from "@/lib/utils"
import { submitMsg } from '@/actions/forms'
import { useFormStatus } from 'react-dom'
import { Loader } from 'lucide-react'
const Form = () => {
    const { pending } = useFormStatus()
    return (
        <>
            <div className={cn(styles.form_container, 'mt-20')}>
                <h1 className='text-4xl md:text-4xl lg:text-5xl text-gray-300'>Wanna Collab , <span className='bg-gradient-to-tr from-purple-400 to-red-200 bg-clip-text animate-gradient text-transparent'>Hit us!</span></h1>
                <form className={cn(styles.form)} onSubmit={submitMsg}>
                    <div className={cn(styles.form_group)}>
                        <label for="email">Company Email</label>
                        <input name="email" id="email" type="text" required />
                    </div>
                    <div className={cn(styles.form_group)}>
                        <label for="textarea">How Can We Help You?</label>
                        <textarea cols="50" rows="10" id="textarea" name="msg" />
                    </div>
                    <button disabled={pending} type="submit" className={cn(styles.form_submit_btn, 'flex justify-center items-center')}>{!pending ? (<Loader className='flex justify-center items-center animate-spin w-4 h-4 ' />) : ""} Submit </button>
                </form>
            </div >


        </>
    )
}

export default Form