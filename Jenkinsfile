pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "vaibhavrautela/jenkins-demo:latest"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/your-username/task2-jenkins-pipeline.git'
            }
        }

        stage('Build') {
            steps {
                script {
                    sh 'docker build -t $DOCKER_IMAGE ./app'
                }
            }
        }

        stage('Test') {
            steps {
                sh 'echo "Running tests (skipped actual tests)"'
            }
        }

        stage('Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                    sh 'docker push $DOCKER_IMAGE'
                }
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker run -d -p 3000:3000 $DOCKER_IMAGE'
            }
        }
    }
}
