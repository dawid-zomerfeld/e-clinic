import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientMyAccountComponent } from './patient-my-account.component';

describe('PatientMyAccountComponent', () => {
  let component: PatientMyAccountComponent;
  let fixture: ComponentFixture<PatientMyAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientMyAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientMyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
