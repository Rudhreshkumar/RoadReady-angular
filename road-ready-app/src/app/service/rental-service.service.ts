import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentalServiceService {

  rentalInfo$= new BehaviorSubject({
    driver:false,
    duration:"",

  })

  safeKeepingInfo$=new BehaviorSubject({
    safeKeepId:"",
    panNumber:"",
  })
  constructor() { }


  setRentalInfo(driver:boolean,duration:string):void
  {
    this.rentalInfo$.next({
      'driver':driver,
      'duration':duration
    })
  }

  setSafeKeepingInfo(safeKeepId:string,panNumber:string)
  {
    this.safeKeepingInfo$.next({
     'safeKeepId':safeKeepId,
     'panNumber':panNumber
    })
  }

}
