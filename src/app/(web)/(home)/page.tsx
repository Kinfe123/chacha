import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";
import { Suspense } from "react";

// import { Results, ResultsSkeleton } from "./_components/results";

export default function Page() {
  return (
    <div className="h-full p-8 max-w-screen-2xl mx-auto">
      <Suspense fallback='....'>
        <div>
            <p>hello world</p>
            <ModeToggle />
            <UserButton/>
        </div>
        
      </Suspense>
    </div>
  );
};