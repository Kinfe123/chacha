'use client'


import { onDelete } from "@/actions/sendmsg"
import { Loader, Trash } from "lucide-react"
import { useTransition } from "react"
import { toast } from "sonner"

const DeleteMsgPage = ({id}: {id: string}) => {
    const [isPending, startTransition] = useTransition()
    const handleDelete = () => {
        startTransition(() => {
            onDelete(id).then(() => toast.success("The meesage is deleted")).catch((err) => toast.error(JSON.stringify(err)))

        })


    }
    return (
        <div className="absolute bottom-3 right-3">
            {isPending ? <Loader className="w-3 h-3 animate-spin" /> : <Trash className="w-3 h-4" onClick={handleDelete} />}


        </div>
    )
}
export default DeleteMsgPage