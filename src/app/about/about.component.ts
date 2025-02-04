import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../modules/footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ObserveVisibilityDirective } from '../../directives/visibility.directive';
import { WhatIDoComponent } from './what-i-do/what-i-do.component';
import { SelectedProjectsComponent } from './selected-projects/selected-projects.component';

@Component({
  selector: 'app-about',
  imports: [NgStyle, ObserveVisibilityDirective, FooterComponent, IntroComponent, SkillsComponent, EducationComponent, ExperienceComponent, WhatIDoComponent, SelectedProjectsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  bg_x = 900;
  bg_y = 50;
  mouse_x = 0;
  mouse_y = 0;
  scroll_x = 0;
  scroll_y = 0;

  ngOnInit(): void {
    setTimeout(this.scrollToTop, 500);

    const main_container = document?.querySelector('#main-container');
    main_container?.addEventListener('scroll', this.onScroll.bind(this));
  }

  scrollToTop() {
    const page_top = document?.querySelector('#page-top');
    page_top?.scrollIntoView({ behavior: 'instant', block: 'start' });
  }

  onScroll() {
    const main_container = document?.querySelector('#main-container');
    this.scroll_x = main_container?.scrollLeft || 0;
    this.scroll_y = main_container?.scrollTop || 0;

    this.updateBackground();
  }

  onMouseMove(evt: MouseEvent) {
    this.mouse_x = evt.clientX;
    this.mouse_y = evt.clientY;

    this.onScroll();
  }

  updateBackground() {
    this.bg_x = this.mouse_x + this.scroll_x;
    this.bg_y = this.mouse_y + this.scroll_y - 80;
  }
}
