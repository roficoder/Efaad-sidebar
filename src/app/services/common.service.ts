import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  sideBarSubj : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  constructor() { }
}
