import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SortLeftSideComponent} from './sort-left-side.component';

describe('MainSideComponent', () => {
  let component: SortLeftSideComponent;
  let fixture: ComponentFixture<SortLeftSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SortLeftSideComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortLeftSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
