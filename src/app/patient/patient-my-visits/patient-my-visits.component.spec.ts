import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientMyVisitsComponent } from './patient-my-visits.component';

describe('PatientMyVisitsComponent', () => {
  let component: PatientMyVisitsComponent;
  let fixture: ComponentFixture<PatientMyVisitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientMyVisitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientMyVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
