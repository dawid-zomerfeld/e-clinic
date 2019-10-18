import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmployeeRecepcionistsDetailsComponent } from './admin-employee-recepcionists-details.component';

describe('AdminEmployeeRecepcionistsDetailsComponent', () => {
  let component: AdminEmployeeRecepcionistsDetailsComponent;
  let fixture: ComponentFixture<AdminEmployeeRecepcionistsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEmployeeRecepcionistsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEmployeeRecepcionistsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
