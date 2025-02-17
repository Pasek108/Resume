import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css',
})
export class IntroComponent {
  scrollToWhatIDo() {
    const what_i_do_section = document?.querySelector('#what-i-do-section');
    what_i_do_section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scrollToSelectedProjects() {
    const selected_projects_section = document?.querySelector('#selected-projects-section');
    selected_projects_section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scrollToSkills() {
    const skills_section = document?.querySelector('#skills-section');
    skills_section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scrollToEducation() {
    const education_section = document?.querySelector('#education-section');
    education_section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scrollToExperience() {
    const experience_section = document?.querySelector('#experience-section');
    experience_section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
