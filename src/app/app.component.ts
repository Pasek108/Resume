import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  screen_size = window.innerWidth;
  menu_hidden = window.innerWidth < 640;

  constructor() {
    window.addEventListener('resize', () => {
      this.screen_size = window.innerWidth;
      this.menu_hidden = window.innerWidth < 640;
    });
  }

  toggleMenu() {
    if (this.screen_size >= 640) return;
    this.menu_hidden = !this.menu_hidden;
  }

  scrollToTop() {
    const form = document?.querySelector('#page-top');
    form?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    console.log(form);
  }
}
