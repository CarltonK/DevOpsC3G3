provider "google" {
  project = var.project_id
}

resource "google_compute_instance" "instances" {
  count        = length(var.compute_instance_names)
  name         = var.compute_instance_names[count.index]
  machine_type = var.machine_type
  zone         = "us-central1-a"

  tags = ["foo", "bar"]

  boot_disk {
    initialize_params {
      image = var.boot_image
      labels = {
        my_label = "value"
      }
    }
  }

  network_interface {
    network = "default"

    access_config {
      // Ephemeral public IP
    }
  }
}

