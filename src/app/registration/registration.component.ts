import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public states!:any [];
  public selectedState!: any [];
  constructor() { }

  ngOnInit(): void {
  }

}
