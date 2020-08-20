import { TestBed } from '@angular/core/testing';

import { DfnHijriDatePickerService } from './dfn-hijri-date-picker.service';

describe('DfnHijriDatePickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DfnHijriDatePickerService = TestBed.get(DfnHijriDatePickerService);
    expect(service).toBeTruthy();
  });
});
