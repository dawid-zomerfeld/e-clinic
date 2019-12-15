import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorScrollVisitComponent } from './doctor-scroll-visit.component';

describe('DoctorScrollVisitComponent', () => {
  let component: DoctorScrollVisitComponent;
  let fixture: ComponentFixture<DoctorScrollVisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorScrollVisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorScrollVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
