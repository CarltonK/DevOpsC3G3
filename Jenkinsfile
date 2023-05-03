pipeline {
    agent any
    
    tools {nodejs "node"}

    stages {
        stage('Start') {
            steps {
                echo 'The build has started'
            }
        }
        stage('Clone the repository') {
            steps {
                git url: 'https://github.com/CarltonK/yolo-testing-g3.git', branch: 'master'
            }
        }
        stage('Docker is installed') {
            steps {
                sh '''
                   docker --version
                   '''
            }
        }
        stage('End') {
            steps {
                echo 'The build has ended'
            }
        }
    }
}