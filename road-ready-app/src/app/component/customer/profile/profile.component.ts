import { Component, OnInit } from '@angular/core';
import { CustomersidebarComponent } from '../customersidebar/customersidebar.component';
import { CustomerService } from '../../../service/customer.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CustomersidebarComponent,NgIf],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  customer: any = {};
  errorMessage: string | null = null;

  constructor(private customerService: CustomerService, private router: Router) {}

  ngOnInit(): void {
    this.customerService.getCustomer().subscribe({
      next: (response) => {
        this.customer = response;
      },
      error: (error) => {
        this.errorMessage = 'Error fetching seller details';
        console.error('Error fetching seller details:', error);
      }
    });
  }

  onEdit(): void {
    this.router.navigate(['/customer/profile-settings']);
  }
}

