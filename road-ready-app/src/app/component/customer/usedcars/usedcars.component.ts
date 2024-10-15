import { Component, OnInit } from '@angular/core';
import { UsedcarNavbarComponent } from "./usedcar-navbar/usedcar-navbar.component";
import { UsedcarSidebarComponent } from './usedcar-sidebar/usedcar-sidebar.component';
import { CustomerService } from '../../../service/customer.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UsedCar } from '../../../../model/usedCar.model';
import { FormsModule } from '@angular/forms';
import { FilterDto } from '../../../../model/filterDto.model';

@Component({
  selector: 'app-usedcars',
  standalone: true,
  imports: [UsedcarNavbarComponent,UsedcarSidebarComponent,NgFor,RouterLink,NgIf,FormsModule],
  templateUrl: './usedcars.component.html',
  styleUrl: './usedcars.component.css'
})
export class UsedcarsComponent implements OnInit {

  filteredUsedCars: UsedCar[] = []; // Store the filtered cars
  errorMessage: string = ''; // Error message for any issues
  defaultFallbackImage = 'Images/defaultImage.jpg'; // Fallback image

  filter : FilterDto ={
    model: '',
    brand: '',
    location: '',
    color: '',
    transmissionType: 'MANUAL',
    fuelType: 'PETROL',   
  }; 
  
  constructor(private customerService:CustomerService){}

  ngOnInit(): void {
    this.getAllCars();
  }

getAllCars() {
  this.customerService.getAllCars().subscribe({
    next: (data) => {
      this.filteredUsedCars = data;
      this.assignImagesToCars();
      console.log(data);
    },
    error: (err) => {
      console.error(err);
    },
  });
}

assignImagesToCars() {
  this.filteredUsedCars.forEach(car => {
    this.getCarImages(car.id).subscribe({
      next: (images) => {
        car.imagePath = images && images.length > 0
          ? 'Images/' + images[0].path.split('\\').pop() 
          : this.defaultFallbackImage;
      },
      error: (err) => {
        console.error(`Error fetching images for car ID ${car.id}:`, err);
        car.imagePath = this.defaultFallbackImage;
      }
    });
  });
}

getCarImages(usedCarId: number) {
  return this.customerService.getCarImagesByUsedCarId(usedCarId);
}
applyFilter() {
  this.customerService.filterUsedCars(this.filter).subscribe({
    next: (cars) => {
      this.filteredUsedCars = cars;
      this.assignImagesToCars(); 
    },
    error: (err) => {
      console.error('Error fetching filtered cars', err);
    }
  });
}
}


