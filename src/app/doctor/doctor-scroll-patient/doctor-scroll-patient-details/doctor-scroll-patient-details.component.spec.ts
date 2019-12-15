import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorScrollPatientDetailsComponent } from './doctor-scroll-patient-details.component';

describe('DoctorScrollPatientDetailsComponent', () => {
  let component: DoctorScrollPatientDetailsComponent;
  let fixture: ComponentFixture<DoctorScrollPatientDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorScrollPatientDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorScrollPatientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
