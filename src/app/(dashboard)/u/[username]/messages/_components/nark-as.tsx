
'use client'

import { toast } from "sonner"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useTransform } from "framer-motion"
import { useState, useTransition } from "react"
import { onReadMessage } from "@/actions/sendmsg"

type MarkAsProps = {
    mmsgid: string,
    read: boolean
}

const MarkAs = ({ mmsgid, read }: MarkAsProps) => {
    const translateRead = read ? '1' : '0'
    const [readType, setReadType] = useState(translateRead)
    const [isPending, startTransition] = useTransition()
    const types = ['Mark As Read', 'Mark As Unread']
    const handleValueChange = (value: string) => {
        startTransition(() => {
            let readState = value === '0' ? false : true
            setReadType(value)
            // console.log('The readstate is:', readState, value)
            onReadMessage(mmsgid, readState).then((data) => toast.success(data ? 'You have marked as a read' : "You have marked as unread ")).catch(() => toast.error("Failed changing the status"))
        })

    }

    return (
        <div className='absolute top-3 right-3'>
            <Select
                defaultValue={translateRead === '1' ? 'Mark As Read' : "Mark As Unread"}
                disabled={isPending}
                value={readType}
                onValueChange={(value) => handleValueChange(value)}
            >
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Read Status" />
                </SelectTrigger>
                <SelectContent className="">

                    <SelectItem value={'1'}>Mark As Read</SelectItem>
                    <SelectItem value={'0'}>Mark As Unread</SelectItem>
                </SelectContent>
            </Select>


        </div>
    )
}

export default MarkAs