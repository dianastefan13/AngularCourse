import { TestBed } from '@angular/core/testing';

import { PlayWithTsService } from './play-with-ts.service';

describe('PlayWithTsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayWithTsService = TestBed.get(PlayWithTsService);
    expect(service).toBeTruthy();
  });
});
