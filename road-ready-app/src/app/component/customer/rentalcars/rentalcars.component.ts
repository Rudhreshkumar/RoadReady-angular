import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { CustomerNavbarComponent } from '../customer-navbar/customer-navbar.component';
import { CustomersidebarComponent } from '../customersidebar/customersidebar.component';
import {  RouterLink } from '@angular/router';

@Component({
  selector: 'app-rentalcars',
  standalone: true,
  imports: [NgFor],
  templateUrl: './rentalcars.component.html',
  styleUrl: './rentalcars.component.css',
})
export class RentalcarsComponent {
  rentalCars: any[] = [];
  storedCars: any[] = [];
  

  constructor(private userService: UserService) {
    userService.getRentalCars().subscribe({
      next: (data) => {
        this.rentalCars = data;
        this.storedCars = data;
       
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  filterCarsByColor(color) {
    this.rentalCars = this.rentalCars.filter((rc) => rc.color === color);
  }

  getAllCars() {
    this.rentalCars = this.storedCars;
  }

  filterCarsByManufacturer(manufacturer) {
    this.rentalCars = this.rentalCars.filter(
      (rc) => rc.variant.manufacturer.name === manufacturer
    );
  }
}
