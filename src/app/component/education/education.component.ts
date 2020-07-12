import { Component, OnInit } from '@angular/core';
import { EducationClass } from 'src/app/Model';
import { DataService } from 'src/app/service/data.service';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  edu: EducationClass = new EducationClass();
  message: any;

  constructor(
    private auth: AuthServiceService,
    private service: DataService
  ) { }

  ngOnInit(): void {
    this.edu.userId = this.auth.user_id

  }

  addEducation(){

    this.service.saveEducationRemote(this.edu)
    .subscribe(
      response =>{
        this.message=response;
      }
    )
  }

}
