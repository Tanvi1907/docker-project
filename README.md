🚀 Docker + Kubernetes Full DevOps Project
📌 Project Overview

This project demonstrates a complete end-to-end DevOps workflow using Docker, Docker Compose, Kubernetes (Minikube), and AWS EC2.

It includes:

Containerization of Node.js application
Multi-container setup using Docker Compose
Kubernetes deployment with scaling & rolling updates
Cloud deployment on AWS EC2
🛠️ Tech Stack
Docker 🐳
Docker Compose
Kubernetes (Minikube) ☸️
Node.js (Express)
PostgreSQL 🐘
Redis ⚡
AWS EC2 ☁️
Git & GitHub
📁 Project Architecture
Code → Docker Image → Docker Hub → EC2 / Kubernetes → Running Application
⚙️ Local Setup (Docker Compose)
Run project locally:
docker compose up -d
Services:
App → http://localhost:3000
PostgreSQL → db:5432
Redis → redis:6379
🐳 Docker Image

Application image pushed to Docker Hub:

tanvirastogi19/docker-project-app:v1
☁️ AWS EC2 Deployment
EC2 Setup:
Ubuntu Server on AWS EC2
Docker installed
Docker Compose configured
Run on EC2:
docker compose up -d
Access Application:
http://<EC2-PUBLIC-IP>:3000
☸️ Kubernetes Setup (Minikube)
Start cluster:
minikube start --driver=docker
Check nodes:
kubectl get nodes
🚀 Kubernetes Deployment
Apply deployment:
kubectl apply -f deployment.yaml
Expose service:
kubectl expose deployment myapp-deployment --type=NodePort --port=3000
Access app:
minikube service myapp-deployment
📈 Scaling (Auto Scaling Simulation)

Scale pods from 2 → 5:

kubectl scale deployment myapp-deployment --replicas=5

Features achieved:

Load balancing
Self-healing
High availability
🔄 Rolling Updates

Deploy new version without downtime:

kubectl set image deployment/myapp-deployment myapp=tanvirastogi19/docker-project-app:v2

Rollback if needed:

kubectl rollout undo deployment/myapp-deployment
📊 Key Features Implemented
Docker containerization
Multi-container orchestration (Docker Compose)
Kubernetes deployments
Service exposure using NodePort
Auto scaling (replicas)
Rolling updates & rollback
Cloud deployment on AWS EC2
🧠 What I Learned
Real-world DevOps workflow
Container orchestration with Kubernetes
Cloud deployment using AWS EC2
CI/CD basics understanding
Production-level deployment practices
🎯 Final Result
Code → Docker → Kubernetes / EC2 → Live Production-like System
👨‍💻 Author

Tanvi Rastogi
