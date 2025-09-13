/**
 * Header
 *
 * 常に画面上部に常に表示されるヘッダー
 *
 * @returns {React.JSX.Element} コンポーネント本体
 */
export function Header(): React.JSX.Element {
	return (
		<div className="w-full h-1/15 bg-gray-400 flex justify-between gap-3">
			<div className="bg-gray-700 p-2">ICON</div>
			<div className="bg-gray-700 p-2">🔍Search</div>
			<div className="bg-gray-700 p-2">Login</div>
		</div>
	)
}
