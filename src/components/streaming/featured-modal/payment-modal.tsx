"use client"

import { ElementRef, useRef } from "react"
import { AlertTriangle, DollarSign } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Hint } from "@/components/hint"

interface PaymentModalProps {
  name: string,
  disabled: boolean
}

const PaymentModal = ({ name , disabled }: PaymentModalProps) => {
  const closeRef = useRef<ElementRef<"button">>(null)

  return (
    <div className="flex h-full items-center justify-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" disabled={disabled}>
            <Hint label="Donate" asChild>
              <DollarSign className="h-4 w-4 "  />
            </Hint>
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,100,210,0.3),rgba(255,255,255,0))]">
          <DialogHeader>
            <DialogTitle className="tracking-norrmal font-heading text-xl">
              Donation to
              <span className="mr-1 capitalize">{name}</span>
            </DialogTitle>
          </DialogHeader>

          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Warning!</AlertTitle>
            <AlertDescription>
              This is featre is still on development so make sure to utilize
              till we finished with everything
            </AlertDescription>
          </Alert>
          <div className="flex justify-between">
            <DialogClose ref={closeRef} asChild>
              <Button variant="ghost">Cancel</Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default PaymentModal
