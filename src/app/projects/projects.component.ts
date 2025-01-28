import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';
import projects_data from '../../assets/projects_data.json';
import { ProjectComponent } from '../modules/project/project.component';

@Component({
  selector: 'app-projects',
  imports: [ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent  implements OnInit {
  projects_data: Project[] = [];

  ngOnInit() {
    this.projects_data = projects_data.projects.map((project_data) => {
      let project: Project = {
        name: project_data.name,
        images: project_data.images,
        description: project_data.description,
        live_version: project_data.live_version,
        github_repo: project_data.github_repo,
        skills: project_data.skills.map(skill_id => projects_data.skills[+skill_id]),
        group: projects_data.groups[project_data.group],
        hidden: project_data.hidden,
      };

      return project;
    });
  }
}
