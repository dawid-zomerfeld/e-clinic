import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionistSidenavComponent } from './recepcionist-sidenav.component';

describe('RecepcionistSidenavComponent', () => {
  let component: RecepcionistSidenavComponent;
  let fixture: ComponentFixture<RecepcionistSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepcionistSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepcionistSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
