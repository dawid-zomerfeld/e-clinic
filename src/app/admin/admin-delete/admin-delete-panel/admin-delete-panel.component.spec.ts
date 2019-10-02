import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeletePanelComponent } from './admin-delete-panel.component';

describe('AdminDeletePanelComponent', () => {
  let component: AdminDeletePanelComponent;
  let fixture: ComponentFixture<AdminDeletePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDeletePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeletePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
