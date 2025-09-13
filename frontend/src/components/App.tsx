import { Content } from "@/components/Content"
import { Header } from "@/components/Header"
import { SideNavi } from "@/components/SideNavi"

export function App(): React.JSX.Element {
	return (
		<div className="flex flex-col h-screen">
			<Header />
			<div className="flex flex-1">
				<SideNavi />
				<Content />
			</div>
		</div>
	)
}
