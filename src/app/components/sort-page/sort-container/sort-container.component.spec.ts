import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SortContainerComponent} from './sort-container.component';

describe('MainComponent', () => {
  let component: SortContainerComponent;
  let fixture: ComponentFixture<SortContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SortContainerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
