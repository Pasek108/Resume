import { NgClass, NgOptimizedImage, NgStyle, SlicePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  imports: [NgClass, NgStyle, NgOptimizedImage],
  templateUrl: './image-carousel.component.html',
  styleUrl: './image-carousel.component.css',
})
export class ImageCarouselComponent implements OnInit {
  @Input() images: string[] = [];
  interval: ReturnType<typeof setInterval> | undefined = undefined;
  active_image = 0;

  ngOnInit(): void {
    //this.interval = setInterval(this.cycleImages.bind(this), 6000);
  }

  nextImage() {
    this.active_image = Math.min(this.active_image + 1, this.images.length - 1);
    clearInterval(this.interval);
    this.ngOnInit();
  }

  prevImage() {
    this.active_image = Math.max(this.active_image - 1, 0);
    clearInterval(this.interval);
    this.ngOnInit();
  }

  showImage(id: number) {
    this.active_image = id;
    clearInterval(this.interval);
    this.ngOnInit();
  }

  cycleImages() {
    this.active_image = (this.active_image + 1) % this.images.length;
  }
}
