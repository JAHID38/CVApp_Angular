import { Component, OnInit } from '@angular/core';
import { User, PersonalClass, ContactClass, EducationClass, LanguageClass, SkillClass, ProjectClass } from 'src/app/Model';
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
  eduObj: any;
  languageObj: any;
  skillObj: any;
  projectObj: any;

  person: PersonalClass = new PersonalClass();
  contact: ContactClass = new ContactClass();
  edu: EducationClass = new EducationClass();
  language: LanguageClass = new LanguageClass();
  skill: SkillClass = new SkillClass();
  project: ProjectClass = new ProjectClass();

  constructor(
    private route: ActivatedRoute,
    private auth: AuthServiceService,
    private service: DataService
  ) { }

  ngOnInit(): void {

    this.user.role = this.route.snapshot.params['role']
    this.user.userId = this.route.snapshot.params['id']
    this.person.userId = this.user.userId;
    this.contact.userId = this.user.userId;
    this.edu.userId = this.user.userId;
    this.language.userId = this.user.userId;
    this.skill.userId = this.user.userId;
    this.project.userId = this.user.userId

    this.getPersonalDetails();
    this.getContactDetails();
    this.getEducationDetails();
    this.getLanguageDetails();
    this.getSkillDetails();
    this.getProjectDetails();
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

  getContactDetails(){
    this.service.getContactRemote(this.contact)
    .subscribe(
      response=>{
        this.contact = response;
        console.info(response)
      }
    )
  }

  getEducationDetails(){
    this.service.getEducationRemote(this.edu.userId)
    .subscribe(
      response=>{
        this.eduObj = response;
        console.info(response)
      }
    )
  }

  getLanguageDetails(){
    this.service.getLanguageRemote(this.language.userId)
    .subscribe(
      response=>{
        this.languageObj = response;
        console.info(response)
      }
    )
  }

  getSkillDetails(){
    this.service.getSkillRemote(this.skill.userId)
    .subscribe(
      response=>{
        this.skillObj = response;
        console.info(response)
      }
    )
  }

  getProjectDetails(){
    this.service.getProjectRemote(this.project.userId)
    .subscribe(
      response=>{
        this.projectObj = response;
        console.info(response)
      }
    )
  }

}
