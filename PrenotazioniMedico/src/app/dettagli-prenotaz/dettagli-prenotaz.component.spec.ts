import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliPrenotazComponent } from './dettagli-prenotaz.component';

describe('DettagliPrenotazComponent', () => {
  let component: DettagliPrenotazComponent;
  let fixture: ComponentFixture<DettagliPrenotazComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettagliPrenotazComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DettagliPrenotazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
