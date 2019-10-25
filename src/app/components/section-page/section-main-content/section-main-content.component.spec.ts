import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SectionMainContentComponent} from './section-main-content.component';

describe('SectionMainContentComponent', () => {
  let component: SectionMainContentComponent;
  let fixture: ComponentFixture<SectionMainContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SectionMainContentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
