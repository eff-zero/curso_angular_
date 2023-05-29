import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWithFormGroupComponent } from './form-with-form-group.component';

describe('FormWithFormGroupComponent', () => {
  let component: FormWithFormGroupComponent;
  let fixture: ComponentFixture<FormWithFormGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormWithFormGroupComponent]
    });
    fixture = TestBed.createComponent(FormWithFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
