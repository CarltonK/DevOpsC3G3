variable "machine_type" {
  type        = string
  description = "This is the machine type in our organization"
  default     = "g1-small"
}

variable "boot_image" {
  type    = string
  default = "debian-cloud/debian-11"
}

variable "compute_instance_names" {
  type = list(string)
  default = [
    "ansible-server",
    "ansible-client-one",
    "ansible-client-two",
  ]
}

variable "token" {
  type    = string
  default = ""
}

variable "project_id" {
  type    = string
  default = ""
}

variable "developers" {
  type = list(string)
  default = [ "" ]
}
