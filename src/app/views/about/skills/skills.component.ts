import { Component } from '@angular/core';
import { ObserveVisibilityDirective } from '../../../../directives/visibility.directive';

@Component({
  selector: 'app-skills',
  imports: [ObserveVisibilityDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  show_more_skills = false;

  showMoreSkills() {
    this.show_more_skills = true;
    this.scrollToSkills();
  }

  scrollToSkills() {
    const skills_section = document?.querySelector('#skills-section');
    skills_section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
