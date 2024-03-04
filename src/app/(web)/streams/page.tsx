import { Suspense } from "react"

import { Streams, StreamSkeleton } from "./_components/StreamLists"

export default function Page() {
  return (
    <div className="mx-auto h-full max-w-screen-2xl p-8">
      <Suspense fallback={<StreamSkeleton />}>
        <div>
          <Streams />
        </div>
      </Suspense>
    </div>
  )
}
