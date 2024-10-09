import { Component } from '@angular/core';
import { UsedcarNavbarComponent } from "./usedcar-navbar/usedcar-navbar.component";
import { UsedcarSidebarComponent } from './usedcar-sidebar/usedcar-sidebar.component';
import { CustomerService } from '../../../service/customer.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UsedCar } from '../../../../model/usedCar.model';

@Component({
  selector: 'app-usedcars',
  standalone: true,
  imports: [UsedcarNavbarComponent,UsedcarSidebarComponent,NgFor,RouterLink],
  templateUrl: './usedcars.component.html',
  styleUrl: './usedcars.component.css'
})
export class UsedcarsComponent {

  usedCars: any[];
  storedCars: any[] = [];

  selectedBrand?: string;
  selectedColor?: string;
  selectedModel?: string;
  selectedFuelType?: string;
  selectedTransmissionType?: string;
  selectedLocation?: string;
  selectedMileage?: number;
  selectedYear?: number;
  filteredUsedCars: UsedCar[] = [];
  

  constructor(private customerService:CustomerService){
    customerService.getUsedCars().subscribe({
      next:(data)=>{
        this.usedCars=data;
        this.storedCars=data;
        console.log(this.usedCars);
      },
      error:(err)=>{
        console.log(err);
      },
    });
  }

  getAllCars() {
    this.filteredUsedCars = this.storedCars;
  }


  applyFilter() {
    const filter = new UsedCar(
      0, // Placeholder for id; not needed for filtering
      this.selectedBrand,
      this.selectedColor,
      this.selectedModel,
      this.selectedFuelType,
      this.selectedTransmissionType,
      this.selectedLocation,
      this.selectedMileage,
      this.selectedYear
    );

    // Call the service to get filtered used cars
    this.customerService.getFilteredUsedCars(filter).subscribe({
      next:(usedCars) => {
        this.filteredUsedCars = usedCars; // Update your filtered used cars
      },
      error:(err) => {
        console.error('Error fetching used cars', err);
      }
  });
  }
  
}

