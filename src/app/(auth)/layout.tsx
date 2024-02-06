import { ReactNode } from "react";

interface CenterWrapperProps {
    children: ReactNode
}

const  CenterWrapper = ({children}:CenterWrapperProps) => {
    return (
        <div className="h-full flex justify-center items-center">
            {children}

        </div>
    )

}
export default CenterWrapper