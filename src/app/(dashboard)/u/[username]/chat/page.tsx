import { getSelf } from "@/lib/valid-user"
import { getStreamByUserId } from "@/lib/stream";

import { ToggleCard } from "./_components/toogly-chat";
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";

const ChatPage = async () => {
  const self = await getSelf();

  const stream = await getStreamByUserId(self.id);
  if (!stream) {
    throw new Error("Stream not found");
  }

  return (
    <div className="p-10">
      <div className="mb-4">
        <PageHeader
          id="account-header"
          aria-labelledby="account-header-heading"
          separated
        >
          <PageHeaderHeading size="sm" className="font-heading tracking-normal">Chat Setting</PageHeaderHeading>
          <PageHeaderDescription size="sm">
            Manage your chat settings
          </PageHeaderDescription>
        </PageHeader>
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