import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return  (
    <div className="flex justify-center items-center translate-y-1/2">
        <SignIn />
    </div>
  )
    
}
