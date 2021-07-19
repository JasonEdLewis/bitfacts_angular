import { Component } from '@angular/core';
import {Subscription } from 'rxjs';
import { UtilityService } from './service/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public shouldShowNavbar:boolean = true;
  public showBfBackground:boolean = true;

  constructor(private utilService: UtilityService) { }
  ngOnInit() {
    this.utilService.getShowNavbar().subscribe( val => {
      this.shouldShowNavbar = val
    })
    this.utilService.getshowBfBackground().subscribe( val => {this.showBfBackground = val})
  }

}
