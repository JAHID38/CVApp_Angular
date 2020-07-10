import { Injectable } from '@angular/core';
import { User } from '../Model';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  user: User = new User();
  user_role: string = this.user.role;
  user_id: number = this.user.userId;

  authenticatedLogin(username, role, id){
    sessionStorage.setItem('keyUser', username)
    this.user_role = role;
    this.user_id = id;

    console.info("Role: "+this.user_role)
    console.info("ID: "+this.user_id)
  }
  isUserLoggedIn(){
    let userLog = sessionStorage.getItem('keyUser');
    return !(userLog===null)
  }

  logoutMethod(){
    sessionStorage.removeItem('keyUser')
  }
}
