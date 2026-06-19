# Tender Intelligence SaaS Roadmap

This project scaffold follows an MVP-to-production path for an AI-assisted tender analysis SaaS.

## Core Architecture

- **Next.js frontend** for authentication, dashboards, uploads, tender details, and reports.
- **FastAPI backend** for authentication, PDF processing, Gemini analysis, Qdrant embeddings, and report APIs.
- **PostgreSQL** for users, companies, tenders, reports, audit logs, and RBAC metadata.
- **Qdrant Cloud** for semantic tender and company capability search.
- **Gemini API** for requirement extraction, risk analysis, compliance matrices, and bid recommendations.

## MVP Implementation Order

1. FastAPI backend scaffold and health endpoint.
2. PDF upload and text extraction pipeline.
3. Text chunking and Gemini embedding generation.
4. Qdrant collection creation and chunk storage.
5. Requirement extraction and risk analysis reports.
6. Next.js dashboard and tender upload flow.
7. Similar tender search and capability matching.

## Production Hardening

- Multi-tenant data model.
- JWT authentication and role-based access control.
- Audit logging for upload, delete, analyze, and export actions.
- Celery and Redis background workers for long-running jobs.
- Database migrations.
- Dockerized services.
- CI/CD, monitoring, rate limiting, and error tracking.
