import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";
import { Suspense } from "react";

import { StreamSkeleton, Streams } from "./_components/StreamLists";

export default function Page() {
  return (
    <div className="h-full p-8 max-w-screen-2xl mx-auto">
      <Suspense fallback={<StreamSkeleton />}>

        <div>
          <Streams />
        </div>

      </Suspense>
    </div>
  );
};