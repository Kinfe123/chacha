import { getSelf } from "@/lib/valid-user";
import { getStreamByUserId } from "@/lib/stream";

import { UrlCard } from "./_components/url-feild";
import { KeyCard } from "./_components/stream-key-gen-card";
import { ConnectModal } from "./_components/dailog-key";

const KeysPage = async () => {
  const self = await getSelf();
  const stream = await getStreamByUserId(self.id);

  if (!stream) {
    throw new Error("Stream not found");
  }

  return ( 
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">
          Connection and Keys
        </h1>
        <ConnectModal />
      </div>
      <div className="space-y-4">
        <UrlCard value={stream.serverUrl} />
        <KeyCard value={stream.streamKey} />
      </div>
    </div>
  )
};
 
export default KeysPage;