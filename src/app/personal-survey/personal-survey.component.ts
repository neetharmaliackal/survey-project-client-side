import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-personal-survey',
  templateUrl: './personal-survey.component.html',
  styleUrls: ['./personal-survey.component.css']
})
export class PersonalSurveyComponent implements OnInit {
  personalData:string='';
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
   this. getPersonalData();
  }
  getPersonalData(){
    this.http.get<any>('personal/api').subscribe(response => {
      console.log(response);
      this.personalData= response;
  })
  }

}
