import { NgStyle } from '@angular/common';
import { Component} from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [NgStyle],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  bg_x = 900;
  bg_y = 50;
  mouse_x = 0;
  mouse_y = 0;
  scroll_x = 0;
  scroll_y = 0;

  onScroll() {
    const main_container = document?.querySelector("#main-container");
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
