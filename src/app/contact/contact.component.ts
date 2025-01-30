import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [NgOptimizedImage],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  loading: boolean = true;

  scrollToContactForm() {
    const form = document?.querySelector("#contact-form");
    form?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  iframeLoaded() {
    this.loading = false
  }
}
