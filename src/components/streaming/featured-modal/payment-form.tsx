"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import { z } from "zod"
import { v4 as uuidv4 } from 'uuid'
import { cn } from "@/lib/utils"
import axios from 'axios'
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from 'sonner'
import { useState } from "react"
import { Loader } from "lucide-react"

const paymentFromSchema = z.object({
    amount: z
        .string()
        .min(1, {
            message: "amount must be at least 2 characters.",
        })
        .max(10, {
            message: "amount must not be longer than 30 characters.",
        }),
    currency: z.string(),
    firstName: z.string().min(1, { message: "The first name should be more than 2 characters" }).max(20),
    lastName: z.string().min(1, { message: "The first name should be more than 2 characters" }).max(20),
    phoneNumber: z.string().min(10, 'Minimum 10 digits').max(10, 'Maximum 10 digits'),
    tx_ref: z.string(),
    returnUrl: z.string(),
    callbackUrl: z.string(),

    email: z
        .string({
            required_error: "Please select an email to display.",
        })
        .email(),

})

type PaymentSchema = z.infer<typeof paymentFromSchema>

// This can come from your database or API.
const defaultValues: Partial<PaymentSchema> = {
    currency: "ETB"
}

export function PaymentForm({ username }: { username: string }) {
    const [loading, setLoading] = useState(false)
    const form = useForm<PaymentSchema>({
        resolver: zodResolver(paymentFromSchema),
        defaultValues,
        mode: "onChange",
    })

    // console.log('fROM: ', form.getValues())



    async function onSubmitHandle(d: PaymentSchema) {
        const data = form.getValues()
        setLoading(true)
        console.log('I AM CLICKED', data)
        const refNumber = uuidv4()
        try {

            const header = {
                headers: {
                    "Content-Type": "application/json"
                },
            };
            const body = {
                amount: data.amount, //Amount should be integer
                currency: data.currency,
                email: data.email,
                first_name: data.firstName,
                last_name: data.lastName,
                phone_number: data.phoneNumber, //the phone number must not include +251
                tx_ref: refNumber,
                callback_url: `${process.env.NEXT_PUBLIC_APP_URL}/success`,
                return_url: `${process.env.NEXT_PUBLIC_APP_URL}/verify-payment?tnx_ref=` + refNumber,
                customization: {
                    title: "Donation to " + username,
                    description: "Donating about " + data.amount,
                }
            }

            const response = await axios.post(`/api/chapa`, JSON.stringify(body), header);
            if (response.data) {

                toast.success("YOu have submitted well!")
            } else {
                toast.error("Failed to make the transactions")
            }
            console.log("The response is : ", response)
            setLoading(false)
            console.log(response.data.data.checkout_url);
            window.location.href = response.data.data.checkout_url;
        } catch (err) {
            toast.error("Failed to make the transactions")
            setLoading(false)
            console.log("Error is : ", err)

        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmitHandle)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Amount</FormLabel>
                            <FormControl>
                                <Input placeholder="10" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="currency"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Currency</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a verified email to display" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="ETB">ETB</SelectItem>
                                    {/* <SelectItem value="m@google.com">USD</SelectItem>
                                    <SelectItem value="m@support.com">DRM/SelectItem> */}
                                </SelectContent>
                            </Select>
                            {/* <FormDescription>
                                You can manage verified email addresses in your{" "}
                                <Link href="/examples/forms">email settings</Link>.
                            </FormDescription> */}
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="kinfish@chacha.xyz" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Kinfish" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Farms" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                                <Input placeholder="0919191919" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* @ts-ignore */}
                <Button disabled={loading} onClick={onSubmitHandle} type="submit">{loading && <Loader className="w-3 h-3 animate-spin mr-2" />}Pay Now</Button>
            </form>
        </Form>
    )
}