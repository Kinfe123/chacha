import { Toggle } from "./toogle";
import { Wrapper } from "./wrapper";
import { Navigation } from "./navigates";

export const Sidebar = () => {
  return (
    <Wrapper>
      <Toggle />
      <Navigation />
    </Wrapper>
  );
};