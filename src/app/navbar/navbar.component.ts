import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public loggedin:boolean = true;

  items: any =[]
  constructor(){
}

    ngOnInit() {
        this.items = [
          {
            label: 'Log out',
            icon: 'pi pi-sign-out',

        },
            // {
            //     label: 'File',
            //     items: [{
            //             label: 'New',
            //             icon: 'pi pi-fw pi-plus',
            //             items: [
            //                 {label: 'Project'},
            //                 {label: 'Other'},
            //             ]
            //         },
            //         {label: 'Open'},
            //         {label: 'Quit'}
            //     ]
            // },
            // {
            //     label: 'Edit',
            //     icon: 'pi pi-fw pi-pencil',
            //     items: [
            //         {label: 'Delete', icon: 'pi pi-fw pi-trash'},
            //         {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
            //     ]
            // }

        ];
    }



}
