import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainChargeComponent } from './main-charge.component';

describe('MainChargeComponent', () => {
  let component: MainChargeComponent;
  let fixture: ComponentFixture<MainChargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainChargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
