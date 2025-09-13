import { Post } from "@/components/post/Post"
import type { PostData } from "@/models/post"

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

export function StreamDisplay(): React.JSX.Element {
	return (
		<div className="flex flex-col items-center gap-2 p-2">
			<Post postData={posts[0]} />
			<Post postData={posts[0]} />
			<Post postData={posts[0]} />
			<Post postData={posts[0]} />
			<Post postData={posts[0]} />
			<Post postData={posts[0]} />
			<Post postData={posts[0]} />
			<Post postData={posts[0]} />
			<Post postData={posts[0]} />
		</div>
	)
}
