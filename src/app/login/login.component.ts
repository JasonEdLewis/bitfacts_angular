import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../service/utility.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public username!: string;
  public password!: string;

  public submitNewUser(){
    const creds = {"username": this.username, "password":this.password}
      localStorage.setItem("creds", JSON.stringify(creds));
      console.log(localStorage.getItem("creds"))
  }

  constructor(private utilService:UtilityService) {this.utilService.setShowNavbar(false);this.utilService.setShowBfBackground(true); }

  ngOnInit(): void {

  }
  ngOnDestroy(): void {
    this.utilService.setShowNavbar(true);
    this.utilService.setShowBfBackground(false);
  }
}
