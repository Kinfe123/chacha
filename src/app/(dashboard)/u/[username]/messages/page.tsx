import { getSelf } from "@/lib/valid-user"
import { getAllMessages } from "@/lib/msg"
import { MessageShow } from "@/components/message-show"
import { PageHeader, PageHeaderHeading, PageHeaderDescription } from "@/components/page-header"
import Link from 'next/link'
import { Separator } from "@/components/ui/separator"

export const metadata = {
    title: "One time messages",
    description: "Messages from public dumped here"
}

const Messages = async () => {
    const self = await getSelf()
    const messages = await getAllMessages(self.id)
    return (
        <div className='p-10 h-full'>
            <PageHeader
                id="account-header"
                aria-labelledby="account-header-heading"
                separated
            >
                <PageHeaderHeading size="sm" className="font-heading mb-2 tracking-normal">Messages</PageHeaderHeading>
                <PageHeaderDescription size="sm">
                    Explore your private dm from Chacha Jema
                </PageHeaderDescription>
            </PageHeader>
            <Separator className="w-full h-1" />
            {!messages.length && (
                <div className=" flex flex-col gap-2 justify-center items-center">
                    <h1 className="text-3xl font-bold font-heading md:text-5xl">No Messages :)</h1>
                    <p className="mx-auto max-w-full text-center text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        You can hit up on  <Link href='/streams' className="underline underline-offset-1">streams</Link>  to make your self as <span className='font-semibold'>bold</span> as possible

                    </p>

                </div>
            )}
            <div className="w-full flex flex-wrap gap-3 items-center">

                {messages.map((r) => {

                    return (<MessageShow key={r.id} msgid={r.id} msg={r.msg} senderName={r.senderName} senderId={r.senderId} read={r.read} senTime={r.createdAt} />)
                })}
            </div>

        </div>
    )
}

export default Messages