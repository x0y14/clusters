.DEFAULT_GOAL := help

.PHONY: help
help: ## ヘルプを表示する
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

.PHONY: build-frontend
build-frontend: ## フロントエンドをビルドする
	make -C ./frontend build

.PHONY: run
run:build-frontend ## 本番を模したローカル環境を起動
	docker compose up --build