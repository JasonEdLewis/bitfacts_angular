import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../service/utility.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private utilService:UtilityService) {this.utilService.setShowBfBackground(false); this.utilService.setShowNavbar(true) }

  ngOnInit(): void {

  }

}
