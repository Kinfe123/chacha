"use client";

import { ConnectionState, Track } from "livekit-client";
import { 
  useConnectionState,
  useRemoteParticipant,
  useTracks,
} from "@livekit/components-react"

import { Skeleton } from "@/components/ui/skeleton";

import { OfflineVideo } from "./offline-vid";
import { LoadingVideo } from "./pending-vid";
import { LiveVideo } from "./live-vid";

interface VideoProps {
  hostName: string;
  hostIdentity: string;
};

export const Video = ({
  hostName,
  hostIdentity,
}: VideoProps) => {
  const connectionState = useConnectionState();
  const participant = useRemoteParticipant(hostIdentity);
  const tracks = useTracks([
    Track.Source.Camera,
    Track.Source.Microphone,
  ]).filter((track) => track.participant.identity === hostIdentity);

  let content;


  console.log('THe participatn is : ' , participant )
  console.log('The tracks is : ' , tracks)
  console.log("The connctionState is : ", connectionState)
  if (!participant && connectionState === ConnectionState.Connected) {
    content = <OfflineVideo username={hostName} />;
  } else if (!participant || tracks.length === 0) {
    content = <LoadingVideo label={connectionState} />
  } else {
    content = <LiveVideo participant={participant} />
  };

  return (
    <div className="aspect-video border-b group relative">
      {content}
    </div>
  );
};

export const VideoSkeleton = () => {
  return (
    <div className="aspect-video border-x border-background">
      <Skeleton className="h-full w-full rounded-none" />
    </div>
  );
};