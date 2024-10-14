import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  isButtonEnabled = false;

  enableButton() {
    this.isButtonEnabled = true;
  }

  disableButton() {
    this.isButtonEnabled = false;
  }
}
