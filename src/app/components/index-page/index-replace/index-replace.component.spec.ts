import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IndexReplaceComponent} from './index-replace.component';

describe('RouterComponent', () => {
  let component: IndexReplaceComponent;
  let fixture: ComponentFixture<IndexReplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndexReplaceComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexReplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
