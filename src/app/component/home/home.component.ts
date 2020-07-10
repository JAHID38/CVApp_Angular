import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User = new User();
  role: string;
  id: number;

  userObj: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
     public auth: AuthServiceService,
     private service: DataService) { }

  ngOnInit(): void {
    this.user.role = this.route.snapshot.params['role']
    this.user.userId = this.route.snapshot.params['id']
    // this.getPersonalDetails();
  }

  

  passInfo(){
    this.router.navigate(['view/cv', this.auth.user_role, this.auth.user_id]);
  }

}
