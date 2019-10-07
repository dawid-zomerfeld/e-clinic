import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBannedRecepcionistComponent } from './admin-banned-recepcionist.component';

describe('AdminBannedRecepcionistComponent', () => {
  let component: AdminBannedRecepcionistComponent;
  let fixture: ComponentFixture<AdminBannedRecepcionistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBannedRecepcionistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBannedRecepcionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
