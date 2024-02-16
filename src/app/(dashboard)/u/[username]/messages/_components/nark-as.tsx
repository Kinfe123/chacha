
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
    console.log('The translate value is : ', translateRead)
    const [readType, setReadType] = useState(translateRead)
    const [isPending, startTransition] = useTransition()
    const types = ['Mark As Read', 'Mark As Unread']
    const handleValueChange = (value: string) => {
        startTransition(() => {
            let read = true ? readType === '1' : false
            onReadMessage(mmsgid, read).then(() => toast.success("Read Status Changed")).catch(() => toast.error("Failed changing the status"))
        })

    }

    return (
        <div className='absolute top-3 right-3'>
            <Select
                defaultValue={readType === '1' ? 'Mark As Read' : "Mark As Unread"}
                disabled={isPending}
                value={readType}
                onValueChange={(value) => handleValueChange(value)}
            >
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Ingress Type" />
                </SelectTrigger>
                <SelectContent>

                    <SelectItem value={'1'}>Mark As Read</SelectItem>
                    <SelectItem value={'0'}>Mark As Unread</SelectItem>
                </SelectContent>
            </Select>


        </div>
    )
}

export default MarkAs