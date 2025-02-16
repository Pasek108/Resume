import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';
import projects_data from '../../assets/projects_data.json';
import { ProjectComponent } from '../modules/project/project.component';
import { FooterComponent } from '../modules/footer/footer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-projects',
  imports: [ProjectComponent, FooterComponent, FormsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit {
  projects_data: Project[] = [];
  filtered_projects: Project[] = [];

  skills: string[] = [];
  filtered_skills: string[] = [];

  skills_conjunction: string = 'one';
  search_skills: string[] = [];
  search_text: string = '';
  search_group: string = 'all';

  constructor() {
    let skills_ids: Set<number> = new Set();

    this.projects_data = projects_data.projects.map((project_data) => {
      project_data.skills.forEach((skill_id) => skills_ids.add(skill_id));

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

    this.skills = [...skills_ids].sort((a, b) => a-b).map((skill_id) => projects_data.skills[+skill_id]);
    this.resetFilter();
  }

  ngOnInit() {
    setTimeout(this.scrollToTop, 500);
  }

  scrollToTop() {
    const page_top = document?.querySelector('#page-top');
    page_top?.scrollIntoView({ behavior: 'instant', block: 'start' });
  }

  addSkill(skill: string) {
    this.search_skills.push(skill);
    this.filtered_skills = this.skills.filter((skill) => !this.search_skills.includes(skill));
  }

  removeSkill(skill: string) {
    this.search_skills = this.search_skills.filter((search_skill) => search_skill != skill);
    this.filtered_skills = this.skills.filter((skill) => !this.search_skills.includes(skill));
  }

  clearSkills() {
    this.search_skills = [];
  }

  applyFilter() {
    this.filtered_projects = this.projects_data.filter((project) => {
      if (
        this.search_group != 'all' &&
        project.group != this.search_group
      ) return false;

      if (
        !project.description.toLowerCase().includes(this.search_text.toLowerCase()) &&
        !project.name.toLowerCase().includes(this.search_text.toLowerCase())
      ) return false;

      if (
        this.search_skills.length > 0 &&
        this.skills_conjunction == 'one' &&
        ! this.search_skills.some((skill) => project.skills.includes(skill))
      ) return false;

      if (
        this.search_skills.length > 0 &&
        this.skills_conjunction == 'all' &&
        !this.search_skills.every((skill) => project.skills.includes(skill))
      ) return false;

      return true;
    });
  }

  resetFilter() {
    this.filtered_projects = this.projects_data.map((project) => project);
    this.filtered_skills = this.skills.filter((skill) => !this.search_skills.includes(skill));

    this.skills_conjunction = 'one';
    this.search_skills = [];
    this.search_text = '';
    this.search_group = 'all';
  }
}
