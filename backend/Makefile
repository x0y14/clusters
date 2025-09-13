.DEFAULT_GOAL := help

.PHONY: help
help: ## ヘルプを表示する
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

.PHONY: setup
setup: ## 環境構築
	uv sync --locked

.PHONY: preview
preview: ## バックエンド単体の動作確認
	uv run fastapi dev
