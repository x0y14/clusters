import { StreamDisplay } from "@/components//stream/Stream"
import { SideContents } from "@/components/stream/SideContents"
import { StreamInfo } from "@/components/stream/StreamInfo"

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
			{/* <div className="flex flex-col">
				<StreamInfo />
			</div> */}
			{/* <div className="sticky top-0 shrink-0 bg-amber-700">ClusterName</div> */}
			<div className="flex flex-col">
				<StreamInfo />
				<StreamDisplay />
			</div>
			<SideContents />
		</div>
		// <div className="min-h-0 w-full bg-blue-500 flex justify-center overflow-hidden">
		//     {/* 中央カラム（ここをスクロールコンテナにする） */}
		//     <div className="flex-1 min-h-0 w-full flex flex-col overflow-y-auto">
		//         <StreamInfo />
		//         <StreamDisplay />
		//     </div>
		//     <SideContents />
		// </div>
	)
}
