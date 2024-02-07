import { create } from "zustand"

interface SidebarStore {
  collapsed: boolean
  onExpand: () => void
  onCollapse: () => void
}

// we used () - here in the object becasue of we need the object right aways so that we can access the by using their property
export const useSidebar = create<SidebarStore>((set) => ({
  collapsed: false,
  onExpand: () => set(() => ({ collapsed: false })),
  onCollapse: () => set(() => ({ collapsed: true })),
}))
