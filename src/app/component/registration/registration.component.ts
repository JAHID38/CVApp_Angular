import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  message:any;
  personalObj: User = new User();

  constructor(
    private service: DataService
  ) { }

  ngOnInit(): void {
    this.personalObj.role = "user";
  }

  addUser(){
    this.service.createUserRemote(this.personalObj)
    .subscribe(
      response =>{
        this.message=response;
      }
    )
  }

}
