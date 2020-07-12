import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { DataService } from 'src/app/service/data.service';
import { ContactClass } from 'src/app/Model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactObj: ContactClass = new ContactClass();
  message: any;

  constructor(private auth: AuthServiceService,
    private service: DataService) { }
    
  ngOnInit(): void {
    this.contactObj.userId = this.auth.user_id

  }

  addContact(){

    this.service.saveContactRemote(this.contactObj)
    .subscribe(
      response =>{
        this.message=response;
      }
    )
  }

}
