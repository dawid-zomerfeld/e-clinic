import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientMyVisitsEndedComponent } from './patient-my-visits-ended.component';

describe('PatientMyVisitsEndedComponent', () => {
  let component: PatientMyVisitsEndedComponent;
  let fixture: ComponentFixture<PatientMyVisitsEndedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientMyVisitsEndedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientMyVisitsEndedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
