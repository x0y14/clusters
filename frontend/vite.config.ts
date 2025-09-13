import path from "node:path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
	root: path.resolve(__dirname, "./src/pages"),

	plugins: [react()],
	// public はプロジェクト直下を使い続ける（デフォルト互換）
	publicDir: path.resolve(__dirname, "public"),
	build: {
		// 出力先もデフォルト互換でプロジェクト直下 dist/
		outDir: path.resolve(__dirname, "./dist"),
		emptyOutDir: true,
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
})
