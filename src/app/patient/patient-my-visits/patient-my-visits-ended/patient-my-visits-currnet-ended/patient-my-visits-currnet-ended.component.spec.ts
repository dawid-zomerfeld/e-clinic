import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientMyVisitsCurrnetEndedComponent } from './patient-my-visits-currnet-ended.component';

describe('PatientMyVisitsCurrnetEndedComponent', () => {
  let component: PatientMyVisitsCurrnetEndedComponent;
  let fixture: ComponentFixture<PatientMyVisitsCurrnetEndedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientMyVisitsCurrnetEndedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientMyVisitsCurrnetEndedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
