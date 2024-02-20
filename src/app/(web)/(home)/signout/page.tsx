import type { Metadata } from "next"
import { env } from "@/env.mjs"

import { LogOutButtons } from "./_components/logout-btn"
import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from "@/components/page-header"
import { Shell } from "@/components/shell"
import { currentUser } from "@clerk/nextjs"
import { redirect } from "next/navigation"
export const metadata: Metadata = {
    metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
    title: "Sign out",
    description: "Sign out of your account",
}

export default async function SignOutPage() {
    const user = await currentUser()
    if(!user) {
        redirect('/')
    }
    return (
        <Shell className="max-w-4xl h-full flex justify-center items-center flex-col">
            <PageHeader
                id="sign-out-page-header"
                aria-labelledby="sign-out-page-header-heading"
                className="text-center"
            >
                
                <PageHeaderHeading size="lg">Sign out</PageHeaderHeading>
                <PageHeaderDescription size="lg">
                    Are you sure you want to sign out?
                </PageHeaderDescription>
            </PageHeader>
            
            <LogOutButtons />
        </Shell>
    )
}