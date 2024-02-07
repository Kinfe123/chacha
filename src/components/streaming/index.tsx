interface StreamProps {
    user: string ,
    stream: string ,
    isFollowing: string
}

export const StreamPlayer = ({stream , user , isFollowing}: StreamProps) => {
    return (
        <div>

        </div>
    )
}

export const StreamPlayerSkeleton = () => {
    return (
      <div className="grid grid-cols-1 lg:gap-y-0 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 h-full">
        <div className="space-y-4 col-span-1 lg:col-span-2 xl:col-span-2 2xl:col-span-5 lg:overflow-y-auto hidden-scrollbar pb-10">
          {/* <VideoSkeleton />
          <HeaderSkeleton /> */}
        </div>
        <div className="col-span-1 bg-background">
          {/* <ChatSkeleton /> */}
        </div>
      </div>
    )
  }