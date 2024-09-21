class ProjectResponse {
  constructor(id, company, project_name, project_progress, start_project) {
    this.id = id;
    this.company = company;
    this.project_name = project_name;
    this.project_progress = project_progress;
    this.start_project = start_project;
  }
}

export default ProjectResponse;
