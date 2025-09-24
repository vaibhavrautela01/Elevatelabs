# Jenkins CI/CD Pipeline with Docker

## Steps
1. Install Jenkins and Docker.
2. Create a new Jenkins pipeline job.
3. Add GitHub repo URL in the pipeline.
4. Add DockerHub credentials in Jenkins (ID: `dockerhub-creds`).
5. Run pipeline → it will:
   - Checkout code
   - Build Docker image
   - Run tests
   - Push to DockerHub
   - Deploy container

## Run locally
```bash
cd app
docker build -t myapp .
docker run -p 3000:3000 myapp
