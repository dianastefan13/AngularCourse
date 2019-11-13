import { TestBed } from '@angular/core/testing';

import { TestSubjectService } from './test-subject.service';

describe('TestSubjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestSubjectService = TestBed.get(TestSubjectService);
    expect(service).toBeTruthy();
  });
});
