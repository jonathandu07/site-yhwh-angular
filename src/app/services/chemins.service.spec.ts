import { TestBed } from '@angular/core/testing';

import { CheminsService } from './chemins.service';

describe('CheminsService', () => {
  let service: CheminsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheminsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
