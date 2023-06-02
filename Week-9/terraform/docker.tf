provider "docker" {}

# Create the image in the environment
resource "docker_image" "image" {
  name = "ubuntu:latest"
}

# Create a custom network
resource "docker_network" "private_network" {
  name = "my_private_network"
  ipam_config {
    subnet = "172.110.0.0/16"
  }
}

# Create a volume
resource "docker_volume" "private_volume" {
  name = "private_volume"
}

# Start a container
resource "docker_container" "backend" {
  name  = "backend_container"
  image = docker_image.image.name
  networks_advanced {
    name = docker_network.private_network.name
  }
#   volumes {
#     volume_name = docker_volume.private_volume.id
#   }
}