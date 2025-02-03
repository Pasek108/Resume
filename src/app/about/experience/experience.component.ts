import { Component } from '@angular/core';
import { ObserveVisibilityDirective } from '../../../directives/visibility.directive';

@Component({
  selector: 'app-experience',
  imports: [ObserveVisibilityDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  scrollToExperience() {
    const experience_section = document?.querySelector('#experience-section');
    experience_section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
