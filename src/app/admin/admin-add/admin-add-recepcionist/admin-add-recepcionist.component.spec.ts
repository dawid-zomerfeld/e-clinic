import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddRecepcionistComponent } from './admin-add-recepcionist.component';

describe('AdminAddRecepcionistComponent', () => {
  let component: AdminAddRecepcionistComponent;
  let fixture: ComponentFixture<AdminAddRecepcionistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddRecepcionistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddRecepcionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
