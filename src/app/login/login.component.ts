import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../service/utility.service';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public username!: string;
  public password!: string;
  private handleError!:string;
  base_url = 'http://127.0.0.1:5000/'

  constructor(private utilService:UtilityService) {this.utilService.setShowNavbar(false);this.utilService.setShowBfBackground(true); }
  public submitNewUser(){

    const creds = {"username": this.username, "password":this.password}
      localStorage.setItem("creds", JSON.stringify(creds));
      console.log(localStorage.getItem("creds"))

  }
  private getUsers(){
    this.utilService.get_call(this.base_url+ "users").subscribe((data) =>{
      return data
    })

  }

  public postUser(){
   let payload = {"name":this.username, "password":this.password}
    return this.utilService.post_call(this.base_url+ "users",payload ).subscribe((res: any) => {
      console.log(res);
      this.username ="";
    this.password =""
    }
      )

  }



  ngOnInit(): void {
    this.getUsers()
  }
  ngOnDestroy(): void {
    this.utilService.setShowNavbar(true);
    this.utilService.setShowBfBackground(false);
  }
}
