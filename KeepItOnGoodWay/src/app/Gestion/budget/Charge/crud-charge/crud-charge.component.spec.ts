import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudChargeComponent } from './crud-charge.component';

describe('CrudChargeComponent', () => {
  let component: CrudChargeComponent;
  let fixture: ComponentFixture<CrudChargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudChargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
