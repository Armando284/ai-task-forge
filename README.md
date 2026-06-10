# AI TaskForge

**An intelligent task and project management platform powered by AI agents** (Work in Progress)

## Overview

AI TaskForge aims to be a full-stack project management tool that combines traditional task management with proactive AI assistance for task breakdown, prioritization, and insights.

This repository serves as a **deliberate learning project** to master modern full-stack development, containerization, Kubernetes, Infrastructure as Code, and AI integration in a realistic environment.

## 🎯 Current Status

The project is in its **early stages**. Currently implemented:

- Monorepo setup with **Turborepo**
- Basic **Fastify + TypeScript** backend with a single "Hello World" endpoint
- Kubernetes (k3s) manifests including:
  - Deployment for the backend
  - Deployment for PostgreSQL database
  - Services for backend and database
- Basic Docker configuration

The goal is to gradually expand this foundation into a complete cloud-native application.

## 🛠️ Tech Stack (Planned & In Progress)

### Core
- **Monorepo**: Turborepo + pnpm
- **Backend**: Fastify + TypeScript (in progress)
- **Frontend**: Next.js 14+ App Router + TypeScript (planned)
- **Database**: PostgreSQL + Prisma/Drizzle + pgvector (planned)
- **AI Layer**: LangChain.js + Groq/OpenAI (planned)

### DevOps & Cloud
- **Containerization**: Docker (in progress)
- **Orchestration**: Kubernetes / k3s (in progress)
- **IaC**: Terraform (planned)
- **CI/CD**: GitHub Actions (planned)
- **Cloud**: Azure AKS or GCP GKE (target)

## 📁 Current Project Structure

```bash
ai-taskforge/
├── apps/
│   └── api/              # Fastify backend (current)
├── infra/
│   └── k8s/              # Kubernetes manifests (k3s)
├── packages/
│   └── shared/           # Shared utilities (planned)
├── docker-compose.yml
├── turbo.json
└── README.md
```

## 🚀 Getting Started (Local)

1. Clone the repo
```bash
git clone https://github.com/Armando284/ai-task-forge.git
cd ai-task-forge
```

2. Install dependencies
```bash
pnpm install
```

3. Run locally
```bash
pnpm dev          # Backend only for now
```

### Kubernetes (k3s)

```bash
# Apply current manifests
sudo k3s kubectl apply -f infra/k8s/
```

## 🎯 Learning Objectives & Roadmap

### Phase 1 (Current)
- Basic Fastify API
- Kubernetes deployments & services with k3s

### Phase 2 (Next)
- Full CRUD for projects and tasks
- PostgreSQL integration + Prisma
- Docker optimization
- Local development with Docker Compose

### Phase 3
- AI agents integration (task breakdown, prioritization, chat)
- Next.js frontend
- Terraform for infrastructure provisioning

### Phase 4
- Complete deployment to AKS/GKE
- CI/CD pipeline
- Advanced Kubernetes features (Ingress, Secrets, Helm, GitOps)

## 📚 What I'm Learning

- Building production-grade Kubernetes manifests
- Managing stateful applications (databases) in K8s
- Monorepo architecture best practices
- Transitioning from simple deployments (Vercel/Render) to full cloud-native setups

## Roadmap

- Implement core domain (Projects, Tasks, Boards)
- Add authentication and authorization
- Integrate Generative AI features
- Add Terraform IaC
- Production deployment + documentation

## Contributing

This is a personal learning project. Issues and PRs are welcome if you'd like to collaborate.

## License

MIT License

---

**Made with ❤️ as a hands-on learning journey into modern DevOps and full-stack development.**

