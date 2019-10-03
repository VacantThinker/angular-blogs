import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IndexPageNotFoundComponent} from './index-page-not-found.component';

describe('IndexPagenotfoundComponent', () => {
  let component: IndexPageNotFoundComponent;
  let fixture: ComponentFixture<IndexPageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndexPageNotFoundComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
