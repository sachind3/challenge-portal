import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectWinnerComponent } from './select-winner.component';

describe('SelectWinnerComponent', () => {
  let component: SelectWinnerComponent;
  let fixture: ComponentFixture<SelectWinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectWinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectWinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
