import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  /* Subject is sort of a 'global' variable that can be set and OBSERVED from any component that imports this service by SUBSCRIBING to the function that returns it */
  private showNavbar$ = new Subject<any>();
  private showBfBackground$= new Subject<any>();

  constructor() { }

  public getShowNavbar(): Observable<any> {
    return this.showNavbar$.asObservable();
  };
  public getshowBfBackground(): Observable<any> {
    return this.showBfBackground$.asObservable();
  };
  public setShowNavbar(b: boolean):void{
    this.showNavbar$.next(b);
  };
  public setShowBfBackground(b: boolean):void{
    this.showBfBackground$.next(b);
  }


}
