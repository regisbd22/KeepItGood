import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGestionComponent } from './main-gestion.component';

describe('MainGestionComponent', () => {
  let component: MainGestionComponent;
  let fixture: ComponentFixture<MainGestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainGestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
