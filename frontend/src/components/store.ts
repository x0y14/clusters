import { create } from "zustand"

// サイドナビの開閉コントロール
interface SideNaviIsOpen {
	isOpen: boolean
	update: (isOpen: boolean) => void
}
export const useSideNaviIsOpen = create<SideNaviIsOpen>((set) => ({
	isOpen: false,
	update: (isOpen: boolean) => set(() => ({ isOpen: isOpen })),
}))
