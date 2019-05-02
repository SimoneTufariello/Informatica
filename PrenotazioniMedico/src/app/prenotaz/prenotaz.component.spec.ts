import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenotazComponent } from './prenotaz.component';

describe('PrenotazComponent', () => {
  let component: PrenotazComponent;
  let fixture: ComponentFixture<PrenotazComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrenotazComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrenotazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
