import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonalSurveyComponent } from './personal-survey/personal-survey.component';

const routes: Routes = [
  {  path: './personalSurvey',component: PersonalSurveyComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
