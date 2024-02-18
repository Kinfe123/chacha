import { getSelf } from "@/lib/valid-user"
import MessageBox from "./_components/mssage-box"
import { getAllMessages } from "@/lib/msg"
import { MessageShow } from "@/components/message-show"
import { PageHeader, PageHeaderHeading, PageHeaderDescription } from "@/components/page-header"


export const metadata = {
    title: "One time messages",
    description: "Messages from public dumped here"
}

const Messages = async () => {
    const self = await getSelf()
    const messages = await getAllMessages(self.id)

    return (
        <div className='p-10'>
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
            <div className="w-full flex flex-wrap gap-3 items-center">

                {messages.map((r) => {

                    return (<MessageShow key={r.id} msgid={r.id} msg={r.msg} senderName={r.senderName} senderId={r.senderId} read={r.read} senTime={r.createdAt} />)
                })}
            </div>

        </div>
    )
}

export default Messages