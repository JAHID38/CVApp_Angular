import { Component, OnInit } from '@angular/core';
import { ProjectClass } from 'src/app/Model';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project: ProjectClass = new ProjectClass();
  message: any;

  constructor(private auth: AuthServiceService,
    private service: DataService) { }
    
  ngOnInit(): void {
    this.project.userId = this.auth.user_id

  }

  addProject(){

    this.service.saveProjectRemote(this.project)
    .subscribe(
      response =>{
        this.message=response;
      }
    )
  }

}
