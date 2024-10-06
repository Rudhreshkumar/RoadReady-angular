import { Component } from '@angular/core';
import { CustomerNavbarComponent } from "../../customer-navbar/customer-navbar.component";
import { CustomersidebarComponent } from "../../customersidebar/customersidebar.component";

@Component({
  selector: 'app-single-rental-car',
  standalone: true,
  imports: [CustomerNavbarComponent, CustomersidebarComponent],
  templateUrl: './single-rental-car.component.html',
  styleUrl: './single-rental-car.component.css'
})
export class SingleRentalCarComponent {

}
