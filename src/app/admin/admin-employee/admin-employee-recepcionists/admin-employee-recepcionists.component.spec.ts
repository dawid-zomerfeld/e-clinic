import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmployeeRecepcionistsComponent } from './admin-employee-recepcionists.component';

describe('AdminEmployeeRecepcionistsComponent', () => {
  let component: AdminEmployeeRecepcionistsComponent;
  let fixture: ComponentFixture<AdminEmployeeRecepcionistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEmployeeRecepcionistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEmployeeRecepcionistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
