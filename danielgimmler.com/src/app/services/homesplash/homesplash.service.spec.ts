import { TestBed, inject } from '@angular/core/testing';

import { HomesplashService } from './homesplash.service';

describe('HomesplashService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomesplashService]
    });
  });

  it('should be created', inject([HomesplashService], (service: HomesplashService) => {
    expect(service).toBeTruthy();
  }));
});
