import { TestBed } from '@angular/core/testing';

import { AddMyMoviesService } from './add-my-movies.service';

describe('AddMyMoviesService', () => {
  let service: AddMyMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddMyMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
