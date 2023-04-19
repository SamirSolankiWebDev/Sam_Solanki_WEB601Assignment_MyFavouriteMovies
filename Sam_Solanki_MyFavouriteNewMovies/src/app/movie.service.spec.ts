import { TestBed } from '@angular/core/testing';

import { movieservice } from './movie.service';

describe('movieservice', () => {
  let service: movieservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(movieservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
