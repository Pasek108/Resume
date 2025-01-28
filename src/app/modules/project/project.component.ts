import { Component, Input } from '@angular/core';
import { Project } from '../../models/project';
import { ImageCarouselComponent } from "../image-carousel/image-carousel.component";

@Component({
  selector: 'app-project',
  imports: [ImageCarouselComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input() id: number = 0;
  @Input() project: Project = {
    name: '',
    images: [],
    description: '',
    live_version: '',
    github_repo: '',
    skills: [],
    group: '',
    hidden: false
  };
}
