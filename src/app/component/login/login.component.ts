import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: any;
  user: User = new User();
  id: number;
  errMessage:any

  constructor(
    private router: Router,
    private service: DataService,
    private auth: AuthServiceService
    ) { }

  ngOnInit(){}
  loginMethod(){
    this.service.loginUserRemote(this.user)
    .subscribe(
      response => {
        this.user = response;
        console.info(this.user);
        console.info(this.user.userId)
        this.auth.authenticatedLogin(this.user.username, this.user.role, this.user.userId)
        this.router.navigate(['home', this.user.role, this.user.userId]);
      },
      error =>{
        this.errMessage = error;
      }
    )
    
  }

}
