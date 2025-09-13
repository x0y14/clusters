import Avatar from "boring-avatars"

type UserIconProps = {
	iconPath: string
}
/**
 * UserIcon
 *
 * ユーザーのアイコンを表示するコンポーネント
 *
 * @param {string} iconPath ユーザーのアイコンパス
 *
 * @returns {React.JSX.Element} コンポーネント本体
 */
export function UserIcon({ iconPath }: UserIconProps): React.JSX.Element {
	return (
		<Avatar
			name={iconPath}
			size={50}
			variant="beam"
			colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
		/>
	)
}
