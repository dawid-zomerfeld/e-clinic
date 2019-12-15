import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorScrollPatientComponent } from './doctor-scroll-patient.component';

describe('DoctorScrollPatientComponent', () => {
  let component: DoctorScrollPatientComponent;
  let fixture: ComponentFixture<DoctorScrollPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorScrollPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorScrollPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
