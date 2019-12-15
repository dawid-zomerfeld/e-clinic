import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientMyVisitsCurrnetComponent } from './patient-my-visits-currnet.component';

describe('PatientMyVisitsCurrnetComponent', () => {
  let component: PatientMyVisitsCurrnetComponent;
  let fixture: ComponentFixture<PatientMyVisitsCurrnetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientMyVisitsCurrnetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientMyVisitsCurrnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
