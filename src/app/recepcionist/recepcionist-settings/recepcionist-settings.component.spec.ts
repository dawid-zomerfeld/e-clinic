import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionistSettingsComponent } from './recepcionist-settings.component';

describe('RecepcionistSettingsComponent', () => {
  let component: RecepcionistSettingsComponent;
  let fixture: ComponentFixture<RecepcionistSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepcionistSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepcionistSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
