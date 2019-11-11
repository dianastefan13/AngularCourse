import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFormsComponentComponent } from './test-forms-component.component';

describe('TestFormsComponentComponent', () => {
  let component: TestFormsComponentComponent;
  let fixture: ComponentFixture<TestFormsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFormsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFormsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
