import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API} from '../../../API/index'
import { PersonalSurveyService } from './personal-survey.service';
@Component({
  selector: 'app-personal-survey',
  templateUrl: './personal-survey.component.html',
  styleUrls: ['./personal-survey.component.css']
})
export class PersonalSurveyComponent implements OnInit {
  personalData:string='';
  constructor(
    private http: HttpClient,
    private personalSurveyService:PersonalSurveyService
    ) { }
  ngOnInit(): void {
   this.getpersonalsurveyform();
  }
 
  getpersonalsurveyform(){
   this.personalSurveyService.getPersonalData().
   subscribe((response: any) => {
    console.log(response);
   }
   )
  }
}
