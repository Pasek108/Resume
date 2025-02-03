import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css',
})
export class IntroComponent {
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
