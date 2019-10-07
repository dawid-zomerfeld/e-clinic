import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmployeeDoctorsComponent } from './admin-employee-doctors.component';

describe('AdminEmployeeDoctorsComponent', () => {
  let component: AdminEmployeeDoctorsComponent;
  let fixture: ComponentFixture<AdminEmployeeDoctorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEmployeeDoctorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEmployeeDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
