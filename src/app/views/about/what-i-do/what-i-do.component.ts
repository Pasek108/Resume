import { Component } from '@angular/core';
import { ObserveVisibilityDirective } from '../../../../directives/visibility.directive';

@Component({
  selector: 'app-what-i-do',
  imports: [ObserveVisibilityDirective],
  templateUrl: './what-i-do.component.html',
  styleUrl: './what-i-do.component.css',
})
export class WhatIDoComponent {}
