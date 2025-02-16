import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2 } from '@angular/core';
import { animate, AnimationBuilder, AnimationPlayer, style } from '@angular/animations';
import { Subject, Subscription } from 'rxjs';

@Directive({
  selector: '[observeVisibility]',
})
export class ObserveVisibilityDirective implements OnDestroy, OnInit, AfterViewInit {
  // reverse show styles
  @Input('hide') hideStyles: any = { opacity: '0', transform: 'translateY(20px)' };
  // default show styles
  @Input('show') showStyles: any = { opacity: '1', transform: 'translateY(0)' };
  // animation duration
  @Input() duration: number = 400;
  // animation delay
  @Input() delay: number = 0;
  // animation easing
  @Input() easing: '' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' = '';
  // what percentage should be visible before triggering
  @Input() threshold: number = 0;
  // root margin
  @Input() rootMargin: string = '-10% 0% -10% 0%';

  // emit event when element enters intersects
  @Output() intersection = new EventEmitter<ElementRef>();

  // animation
  animation: AnimationPlayer | undefined;

  // intersection observer
  private _observer: IntersectionObserver | null | undefined;

  // intersection trigger
  private _intersect$ = new Subject<void>();

  constructor(
    private _element: ElementRef,
    private _renderer: Renderer2,
    private _builder: AnimationBuilder,
  ) {}

  ngOnInit() {
    this.setHideStyles();
    this.createObserver();
    this.createAnimation();
    this.startObserving();
  }

  ngAfterViewInit() {
    this._intersect$.subscribe(() => {
      const target = this._element.nativeElement;
      this.animation?.play();
      this.intersection.emit(this._element.nativeElement);
      // cancel after firing once
      this._observer?.unobserve(target);
    });
  }

  // create observer
  createObserver() {
    const options = {
      root: document?.querySelector('#main-container'), // parent element that is being scrolled, default is document
      rootMargin: this.rootMargin,
      threshold: this.threshold,
    };

    this._observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= this.threshold) {
          this._intersect$.next();
        }
      });
    }, options);
  }

  // hide element
  setHideStyles() {
    for (const style of Object.keys(this.hideStyles)) {
      this._renderer.setStyle(this._element.nativeElement, style, this.hideStyles[style]);
    }
  }

  // create animation
  createAnimation() {
    const factory = this._builder.build([animate(`${this.duration}ms ${this.delay}ms ${this.easing}`.trim(), style(this.showStyles))]);
    this.animation = factory.create(this._element.nativeElement);
  }

  // start observing
  startObserving() {
    this._observer?.observe(this._element.nativeElement);
  }

  ngOnDestroy() {
    if (this._observer) {
      this._observer.disconnect();
      this._observer = null;
    }
    this._intersect$.complete();
  }
}
