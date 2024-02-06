import { ReactNode } from "react";
import {Logo} from './_components/logo'
interface CenterWrapperProps {
    children: ReactNode
}

const  CenterWrapper = ({children}:CenterWrapperProps) => {
    return (
        <div className="h-full flex-col space-y-5 gap-5 flex justify-center items-center">
            <Logo />
            {children}

        </div>
    )

}
export default CenterWrapper