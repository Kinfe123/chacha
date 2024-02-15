import axios from 'axios'
export async function POST(req: Request) {
    const { tnx_ref } = (req.body) as unknown as {
        tnx_ref: string
    }
    try {

        const header = {
            headers: { 
                Authorization: `Bearer ${process.env.CHAPA_SECRET_KEY}`,
                "Content-Type": "application/json"
             },         
        };
        let response = await axios.get("https://api.chapa.co/v1/transaction/verify/" + tnx_ref, header)
        
        let resp = await response.data;
        const statusMsg = {message: 'Succesful', status: 'success'}
        return new Response(JSON.stringify(statusMsg), {status:200})
        // res.status(200).json({
        //     message : "Payment successfull",
        //     status : "success" 
        // });
 } catch (e) {
    return new Response(JSON.stringify(e), {status:400})
 }

}
