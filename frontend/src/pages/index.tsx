import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import { App } from "@/components/App.tsx";

// biome-ignore lint/style/noNonNullAssertion: a
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
