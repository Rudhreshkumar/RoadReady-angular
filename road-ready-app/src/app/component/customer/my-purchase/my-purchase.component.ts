import { Component } from '@angular/core';
import { CustomersidebarComponent } from '../customersidebar/customersidebar.component';

@Component({
  selector: 'app-my-purchase',
  standalone: true,
  imports: [CustomersidebarComponent],
  templateUrl: './my-purchase.component.html',
  styleUrl: './my-purchase.component.css'
})
export class MyPurchaseComponent {

}
