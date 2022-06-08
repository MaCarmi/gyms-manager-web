import { TestBed } from '@angular/core/testing';

import { MngService } from './mng.service';

describe('MngService', () => {
  let service: MngService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MngService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
