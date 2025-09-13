import type { PostData } from "@/models/post"
import { Post } from "./post/Post"

// サンプルポスト
const posts: PostData[] = [
	{
		author: {
			handle: "asdfg",
			displayName: "asdfg",
			iconPath: "asdfg",
			createdAt: new Date(),
			updatedAt: new Date(),
		},
		text: "吾輩は猫である。名前はまだ無い。どこで生まれたか頓と見當がつかぬ。何ても暗薄いじめじめした所でニャーニャー泣いて居た事丈は記憶して居る。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪な種族であったそうだ。",
		numOfLike: 21,
		numOfComment: 2,
		createdAt: new Date(),
		updatedAt: new Date(),
	},
]

/**
 * Content
 *
 * ウェブサイトのコンテンツ表示領域
 *
 * @returns {React.JSX.Element} コンポーネント本体
 */
export function Content(): React.JSX.Element {
	return (
		<div className="flex-1 min-h-0 w-full bg-blue-500 overflow-y-auto flex flex-col items-center gap-2 p-4">
			<Post postData={posts[0]} />
			<Post postData={posts[0]} />
			<Post postData={posts[0]} />
			<Post postData={posts[0]} />
		</div>
	)
}
