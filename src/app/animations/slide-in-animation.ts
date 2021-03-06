import {animate, animateChild, AnimationMetadata, group, query, style, transition, trigger} from '@angular/animations';

const sectionToChildStep: AnimationMetadata | AnimationMetadata[] = [
  style({position: 'relative'}),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%'
    })
  ]),
  query(':enter', [
    style({left: '-100%'})
  ]),
  query(':leave', animateChild()),
  group([
    query(':leave', [
      animate('200ms ease-out', style({left: '100%'}))
    ]),
    query(':enter', [
      animate('300ms ease-out', style({left: '0%'}))
    ])
  ]),
  query(':enter', animateChild()),
];

export const slideInAnimation =
  trigger('routeAnimations', [

    transition('HomePage <=> SectionPage', [
      style({position: 'relative'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({left: '-50%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({left: '50%'}))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),

    transition('SectionPage <=> SectionLeftPage', sectionToChildStep),
    transition('SectionLeftPage <=> SectionContentPage', sectionToChildStep),

  ]);
