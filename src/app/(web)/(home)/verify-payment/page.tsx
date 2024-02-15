'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import { TransactionComplete } from "@/components/transaction-complete";
// import { useRouter } from "next/router";

type TxnProps = {
    params: string | null,
    searchParams: {
        tnx_ref: string,



    }
}
const VarifyChapa = ({searchParams}:TxnProps) => {
    const {tnx_ref: tnx_ref} = searchParams
    // const router = useRouter();
  
    const [data, setData] = useState({})

    useEffect(() => {
        const confirmPayment = async () => {
            try {
              ;
                // const url = `http://localhost:3000/api/verify`;
                const header = {
                    headers: { "Content-Type": "application/json" },
                };
                const data = { tnx_ref: tnx_ref };
                let response = await axios.post('/api/verify', data, header);
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        confirmPayment();
    }, [tnx_ref]);

    return (
        <>
            <div className="row align-items-center" >
                <TransactionComplete />
            </div>
        </>
    );
};

export default VarifyChapa;