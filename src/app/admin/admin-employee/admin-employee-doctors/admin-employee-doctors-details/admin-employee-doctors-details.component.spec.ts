import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmployeeDoctorsDetailsComponent } from './admin-employee-doctors-details.component';

describe('AdminEmployeeDoctorsDetailsComponent', () => {
  let component: AdminEmployeeDoctorsDetailsComponent;
  let fixture: ComponentFixture<AdminEmployeeDoctorsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEmployeeDoctorsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEmployeeDoctorsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
