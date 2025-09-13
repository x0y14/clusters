from fastapi import FastAPI

from app.endpoints import healthcheck

app = FastAPI()
app.include_router(healthcheck.router)
