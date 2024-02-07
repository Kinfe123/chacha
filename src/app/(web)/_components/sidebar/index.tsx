// import { getFollowedUsers } from "@/lib/follow-service";
import { getRecommended } from "@/lib/recommend-it";

import { Wrapper } from "./wrapper";
import { Following, FollowingSkeleton } from "./following";
import { 
  Toggle, 
  ToggleSkeleton
} from "./toogle";
import { 
  Recommended, 
  RecommendedSkeleton
} from "./recomended";
import { getFollowedUsers } from "@/lib/follow-user";


export const Sidebar = async () => {
  const recommended = await getRecommended();

  const following = await getFollowedUsers();

  return (
    <Wrapper>
      <Toggle />
      <div className="space-y-4 pt-4 lg:pt-0">
         <Following data={following} />
         {/* @ts-ignore */}
        <Recommended data={recommended} />
      </div>
    </Wrapper>
  );
};

export const SidebarSkeleton = () => {
  return (
    <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50">
      <ToggleSkeleton />
      <FollowingSkeleton />
      <RecommendedSkeleton />
    </aside>
  );
};