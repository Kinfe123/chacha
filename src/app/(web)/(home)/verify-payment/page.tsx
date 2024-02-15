'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const VarifyChapa = () => {
 const router = useRouter();
    const [data, setData] = useState({})

 useEffect(() => {
  const confirmPayment = async () => {
   try {
    const { tnx_ref } = router.query;
    const url = `http://localhost:3000/api/verify`;
                const header = {
                    headers: {  "Content-Type": "application/json" },                   
                };
    const data = { tnx_ref : tnx_ref };
    let response = await axios.post(url, data, header);
                setData(response.data);
   } catch (error) {
    console.log(error);
   }
  };

  confirmPayment();
 }, [router.query]);

 return (
  <>   
     <div className="row align-items-center" >
      <div className="col-lg-12 col-md-12">
          <h3>{JSON.stringify(data)}</h3>                          
      </div>
     </div>   
  </>
 );
};

export default VarifyChapa;