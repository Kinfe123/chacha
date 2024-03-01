'use client'
import { Loader } from "lucide-react"
import { useFormStatus } from "react-dom"
import { toast } from "sonner"
import styles from './forms.module.css'
import { cn } from "@/lib/utils"
import React from "react"
const SubmitBtn = () => {
    const sets_ = new Set()
    const { data, pending } = useFormStatus()
    
    return (
        <button disabled={pending} type="submit" className={cn(styles.form_submit_btn, 'flex justify-center items-center')}>{pending ? (<Loader className='flex justify-center items-center animate-spin w-4 h-4 ' />) : ""} Submit </button>
    )

}

export default React.memo(SubmitBtn)