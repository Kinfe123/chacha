import { Skeleton } from "@/components/ui/skeleton";

export const ResultsSkeleton = () => {
    return (
      <div>
        <Skeleton className="h-8 w-[290px] mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {[...Array(4)].map((_, i) => (
            // <ResultCardSkeleton key={i} />
            <div key={i}>temp</div>
          ))}
        </div>
      </div>
    );
  };