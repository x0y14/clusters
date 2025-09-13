from typing import Annotated, Literal

from fastapi import APIRouter, Query, Request
from pydantic import BaseModel, ConfigDict

router = APIRouter()


class QueryModel(BaseModel):
    model_config = ConfigDict(extra="forbid")


class ResponseModel(BaseModel):
    status: Literal["ok"]
    model_config = ConfigDict(extra="forbid")


@router.get("/healthcheck", response_model=ResponseModel)
async def get_healthcheck(
    _request: Request, _query: Annotated[QueryModel, Query()]
) -> ResponseModel:
    return ResponseModel(status="ok")
