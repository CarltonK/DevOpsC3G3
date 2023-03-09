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
                git url: 'https://github.com/CarltonK/DevOpsC3G3.git', branch: 'main'
            }
        }
        stage('Install dependencies') {
            steps {
                sh '''
                   cd Week-5
                   npm install
                   '''
            }
        }
        stage('Deploy to Render') {
            steps {
                sh '''
                   curl -X GET https://api.render.com/deploy/srv-cfqrsipgp3joa8gevua0?key=2TNnrkN-rhA
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