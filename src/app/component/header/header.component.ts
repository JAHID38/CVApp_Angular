import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { User } from 'src/app/Model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

user: User = new User()

  constructor(public auth: AuthServiceService) { }

  ngOnInit(): void {
    console.log("authenticated ID:" +this.user.userId)
    console.log("AND Role: "+this.auth.user_role)
  }

}
