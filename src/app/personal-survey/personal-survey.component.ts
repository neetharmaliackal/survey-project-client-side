import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API} from '../../../API/index'
@Component({
  selector: 'app-personal-survey',
  templateUrl: './personal-survey.component.html',
  styleUrls: ['./personal-survey.component.css']
})
export class PersonalSurveyComponent implements OnInit {
  personalData:string='';
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
   this.getPersonalData();
  }
  getPersonalData(){
    const url=API.PERSONAL_SURVEY_API
    this.http.get<any>("/api/home").subscribe(response => {
      console.log(response);
      this.personalData= response;
  })
  }

}
