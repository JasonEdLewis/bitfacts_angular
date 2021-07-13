import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../service/utility.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public states!:any [];
  public selectedState!: any [];
  constructor(private utilservice: UtilityService) {this.utilservice.setShowNavbar(false);this.utilservice.setShowBfBackground(false) }

  ngOnInit(): void {

  }

}
