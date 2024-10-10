import { Component } from '@angular/core';
import { UsedcarsComponent } from '../usedcars.component';

@Component({
  selector: 'app-purchase',
  standalone: true,
  imports: [UsedcarsComponent],
  templateUrl: './purchase.component.html',
  styleUrl: './purchase.component.css'
})
export class PurchaseComponent {

  usedCar: any;

}
