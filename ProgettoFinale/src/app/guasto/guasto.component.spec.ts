import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuastoComponent } from './guasto.component';

describe('GuastoComponent', () => {
  let component: GuastoComponent;
  let fixture: ComponentFixture<GuastoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuastoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
