pipeline {
    agent any
    environment {
        MYSQL_HOST = 'mysql-db'
        MYSQL_PORT = '3306'
    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/yourusername/my-jenkins-project.git'  // Replace with your GitHub repo
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build('my-app')
                }
            }
        }
        stage('Run Containers') {
            steps {
                script {
                    docker.composeUp()  // Starts both the app and mysql containers
                }
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}
