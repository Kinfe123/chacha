// @ts-nocheck

import axios from "axios";
import { TransactionComplete } from "@/components/transaction-complete";
import { getSelf } from "@/lib/valid-user";
// import { useRouter } from "next/router";
export const metadata = {
    title: "Payment",
    description: "Payment Details"
}
type TxnProps = {
    params: string | null,
    searchParams: {
        tnx_ref: string,



    }
}
const VarifyChapa = async ({ searchParams }: TxnProps) => {
    const { tnx_ref: tnx_ref } = searchParams
    const self = await getSelf()
    let result = {}
    // const router = useRouter();
    const header = {
        headers: { "Content-Type": "application/json" },
    };
    const data = { tnx_ref: tnx_ref, userId: self.id };
    let response = await axios.post(`${process.env.NEXT_PUBLIC_APP_URL}/api/verify`, data, header);
    const res = response.data.data

    return (
        <>
            <div className="row align-items-center" >

                <TransactionComplete first_name={res.first_name} last_name={res.last_name} email={res.email} tnx_ref={res.reference} amount={res.amount} created_at={res.created_at} currency={res.currency} />

            </div>
        </>
    );
};

export default VarifyChapa;