"use client"

import { ElementRef, useRef, useState, useTransition } from "react"
import { AlertTriangle, DollarSign, Info, Loader, MessageSquareIcon } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { onSendMessage } from "@/actions/sendmsg"

interface PaymentModalProps {
    name: string,
    hostIdentity: string,
    disabled?: boolean
}

const MessageModal = ({ name, disabled, hostIdentity }: PaymentModalProps) => {
    const closeRef = useRef<ElementRef<"button">>(null)

    const [msg, setMsg] = useState<string>('')
    const [isPending, startTransition] = useTransition()
    const onSubmit = () => {
        startTransition(() => {
            onSendMessage({ receiverId: hostIdentity, receiverName: name, msg: msg }).then(() => toast.success("Message has been successfully delievered")).catch(() => toast.error('Message not sent! Try again later'))
        })
    }


    return (
        <div className="flex h-full items-center justify-center">
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="default" disabled={disabled}>
                        <MessageSquareIcon className="h-4 w-4" />
                    </Button>
                </DialogTrigger>
                <DialogContent className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,100,210,0.3),rgba(255,255,255,0))]">
                    <DialogHeader>
                        <DialogTitle className="tracking-norrmal font-heading text-xl">
                            Message to
                            <span className="ml-1 capitalize">{name.toUpperCase()}</span>
                        </DialogTitle>


                    </DialogHeader>
                    <Alert>
                        <Info className="h-4 w-4" />
                        <AlertTitle className="font-bold">Info</AlertTitle>
                        <AlertDescription>
                            Please be polite and smart on your messages. :)
                        </AlertDescription>
                    </Alert>

                    <div className="">
                        <Textarea value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Dump your messsage here..." />
                        <div className="flex justify-end items-end  mt-2">
                            <Button onClick={onSubmit} disabled={isPending} variant='default'>{isPending && <Loader className='w-3 h-3 mr-1 animate-none' />}Send</Button>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <DialogClose ref={closeRef} asChild>
                            <Button variant="ghost">Cancel</Button>
                        </DialogClose>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default MessageModal
