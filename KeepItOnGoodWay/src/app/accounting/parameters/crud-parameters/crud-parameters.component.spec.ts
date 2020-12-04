import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudParametersComponent } from './crud-parameters.component';

describe('CrudParametersComponent', () => {
  let component: CrudParametersComponent;
  let fixture: ComponentFixture<CrudParametersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudParametersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
