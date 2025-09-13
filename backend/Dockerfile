FROM python:3.13-slim AS base
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PATH="/root/.local/bin:$PATH"
RUN apt-get update && apt-get install -y --no-install-recommends curl ca-certificates make \
    && rm -rf /var/lib/apt/lists/* \
    && curl -LsSf https://astral.sh/uv/install.sh | sh
WORKDIR /app

# 依存だけ先に同期してキャッシュ層化
FROM base AS deps
COPY pyproject.toml uv.lock Makefile /app/
RUN make setup-prod

# 実行イメージ
FROM base AS runtime
WORKDIR /app
# venv を丸ごと持ってくる
COPY --from=deps /app/.venv /app/.venv
ENV VIRTUAL_ENV=/app/.venv \
    PATH="/app/.venv/bin:$PATH"

# アプリ本体
COPY . /app

EXPOSE 8000

CMD ["make", "run"]