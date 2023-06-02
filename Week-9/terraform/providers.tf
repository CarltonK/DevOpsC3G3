terraform {
  required_providers {

    docker = {
      source  = "kreuzwerker/docker"
      version = "3.0.2"
    }

    google = {
      source = "hashicorp/google"
      version = "4.67.0"
    }

    github = {
      source = "integrations/github"
      version = "5.26.0"
    }
  }
}
