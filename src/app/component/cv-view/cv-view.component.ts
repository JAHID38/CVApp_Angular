import { Component, OnInit } from '@angular/core';
import { User, PersonalClass } from 'src/app/Model';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-cv-view',
  templateUrl: './cv-view.component.html',
  styleUrls: ['./cv-view.component.css']
})
export class CvViewComponent implements OnInit {

  user: User = new User();
  userObj: any;
  person: PersonalClass = new PersonalClass();

  constructor(
    private route: ActivatedRoute,
    private auth: AuthServiceService,
    private service: DataService
  ) { }

  ngOnInit(): void {

    this.user.role = this.route.snapshot.params['role']
    this.user.userId = this.route.snapshot.params['id']
    this.person.userId = this.user.userId;
    this.getPersonalDetails();
  }

  getPersonalDetails(){
    this.service.getPersonalRemote(this.person)
    .subscribe(
      response=>{
        this.person = response;
        console.info(response)
      }
    )
  }

}
