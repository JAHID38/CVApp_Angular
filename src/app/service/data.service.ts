import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, PersonalClass, ContactClass } from '../Model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  createUserUrl = "http://localhost:8080/userRegister"
  loginUrl = "http://localhost:8080/signin"
  savePersonal = "http://localhost:8080/register/personal"
  saveEducation = "http://localhost:8080/register/education"
  saveContact = "http://localhost:8080/register/contact"
  saveSkill = "http://localhost:8080/register/skill"
  saveLanguage = "http://localhost:8080/register/language"
  saveProject = "http://localhost:8080/register/project"


  constructor(private http: HttpClient) { }

  public createUserRemote(user){
    return this.http.post(this.createUserUrl, user,
    {responseType:'text' as 'json'});
  }

  public loginUserRemote(user: User):Observable<any>{
    return this.http.post<any>(this.loginUrl, user)
  }

  public savePersonalRemote(personal){
    return this.http.post(this.savePersonal, personal,
    {responseType:'text' as 'json'});
  }

  public saveContactRemote(contact){
    return this.http.post(this.saveContact, contact,
    {responseType:'text' as 'json'});
  }

  public saveEducationRemote(education){
    return this.http.post(this.saveEducation, education,
    {responseType:'text' as 'json'});
  }

  public saveLanguageRemote(education){
    return this.http.post(this.saveLanguage, education,
    {responseType:'text' as 'json'});
  }

  public saveSkillRemote(education){
    return this.http.post(this.saveSkill, education,
    {responseType:'text' as 'json'});
  }

  public saveProjectRemote(education){
    return this.http.post(this.saveProject, education,
    {responseType:'text' as 'json'});
  }

  public getPersonalRemote(user: PersonalClass):Observable<any>{
    return this.http.post<any>(`http://localhost:8080/view/userProfile`, user)
  }

  public getContactRemote(user: ContactClass):Observable<any>{
    return this.http.post<any>(`http://localhost:8080/view/userContact`, user)
  }

  public getEducationRemote(userId){
    return this.http.get(`http://localhost:8080/${userId}/view/education`)
  }

  public getLanguageRemote(userId){
    return this.http.get(`http://localhost:8080/${userId}/view/language`)
  }

  public getSkillRemote(userId){
    return this.http.get(`http://localhost:8080/${userId}/view/skill`)
  }

  public getProjectRemote(userId){
    return this.http.get(`http://localhost:8080/${userId}/view/project`)
  }
}
