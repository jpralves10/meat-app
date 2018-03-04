import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../security/login/login.service';
import { User } from '../../security/login/user.model';

@Component({
  selector: 'mt-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(
    private serviceLogin: LoginService
  ) { }

  ngOnInit() {}

  user(): User{
    return this.serviceLogin.user
  }

  isLoggedIn(): boolean{
    return this.serviceLogin.isLoggedIn()
  }

  login(){
    this.serviceLogin.handleLogin()
  }

  logout(){
    this.serviceLogin.logout()
  }
}