import { Suspense } from "react";
import { redirect } from "next/navigation";

import { SearchSkeleton, SearchLists } from "./_components/SeachLists";

interface SearchPageProps {
  searchParams: {
    term?: string;
  };
};

const SearchPage = ({
  searchParams,
}: SearchPageProps) => {
  if (!searchParams.term) {
    redirect("/");
  }

  return ( 
    <div className="h-full p-8 max-w-screen-2xl mx-auto">
      <Suspense fallback={<SearchSkeleton />}>
        <SearchLists term={searchParams.term} />
      </Suspense>
    </div>
  );
};
 
export default SearchPage;