import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglialbumComponent } from './dettaglialbum.component';

describe('DettaglialbumComponent', () => {
  let component: DettaglialbumComponent;
  let fixture: ComponentFixture<DettaglialbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettaglialbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglialbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
