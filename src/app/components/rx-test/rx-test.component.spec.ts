import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxTestComponent } from './rx-test.component';

describe('RxTestComponent', () => {
  let component: RxTestComponent;
  let fixture: ComponentFixture<RxTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
