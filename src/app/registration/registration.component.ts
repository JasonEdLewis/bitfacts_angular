import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../service/utility.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})


export class RegistrationComponent implements OnInit {

 public username: string ="";
 public email: string ="";
 public password: string ="";
 base_url = 'http://127.0.0.1:5000/'

  constructor(private utilservice: UtilityService) {this.utilservice.setShowNavbar(false);this.utilservice.setShowBfBackground(false);

  }

  ngOnInit(): void {

  }


  public registerNewUser(){
    let sk = this.email.concat(this.username+ this.password)
    let payload = {
      "username": this.username,
      "email" : this.email,
      "password": this.password,
      "sk":sk
    }
    this.utilservice.post_call(this.base_url+"register", payload).subscribe(data => {
      console.log(data)
      this.username ="";
      this.email="";
      this.password=""
    })

  }

}
