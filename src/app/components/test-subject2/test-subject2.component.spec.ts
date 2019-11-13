import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSubject2Component } from './test-subject2.component';

describe('TestSubject2Component', () => {
  let component: TestSubject2Component;
  let fixture: ComponentFixture<TestSubject2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSubject2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSubject2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
