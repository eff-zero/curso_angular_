import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMessagesComponent } from './add-messages.component';

describe('AddMessagesComponent', () => {
  let component: AddMessagesComponent;
  let fixture: ComponentFixture<AddMessagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMessagesComponent]
    });
    fixture = TestBed.createComponent(AddMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
