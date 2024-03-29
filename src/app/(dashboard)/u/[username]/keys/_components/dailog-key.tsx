"use client";

import { toast } from "sonner";
import { useState, useTransition, useRef, ElementRef } from "react";
import { AlertTriangle, Terminal } from "lucide-react";
import { IngressInput } from "livekit-server-sdk";
import { Loader } from "lucide-react";
import { createIngress } from "@/actions/ingress";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const RTMP = String(IngressInput.RTMP_INPUT);
const WHIP = String(IngressInput.WHIP_INPUT);


type IngressType = typeof RTMP | typeof WHIP;

export const ConnectModal = () => {
  const closeRef = useRef<ElementRef<"button">>(null);
  const [isPending, startTransition] = useTransition();
  const [ingressType, setIngressType] = useState<IngressType>(RTMP);

  const onSubmit = () => {
    startTransition(() => {
      createIngress(parseInt(ingressType))
        .then(() => {
          toast.success("Ingress created");
          closeRef?.current?.click();
        })
        .catch((err) => toast.error("Something went wrong " + err));
    });
  }
  const objectDescption = [
    'RTMP - It is a unique web address that carries your live video stream every time you broadcast.',
    'WHIP - It simplifies media ingestion, making it easier for software and hardware encoders to support WebRTC Also supports HTTPS.'
  ]



  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">
          Pop a connection string
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,100,210,0.3),rgba(255,255,255,0))]">
        <DialogHeader>
          <DialogTitle className="font-heading tracking-norrmal text-xl">Generating Connection String</DialogTitle>
        </DialogHeader>
        <Select
          disabled={isPending}
          value={ingressType}
          onValueChange={(value) => setIngressType(value)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Ingress Type" />
          </SelectTrigger>
          <SelectContent>

            <SelectItem value={RTMP}>RTMP</SelectItem>
            <SelectItem value={WHIP}>WHIP</SelectItem>
          </SelectContent>
        </Select>

        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle className="font-bold">Info</AlertTitle>
          <AlertDescription>
            {objectDescption[parseInt(ingressType)]}
          </AlertDescription>
        </Alert>
        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Warning!</AlertTitle>
          <AlertDescription>
            This action will reset all active streams using the current connection
          </AlertDescription>
        </Alert>
        <div className="flex justify-between">
          <DialogClose ref={closeRef} asChild>
            <Button variant="ghost">
              Cancel
            </Button>
          </DialogClose>
          <Button
            disabled={isPending}
            onClick={onSubmit}
            variant="default"
          >
            {isPending ? <Loader className='animate-spin w-4 h-4 mr-2' /> : ""}
            Generate
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};