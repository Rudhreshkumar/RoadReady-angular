import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomersidebarComponent } from '../customersidebar/customersidebar.component';

@Component({
  selector: 'app-customerdashboard',
  standalone: true,
  imports: [CustomersidebarComponent],
  templateUrl: './customerdashboard.component.html',
  styleUrl: './customerdashboard.component.css'
})
export class CustomerdashboardComponent {
  username: any = localStorage.getItem('username'); 
}
