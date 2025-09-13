.DEFAULT_GOAL := help

# プレビュー環境の設定
PREVIEW_PORT = 8000
# 本番環境の設定
PRODUCT_PORT = 8000
PRODUCT_WORKERS = 4

.PHONY: help
help: ## ヘルプを表示する
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

.PHONY: setup-dev
setup-dev: ## 環境構築
	uv sync --locked

.PHONY: setup-prod
setup-prod: ## 本番用環境構築
	uv sync --frozen --no-dev

.PHONY: preview
preview: ## バックエンド単体の動作確認
	uv run fastapi dev --port $(PREVIEW_PORT)

.PHONY: run
run: ## 本番環境用に起動
	uv run uvicorn app.main:app --host 0.0.0.0 --port $(PRODUCT_PORT) --workers $(PRODUCT_WORKERS)