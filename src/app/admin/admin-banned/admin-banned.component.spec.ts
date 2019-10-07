import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBannedComponent } from './admin-banned.component';

describe('AdminBannedComponent', () => {
  let component: AdminBannedComponent;
  let fixture: ComponentFixture<AdminBannedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBannedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBannedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
