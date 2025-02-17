import { Component, OnInit } from '@angular/core';
import { SlicePipe } from '@angular/common';

import { Project } from '../../../models/project';
import projects_data from '../../../assets/projects_data.json';

import { FilterComponent } from './filter/filter.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ProjectComponent } from './project/project.component';
import { FooterComponent } from '../../modules/footer/footer.component';

@Component({
  selector: 'app-projects',
  imports: [FilterComponent, PaginationComponent, ProjectComponent, FooterComponent, SlicePipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit {
  projects_data: Project[] = [];
  skills: string[] = [];
  filtered_projects: Project[] = [];

  page: number = 0;
  page_size: number = 10;
  max_page: number = Math.ceil(this.filtered_projects.length / this.page_size);
  range: { start: number; end: number } = { start: 1, end: this.page_size };

  constructor() {
    let skills_ids: Set<number> = new Set();

    this.projects_data = projects_data.projects.map((project_data) => {
      let project: Project = {
        name: project_data.name,
        images: project_data.images,
        description: project_data.description,
        live_version: project_data.live_version,
        github_repo: project_data.github_repo,
        skills: project_data.skills.map((skill_id) => {
          skills_ids.add(skill_id);
          return projects_data.skills[+skill_id];
        }),
        group: projects_data.groups[project_data.group],
        hidden: project_data.hidden,
      };

      return project;
    });

    this.skills = [...skills_ids].sort((a, b) => a - b).map((skill_id) => projects_data.skills[+skill_id]);
    this.filterChanged(this.projects_data.map((project) => project));
  }

  ngOnInit() {
    setTimeout(this.scrollToTop, 500);
  }

  scrollToTop() {
    const page_top = document?.querySelector('#page-top');
    page_top?.scrollIntoView({ behavior: 'instant', block: 'start' });
  }

  scrollToProjectsTop() {
    const projects_top = document?.querySelector('#projects-top');
    const position_top = projects_top?.getBoundingClientRect().top || 0;

    const header_height = document?.querySelector('#header')?.clientHeight || 0;
    const main_container = document?.querySelector('#main-container');
    main_container?.scrollTo(0, position_top - header_height + main_container.scrollTop);
  }

  filterChanged(filtered_projects: Project[]) {
    this.filtered_projects = filtered_projects;

    this.page = 0;
    this.max_page = Math.ceil(this.filtered_projects.length / this.page_size);
    this.range.start = this.filtered_projects.length == 0 ? 0 : this.page * this.page_size + 1;
    this.range.end = Math.min((this.page + 1) * this.page_size, this.filtered_projects.length);
  }

  paginationChanged(pagination: { page: number; page_size: number; max_page: number; range: { start: number; end: number } }) {
    this.page = pagination.page;
    this.page_size = pagination.page_size;
    this.max_page = pagination.max_page;
    this.range = pagination.range;

    this.scrollToProjectsTop();
  }
}
