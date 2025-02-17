import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../modules/footer/footer.component';
import { ObserveVisibilityDirective } from '../../../directives/visibility.directive';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [NgOptimizedImage, FooterComponent, ObserveVisibilityDirective, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  loading: boolean = true;

  ngOnInit(): void {
    setTimeout(this.scrollToTop, 500);
  }

  scrollToTop() {
    const page_top = document?.querySelector('#page-top');
    page_top?.scrollIntoView({ behavior: 'instant', block: 'start' });
  }

  scrollToContactForm() {
    const form = document?.querySelector('#contact-form');
    form?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  iframeLoaded() {
    this.loading = false;
  }
}
