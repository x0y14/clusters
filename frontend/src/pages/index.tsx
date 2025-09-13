import { App } from "@/components/App.tsx"
import "@/index.css"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

// biome-ignore lint/style/noNonNullAssertion: a
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>,
)
