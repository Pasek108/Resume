import { Component } from '@angular/core';
import { ObserveVisibilityDirective } from '../../../../directives/visibility.directive';
import { Project } from '../../../../models/project';
import projects_data from '../../../../assets/projects_data.json';
import { NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-selected-projects',
  imports: [ObserveVisibilityDirective, NgOptimizedImage, RouterModule],
  templateUrl: './selected-projects.component.html',
  styleUrl: './selected-projects.component.css',
})
export class SelectedProjectsComponent {
  projects_data: Project[] = [];

  constructor() {
    this.projects_data = projects_data.projects.slice(0, 6).map((project_data) => {
      let project: Project = {
        name: project_data.name,
        images: project_data.images,
        description: project_data.description,
        live_version: project_data.live_version,
        github_repo: project_data.github_repo,
        skills: project_data.skills.map((skill_id) => projects_data.skills[+skill_id]),
        group: projects_data.groups[project_data.group],
        hidden: project_data.hidden,
      };

      return project;
    });
  }
}
