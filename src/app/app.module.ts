import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalSurveyComponent } from './personal-survey/personal-survey.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivitySurveyComponent } from './activity-survey/activity-survey.component';@NgModule({
  declarations: [
    AppComponent,
    PersonalSurveyComponent,
    ActivitySurveyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
