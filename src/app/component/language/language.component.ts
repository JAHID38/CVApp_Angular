import { Component, OnInit } from '@angular/core';
import { LanguageClass } from 'src/app/Model';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  lang: LanguageClass = new LanguageClass();
  message: any;

  constructor(private auth: AuthServiceService,
    private service: DataService) { }
    
  ngOnInit(): void {
    this.lang.userId = this.auth.user_id

  }

  addLanguage(){

    this.service.saveLanguageRemote(this.lang)
    .subscribe(
      response =>{
        this.message=response;
      }
    )
  }

}
