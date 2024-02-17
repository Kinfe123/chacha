import { Toggle } from "./toogle";
import { Wrapper } from "./wrapper";
import { Navigation } from "./navigates";
import { getAllUnread } from "@/lib/msg";

export const Sidebar = async () => {
  const count = await getAllUnread()
 
  return (
    <Wrapper>
      <Toggle />
      <Navigation count = {count} />
    </Wrapper>
  );
};