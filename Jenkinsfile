pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        sh 'docker build -t cloud_demo .'
        sh 'docker tag cloud_demo $DOCKER_BFLASK_IMAGE'
      }
    }
    stage('Deploy') {
      steps {
        withCredentials([usernamePassword(credentialsId: "${DOCKER_REGISTRY_CREDS}", passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
          sh "echo \$DOCKER_PASSWORD | docker login -u \$DOCKER_USERNAME --password-stdin docker.io"
          sh 'docker push $DOCKER_BFLASK_IMAGE'
        }
        script {
            sh "docker run -p 4000:4000 -d $DOCKER_BFLASK_IMAGE"
      }
    }
  }
  post {
    always {
      sh 'docker logout'
    }
  }
}