import { TestBed } from '@angular/core/testing';

import { ServiceService } from './service.service';

describe('ServiceService', () => {
  let service: ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceService);
  });

  describe('Calculate',()=>{
    it('res should be greater than 0 ',()=>{
    let res =  service.calculate(2,4)
    expect(res).toBeGreaterThanOrEqual(0)
    })
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
