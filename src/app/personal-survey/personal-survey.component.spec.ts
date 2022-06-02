import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalSurveyComponent } from './personal-survey.component';

describe('PersonalSurveyComponent', () => {
  let component: PersonalSurveyComponent;
  let fixture: ComponentFixture<PersonalSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
