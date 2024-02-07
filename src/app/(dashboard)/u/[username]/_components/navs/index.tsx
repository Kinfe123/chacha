import { Logo } from "./logo";
import { Actions } from "./act";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-20 z-[49] bg-gradient-to-tr from-transparent to-transparent/90  px-2 lg:px-4 flex justify-between items-center shadow-sm">
      <Logo />
      <Actions />
    </nav>
  );
};