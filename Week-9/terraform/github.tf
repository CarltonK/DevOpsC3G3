provider "github" {
  token = var.token
}

resource "github_repository" "example" {
  name        = "my-group3-repo"
  description = "My awesome codebase"

  visibility = "public"
}

# Add a collaborator to a repository
resource "github_repository_collaborator" "a_repo_collaborator" {
  count      = length(var.developers)
  repository = github_repository.example.name
  username   = var.developers[count.index]
  permission = "admin"
}
