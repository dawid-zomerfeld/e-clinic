import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientSearchVisitComponent } from './patient-search-visit.component';

describe('PatientSearchVisitComponent', () => {
  let component: PatientSearchVisitComponent;
  let fixture: ComponentFixture<PatientSearchVisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientSearchVisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientSearchVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
