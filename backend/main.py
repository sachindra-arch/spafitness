"""FastAPI entrypoint for the tender intelligence SaaS backend."""

from fastapi import FastAPI

app = FastAPI(
    title="Tender Intelligence API",
    description="MVP API scaffold for PDF tender analysis, embeddings, and reports.",
    version="0.1.0",
)


@app.get("/health", tags=["system"])
def health_check() -> dict[str, str]:
    """Return a lightweight service health signal."""
    return {"status": "ok"}
