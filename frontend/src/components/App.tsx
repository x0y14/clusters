import { Content } from "@/components/Content"
import { Header } from "@/components/Header"
import { SideNavi } from "@/components/SideNavi"

export function App(): React.JSX.Element {
	return (
		<div className="flex flex-col w-screen h-screen overflow-hidden">
			<Header />
			<div className="flex flex-1 w-full overflow-hidden min-h-0">
				<SideNavi />
				<Content />
			</div>
		</div>
	)
}
