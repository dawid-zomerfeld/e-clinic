import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardPanelComponent } from './admin-dashboard-panel.component';

describe('AdminDashboardPanelComponent', () => {
  let component: AdminDashboardPanelComponent;
  let fixture: ComponentFixture<AdminDashboardPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDashboardPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
