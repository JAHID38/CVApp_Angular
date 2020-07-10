import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, PersonalClass } from '../Model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  createUserUrl = "http://localhost:8080/userRegister"
  loginUrl = "http://localhost:8080/signin"
  savePersonal = "http://localhost:8080/register/personal"


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

  // public getPersonalRemote(id){
  //   return this.http.get(`http://localhost:8080/${id}/view/userProfile`)
  // }

  public getPersonalRemote(user: PersonalClass):Observable<any>{
    return this.http.post<any>(`http://localhost:8080/view/userProfile`, user)
  }
}
