import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeIntroComponent } from './challenge-intro.component';

describe('ChallengeIntroComponent', () => {
  let component: ChallengeIntroComponent;
  let fixture: ComponentFixture<ChallengeIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
