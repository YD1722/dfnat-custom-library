import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DfnHijriDatePickerComponent } from './dfn-hijri-date-picker.component';

describe('DfnHijriDatePickerComponent', () => {
  let component: DfnHijriDatePickerComponent;
  let fixture: ComponentFixture<DfnHijriDatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DfnHijriDatePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DfnHijriDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
