import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CustomersidebarComponent } from '../customersidebar/customersidebar.component';
import { CustomerNavbarComponent } from "../customer-navbar/customer-navbar.component";
import { RentalcarsComponent } from "../rentalcars/rentalcars.component";

@Component({
  selector: 'app-customerdashboard',
  standalone: true,
  imports: [CustomersidebarComponent, CustomerNavbarComponent,RouterOutlet,RouterLink],
  templateUrl: './customerdashboard.component.html',
  styleUrl: './customerdashboard.component.css'
})
export class CustomerdashboardComponent {
}
