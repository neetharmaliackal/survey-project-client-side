import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitySurveyComponent } from './activity-survey/activity-survey.component';
import { PersonalSurveyComponent } from './personal-survey/personal-survey.component';

const routes: Routes = [
  {  path: './personalSurvey',component: PersonalSurveyComponent},
    {path:'./activitySurvey',component: ActivitySurveyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
