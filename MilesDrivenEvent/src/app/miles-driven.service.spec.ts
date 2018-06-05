import { TestBed, inject } from '@angular/core/testing';

import { MilesDrivenService } from './miles-driven.service';

describe('MilesDrivenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MilesDrivenService]
    });
  });

  it('should be created', inject([MilesDrivenService], (service: MilesDrivenService) => {
    expect(service).toBeTruthy();
  }));
});
