import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../../../../models/project';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  @Input() projects_data: Project[] = [];
  @Input() skills: string[] = [];
  @Input() filtered_projects: Project[] = [];
  @Input() filtered_skills: string[] = [];

  @Output() onChange = new EventEmitter<Project[]>();

  skills_conjunction: string = 'one';
  search_skills: string[] = [];
  search_text: string = '';
  search_group: string = 'all';

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

  resetFilter() {
    this.filtered_projects = this.projects_data.map((project) => project);
    this.filtered_skills = this.skills.filter((skill) => !this.search_skills.includes(skill));

    this.skills_conjunction = 'one';
    this.search_skills = [];
    this.search_text = '';
    this.search_group = 'all';

    this.onChange.emit(this.filtered_projects);
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

    this.onChange.emit(this.filtered_projects);
  }
}
