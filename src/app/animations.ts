import { animate, animateChild, group, query, sequence, style, transition, trigger } from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('* => *', [
    query(
      ':enter',
      [
        style({
          opacity: 0,
          position: 'absolute',
          top: '0px',
          height: '100%',
          width: '100%',
          overflowY: 'scroll',
        }),
      ],
      { optional: true },
    ),
    query(
      ':leave',
      [
        sequence([
          style({
            opacity: 1,
            height: '100%',
            width: '100%',
            overflowY: 'scroll',
          }),
          animate('0.25s', style({ opacity: 0 })),
          animate('0.25s', style({ display: 'none' })),
        ]),
      ],
      { optional: true },
    ),
    query(
      ':enter',
      [
        style({
          opacity: 0,
          position: 'relative',
          height: '100%',
          width: '100%',
          overflowY: 'scroll',
        }),
        animate('0.25s', style({ opacity: 1 })),
      ],
      { optional: true },
    ),
  ]),
]);
