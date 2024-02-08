import { getSelf } from "@/lib/valid-user"
import { getStreamByUserId } from "@/lib/stream";

import { ToggleCard } from "./_components/toogly-chat";

const ChatPage = async () => {
  const self = await getSelf();
  const stream = await getStreamByUserId(self.id);

  if (!stream) {
    throw new Error("Stream not found");
  }

  return ( 
    <div className="p-6">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">
          Chat settings
        </h1>
      </div>
      <div className="space-y-4">
        <ToggleCard
          field="isChatEnabled"
          label="Enable chat"
          value={stream.isChatEnabled}
        />
        <ToggleCard
          field="isChatDelayed"
          label="Delay chat"
          value={stream.isChatDelayed}
        />
        <ToggleCard
          field="isChatFollowersOnly"
          label="Must be following to chat"
          value={stream.isChatFollowersOnly}
        />
      </div>
    </div>
  );
};
 
export default ChatPage;