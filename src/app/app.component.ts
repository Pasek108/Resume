import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  menu_hidden = true;
  screen_size = window.innerWidth;

  constructor() {
    window.addEventListener('resize', () => {
      this.screen_size = window.innerWidth;
      if (this.screen_size >= 640) this.menu_hidden = false;
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
