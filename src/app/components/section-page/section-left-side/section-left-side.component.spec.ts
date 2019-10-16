import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SectionLeftSideComponent} from './section-left-side.component';

describe('MainSideComponent', () => {
  let component: SectionLeftSideComponent;
  let fixture: ComponentFixture<SectionLeftSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SectionLeftSideComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionLeftSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
