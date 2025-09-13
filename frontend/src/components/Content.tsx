import { StreamDisplay } from "@/components//stream/Stream"
import { SideContents } from "@/components/stream/SideContents"

/**
 * Content
 *
 * ウェブサイトのコンテンツ表示領域
 *
 * @returns {React.JSX.Element} コンポーネント本体
 */
export function Content(): React.JSX.Element {
	return (
		<div className="min-h-0 w-full bg-blue-500 flex overflow-y-auto justify-center">
			<StreamDisplay />
			<SideContents />
		</div>
	)
}
