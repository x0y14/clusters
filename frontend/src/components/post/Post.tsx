import { FaComment, FaHeart, FaRegHeart } from "react-icons/fa6"
import { UserIcon } from "@/components/post/UserIcon"
import { formatTimeAgo } from "@/components/post/utils"
import type { PostData } from "@/models/post"
import type { UserData } from "@/models/user"

type AuthorDisplayProps = {
	userData: UserData
}
/**
 * AuthorDisplay
 *
 * 投稿作者の情報表示
 *
 * @param {UserData} userData 投稿作者の情報
 *
 * @returns {React.JSX.Element} コンポーネント本体
 */
function AuthorDisplay({ userData }: AuthorDisplayProps): React.JSX.Element {
	return (
		<>
			<UserIcon iconPath={userData.iconPath} />
			<p className="space-x-1">
				<span className="text-xl font-bold text-gray-800">
					{userData.displayName}
				</span>
				<span className="text-md text-gray-700 ">@{userData.handle}</span>
			</p>
		</>
	)
}

type DateDisplayProps = {
	createdAt: Date
}
/**
 * DateDisplay
 *
 * 投稿作成日時表示
 *
 * @param {Date} createdAt 投稿作成日時
 *
 * @returns {React.JSX.Element} コンポーネント本体
 */
function DateDisplay({ createdAt }: DateDisplayProps): React.JSX.Element {
	return <p className="text-md text-gray-600">{formatTimeAgo(createdAt)}</p>
}

type LikeDisplayProps = {
	numOfLike: number
}
/**
 * LikeDisplay
 *
 * いいねアイコンと投稿に対するいいね数の表示
 *
 * @param {number} numOfLike 投稿に対するいいねの数
 *
 * @returns {React.JSX.Element} コンポーネント本体
 */
function LikeDisplay({ numOfLike }: LikeDisplayProps): React.JSX.Element {
	return (
		<div className="flex items-center gap-1">
			<FaHeart size={18} color={"#6a7282"} />
			<p className="text-md font-bold text-gray-500">{numOfLike}</p>
		</div>
	)
}

type CommentDisplayProps = {
	numOfComment: number
}
/**
 * CommentDisplay
 *
 * コメントアイコンと投稿に対するコメント数の表示
 * @params {number} numOfComment
 *
 * @returns {React.JSX.Element} コンポーネント本体
 */
function CommentDisplay({
	numOfComment,
}: CommentDisplayProps): React.JSX.Element {
	return (
		<div className="flex items-center gap-1">
			<FaComment size={18} color={"#6a7282"} />
			<p className="text-md font-bold text-gray-500">{numOfComment}</p>
		</div>
	)
}

type PostProps = {
	postData: PostData
}
/**
 * Post
 *
 * 投稿を表示するコンポーネント
 *
 * @param {PostData} postData 投稿内容
 *
 * @returns {React.JSX.Element} コンポーネント本体
 */
export function Post({ postData }: PostProps): React.JSX.Element {
	return (
		<div className="w-150 max-h-200 bg-gray-50 space-y-2 rounded-2xl p-4">
			{/* 投稿ヘッダ部分 */}
			<div className="flex items-center gap-3">
				{/* ユーザ情報部分 */}
				<AuthorDisplay userData={postData.author} />
				{/* 投稿日時 */}
				<DateDisplay createdAt={postData.createdAt} />
			</div>
			{/* 投稿コンテンツ部分 */}
			<div className="">
				<p className="font-bold text-gray-700">{postData.text}</p>
			</div>
			{/* 投稿フッタ部分 */}
			<div className="flex items-center gap-6">
				<LikeDisplay numOfLike={postData.numOfLike} />
				<CommentDisplay numOfComment={postData.numOfComment} />
			</div>
		</div>
	)
}
