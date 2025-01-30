import { Component} from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  scrollToTop() {
    const form = document?.querySelector("#page-top");
    form?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    console.log(form)
  }
}
