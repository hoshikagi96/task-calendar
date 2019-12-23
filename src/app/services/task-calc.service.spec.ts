import { TestBed } from '@angular/core/testing';

import { TaskCalcService } from './task-calc.service';

describe('TaskCalcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskCalcService = TestBed.get(TaskCalcService);
    expect(service).toBeTruthy();
  });
});
