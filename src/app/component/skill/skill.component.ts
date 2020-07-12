import { Component, OnInit } from '@angular/core';
import { SkillClass } from 'src/app/Model';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skillObj: SkillClass = new SkillClass();
  message: any;

  constructor(private auth: AuthServiceService,
    private service: DataService) { }
    
  ngOnInit(): void {
    this.skillObj.userId = this.auth.user_id
  }

  addSkill(){

    this.service.saveSkillRemote(this.skillObj)
    .subscribe(
      response =>{
        this.message=response;
      }
    )
  }

}
