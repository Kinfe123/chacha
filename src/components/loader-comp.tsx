import { Loader } from "lucide-react"

import { cn } from "@/lib/utils"

interface LoaderProps {
  children: React.ReactNode
  isLoading: boolean
  className?: string
}

const LoaderComp = ({ children, isLoading, className }: LoaderProps) => {
  return (
    <div className={cn("flex items-center justify-center gap-2", className)}>
      {isLoading && <Loader className="h-3 w-3 animate-spin" />}
      {children}
    </div>
  )
}

export default LoaderComp
