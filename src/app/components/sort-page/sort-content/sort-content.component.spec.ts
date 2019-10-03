import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SortContentComponent} from './sort-content.component';

describe('MainContentComponent', () => {
  let component: SortContentComponent;
  let fixture: ComponentFixture<SortContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SortContentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
