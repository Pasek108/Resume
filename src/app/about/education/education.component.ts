import { Component } from '@angular/core';
import { ObserveVisibilityDirective } from '../../../directives/visibility.directive';

@Component({
  selector: 'app-education',
  imports: [ObserveVisibilityDirective],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {
  scrollToEducation() {
    const education_section = document?.querySelector('#education-section');
    education_section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
