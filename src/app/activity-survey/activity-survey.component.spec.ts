import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitySurveyComponent } from './activity-survey.component';

describe('ActivitySurveyComponent', () => {
  let component: ActivitySurveyComponent;
  let fixture: ComponentFixture<ActivitySurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitySurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitySurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
