import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSubject1Component } from './test-subject1.component';

describe('TestSubject1Component', () => {
  let component: TestSubject1Component;
  let fixture: ComponentFixture<TestSubject1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSubject1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSubject1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
