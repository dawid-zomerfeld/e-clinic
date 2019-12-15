import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorScrollVisitDetailsComponent } from './doctor-scroll-visit-details.component';

describe('DoctorScrollVisitDetailsComponent', () => {
  let component: DoctorScrollVisitDetailsComponent;
  let fixture: ComponentFixture<DoctorScrollVisitDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorScrollVisitDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorScrollVisitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
