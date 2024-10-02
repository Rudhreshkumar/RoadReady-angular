import { Component } from '@angular/core';
import { CustomersidebarComponent } from '../customersidebar/customersidebar.component';

@Component({
  selector: 'app-wishlisted-cars',
  standalone: true,
  imports: [CustomersidebarComponent],
  templateUrl: './wishlisted-cars.component.html',
  styleUrl: './wishlisted-cars.component.css'
})
export class WishlistedCarsComponent {

}
