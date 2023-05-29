import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWithFormControlComponent } from './form-with-form-control.component';

describe('FormWithFormControlComponent', () => {
  let component: FormWithFormControlComponent;
  let fixture: ComponentFixture<FormWithFormControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormWithFormControlComponent]
    });
    fixture = TestBed.createComponent(FormWithFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
