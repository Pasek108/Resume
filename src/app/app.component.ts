import { Component } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [slideInAnimation],
})
export class AppComponent {
  screen_size = window.innerWidth;
  menu_hidden = window.innerWidth < 640;
  scroll_x = 0;
  scroll_y = 0;
  max_scroll = 0;
  scroll_percent = 0;

  constructor(private contexts: ChildrenOutletContexts) {
    window.addEventListener('resize', () => {
      this.screen_size = window.innerWidth;
      this.menu_hidden = window.innerWidth < 640;
    });
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  toggleMenu() {
    if (this.screen_size >= 640) return;
    this.menu_hidden = !this.menu_hidden;
  }

  scrollToTop(shouldScroll: boolean): void {
    if (!shouldScroll) return;

    const page_top = document?.querySelector('#page-top');
    page_top?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  onScroll() {
    const main_container = document?.querySelector<HTMLElement>('#main-container');
    const height = main_container?.offsetHeight || 0;
    this.scroll_x = main_container?.scrollLeft || 0;
    this.scroll_y = main_container?.scrollTop || 0;
    this.max_scroll = main_container?.scrollHeight || 0;
    this.scroll_percent = Math.ceil((this.scroll_y * 100) / (this.max_scroll - height));
  }
}
