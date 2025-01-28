import { NgStyle } from '@angular/common';
import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  @ViewChild("logo") logo: ElementRef | undefined;
  bg_x = 900;
  bg_y = 50;


  ngAfterViewInit() {
    const {x, y} = this.logo?.nativeElement.getBoundingClientRect();
    this.bg_x = x + 45;
    this.bg_y = y + 40;
  }

  updateBackground(evt: MouseEvent) {
    this.bg_x = evt.clientX
    this.bg_y = evt.clientY
  }
}
