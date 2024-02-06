import { ReactNode } from "react";

interface CenterWrapperProps {
    children: ReactNode
}

const  CenterWrapper = ({children}:CenterWrapperProps) => {
    return (
        <div className="flex justify-center items-center translate-y-1/2">
            {children}

        </div>
    )

}
export default CenterWrapper