import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StepperService {

  constructor() { }
  private usedCarData: any = {};

  setUsedCarData(data: any) {
    this.usedCarData = { ...this.usedCarData, ...data };
  }

  getUsedCarData() {
    return this.usedCarData;
  }

  clearUsedCarData() {
    this.usedCarData = {};
  }
}
