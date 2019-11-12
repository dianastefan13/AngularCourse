import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHttpServiceComponent } from './test-http-service.component';

describe('TestHttpServiceComponent', () => {
  let component: TestHttpServiceComponent;
  let fixture: ComponentFixture<TestHttpServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHttpServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHttpServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
