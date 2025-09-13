import type { UserData } from "@/models/user"

// 投稿データ
export type PostData = {
	author: UserData
	text: string
	numOfLike: number
	numOfComment: number
	createdAt: Date
	updatedAt: Date
}
