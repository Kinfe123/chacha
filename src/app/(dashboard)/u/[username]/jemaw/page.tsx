import {format } from "date-fns";

import { getBlockedUsers } from "@/lib/blocks";

import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { PageHeader  ,PageHeaderDescription , PageHeaderHeading} from "@/components/page-header";

const CommunityPage = async () => {
  const blockedUsers = await getBlockedUsers();

  const formattedData = blockedUsers.map((block) => ({
    ...block,
    userId: block.blocked.id,
    imageUrl: block.blocked.imageUrl,
    username: block.blocked.username,
    createdAt: format(new Date(block.blocked.createdAt), "dd/MM/yyyy"),
  }));

  return ( 
    <div className="p-6">
      <div className="mb-4">
         <PageHeader
          id="account-header"
          aria-labelledby="account-header-heading"
          separated
        >
          <PageHeaderHeading size="sm" className="font-heading tracking-normal">Jemaw Setting</PageHeaderHeading>
          <PageHeaderDescription size="sm">
            Manage Jemaw here
          </PageHeaderDescription>
        </PageHeader>
      </div>
      <DataTable columns={columns} data={formattedData} />
    </div>
   );
}
 
export default CommunityPage;