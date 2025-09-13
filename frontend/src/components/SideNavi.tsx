import { useSideNaviIsOpen } from "./store"

/**
 * SideNavi
 *
 * 常に画面左端に表示されるナビゲーション
 *
 * @returns {React.JSX.Element} コンポーネント本体
 */
export function SideNavi(): React.JSX.Element {
	const { isOpen, update } = useSideNaviIsOpen()

	const handleToggleNavi = () => {
		update(!isOpen)
	}

	return (
		<div
			className={`h-full bg-green-500 flex flex-col items-center justify-center transition-all duration-300 ${
				isOpen ? "w-1/6" : "w-16"
			}`}
		>
			<button
				type="button"
				onClick={handleToggleNavi}
				className="mb-4 p-2 bg-white rounded shadow"
			>
				{isOpen ? "Close" : "Open"}
			</button>
			{isOpen && <div>SideNavi</div>}
		</div>
	)
}
