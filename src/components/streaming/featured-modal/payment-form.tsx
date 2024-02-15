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

const profileFormSchema = z.object({
    amount: z
        .string()
        .min(1, {
            message: "amount must be at least 2 characters.",
        })
        .max(10, {
            message: "amount must not be longer than 30 characters.",
        }),
    currency: z.string(),
    firstName: z.string().min(1, { message: "The first name should be more than 2 characters" }).max(10),
    lastName: z.string().min(1, { message: "The first name should be more than 2 characters" }).max(10),
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

type ProfileFormValues = z.infer<typeof profileFormSchema>

// This can come from your database or API.
const defaultValues: Partial<ProfileFormValues> = {
    currency: "ETB"
}

export function PaymentForm({ username }: { username: string }) {
    const form = useForm<ProfileFormValues>({
        resolver: zodResolver(profileFormSchema),
        defaultValues,
        mode: "onChange",
    })



    async function onSubmit(data: ProfileFormValues) {
        const refNumber = uuidv4()
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
            callback_url: "http://localhost:3000/success",
            return_url: "http://localhost:3000/verify-payment?tnx_ref=" + refNumber,
            customization: {
                title: "Donation to " + username,
                description: "Donating about " + data.amount,
            }
        }
        toast.success("YOu have submitted well!")
        let response = await axios.post(`http://localhost:3000/api/chapa`, body, header);
        console.log("The response is : ", response)
        console.log(response.data.data.checkout_url);
        window.location.href = response.data.data.checkout_url;
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>amount</FormLabel>
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
                            <FormLabel>Email</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a verified email to display" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="m@example.com">ETB</SelectItem>
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
                            <FormLabel>amount</FormLabel>
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
                            <FormLabel>amount</FormLabel>
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
                            <FormLabel>amount</FormLabel>
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
                            <FormLabel>amount</FormLabel>
                            <FormControl>
                                <Input placeholder="0919191919" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />


                <Button type="submit">Update profile</Button>
            </form>
        </Form>
    )
}