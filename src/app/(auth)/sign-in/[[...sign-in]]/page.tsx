import { SignIn } from "@clerk/nextjs";
import CenterWrapper from "../../_components/center-wrapper";
 
export default function Page() {
  return  (
    <CenterWrapper >
        <SignIn />
    </CenterWrapper>
  )
    
}
