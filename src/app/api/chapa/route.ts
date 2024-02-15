import axios from 'axios'

type CustomizationType = {
  title: string
  description: string
}

type PaymentAcceptProps = {
  amount: string
  currency: string
  email: string
  first_name: string
  last_name: string
  phone_number: string
  tx_ref: string
  callback_url: string
  return_url: string
  customization: CustomizationType
}
export async function GET(req: Request) {
  return new Response("Chapa endpoints")
}
export async function POST(req: Request) {
  const {
    amount,
    currency,
    email,
    first_name,
    last_name,
    phone_number,
    tx_ref,
    callback_url,
    return_url,
    customization,
  }  = (req.body) as unknown as PaymentAcceptProps

  console.log('THe name and the stuff here are logged : ' , amount , currency , first_name , last_name )
  try {
    const header = {
        headers: { 
            Authorization: `Bearer ${process.env.CHAPA_SECRET_KEY}`,
            "Content-Type": "application/json"
         },
        
    };
    const body = {
        amount: amount,
        currency: currency,
        email: email,
        first_name: first_name,
        last_name: last_name,
        phone_number: phone_number,
        tx_ref: tx_ref,
        callback_url: callback_url,
        return_url: return_url,
                 "customization[title]" : customization.title,
                 "customization[description]" : customization.description
       }

       let resp = "";
       // getting the data back from the intiation 
       try {

           const req = await axios.post("https://api.chapa.co/v1/transaction/initialize")
           const response = await req.data
            resp = response

       }catch(err){
           console.log("Error has occured on [CHAPA_INIT] ")
       }
              
       
    //    await axios.post("https://api.chapa.co/v1/transaction/initialize", body, header).then(response => {
    //      resp = response;
    //    })

  } catch (err) {
    console.log("Error has occured [CHAPA]", err)
  }
}
