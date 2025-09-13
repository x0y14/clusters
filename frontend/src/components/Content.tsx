import { StreamDisplay } from "@/components/stream/Stream"

/**
 * Content
 *
 * ウェブサイトのコンテンツ表示領域
 *
 * @returns {React.JSX.Element} コンポーネント本体
 */
export function Content(): React.JSX.Element {
	return (
		<div className="min-h-0 w-full bg-blue-500 overflow-y-auto">
			<StreamDisplay />
		</div>
	)
}
