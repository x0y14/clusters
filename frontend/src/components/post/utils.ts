// 経過時間をフォーマットする関数
export function formatTimeAgo(date: Date): string {
	const now = new Date()
	const diffMs = now.getTime() - date.getTime() // 経過時間（ミリ秒）
	const diffMinutes = Math.floor(diffMs / (1000 * 60))
	const diffHours = Math.floor(diffMinutes / 60)
	const diffDays = Math.floor(diffHours / 24)

	if (diffMinutes < 1) return "たった今"
	if (diffMinutes < 60) return `${diffMinutes}分前`
	if (diffHours < 24) return `${diffHours}時間前`
	return `${diffDays}日前`
}
