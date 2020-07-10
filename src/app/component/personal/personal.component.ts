import { Component, OnInit } from '@angular/core';
import { User, PersonalClass } from 'src/app/Model';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  user: User = new User();

  role: string;
  id: number;

  message:any;

  personalObj: PersonalClass = new PersonalClass();

  constructor(private auth: AuthServiceService,
    private service: DataService) { }

  ngOnInit(): void {
    this.role = this.auth.user_role
    this.personalObj.userId = this.auth.user_id
    console.info(this.role +" " +this.id)
  }

  addPersonal(){

    this.service.savePersonalRemote(this.personalObj)
    .subscribe(
      response =>{
        this.message=response;
      }
    )
  }

}
