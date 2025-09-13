.DEFAULT_GOAL := help

.PHONY: help
help: ## ヘルプを表示する
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

.PHONY: clean
clean: ## 生成ファイルなどを削除して掃除する
	rm -rf dist
	rm -rf node_modules

.PHONY: setup
setup: ## 環境構築
	npm ci

.PHONY: build
build: ## フロントエンドを静的ファイルとして生成する
	npm run build

.PHONY: preview
preview: ## フロントエンド単体の動作確認
	npm run dev
