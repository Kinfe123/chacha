import { Suspense } from "react";

import { Navbar } from "./_components/nav";
import { Container } from "./_components/container";
import { Sidebar, SidebarSkeleton } from "./_components/sidebar";

const BrowseLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return ( 
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        <Suspense fallback={<SidebarSkeleton />}>
          <Sidebar />
        </Suspense>
        <Container>
          {children}
        </Container>
      </div>
    </>
  );
};
 
export default BrowseLayout;