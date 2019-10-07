import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBannedDoctorComponent } from './admin-banned-doctor.component';

describe('AdminBannedDoctorComponent', () => {
  let component: AdminBannedDoctorComponent;
  let fixture: ComponentFixture<AdminBannedDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBannedDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBannedDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
