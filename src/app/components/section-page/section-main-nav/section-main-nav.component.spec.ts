import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SectionMainNavComponent} from './section-main-nav.component';

describe('MainContentComponent', () => {
  let component: SectionMainNavComponent;
  let fixture: ComponentFixture<SectionMainNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SectionMainNavComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionMainNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
