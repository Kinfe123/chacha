import { Loader } from "lucide-react"

const LoadingPage = () => {
    return (
        <div className="h-full flex flex-col justify-center items-center">
            <Loader className="w-7 h-7 animate-spin" />
            <p>Loading</p>


        </div>
    )
}

export default LoadingPage