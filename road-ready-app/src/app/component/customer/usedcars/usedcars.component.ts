import { Component, OnInit } from '@angular/core';
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
export class UsedcarsComponent implements OnInit {

  usedCars: any[];
  storedCars: any[] = [];
  filteredUsedCars: UsedCar[] = [];
  selectedModel?: string;
  selectedBrand?: string;
  selectedPrice?:number;
  selectedLocation?: string;
  selectedSeatingCapacity?:number;
  selectedMileage?: number;
  selectedColor?: string;
  selectedDescription?:string;
  selectedYear?: number; 
  selectedEngineNum?:string;
  selectedRegistrationNum?:string;
  selectedOwnership?:number;
  selectedTransmissionType?: string;
  selectedFuelType?: string;
  selectStatus?:string;
  
  constructor(private customerService:CustomerService){}

  ngOnInit(): void {
    this.getAllCars();
  }

  getAllCars() {
    this.customerService.getAllCars().subscribe({
      next:(data)=>{
        this.usedCars=data;
        this.storedCars=data;
        this.filteredUsedCars = this.storedCars;
        console.log(this.usedCars);
      },
      error:(err)=>{
        console.log(err);
      },
    });
  }

  applyFilter() {
    if (this.selectedModel||this.selectedBrand||this.selectedPrice ||this.selectedLocation|| this.selectedSeatingCapacity ||this.selectedMileage || this.selectedColor || this.selectedDescription||this.selectedYear||this.selectedEngineNum||this.selectedRegistrationNum||this.selectedOwnership||this.selectedTransmissionType||this.selectedFuelType ||this.selectStatus) {
    const filter = new UsedCar(
      0,
      this.selectedModel,
      this.selectedBrand,
      this.selectedPrice,
      this.selectedLocation,
      this.selectedSeatingCapacity,
      this.selectedMileage,
      this.selectedColor,
      this.selectedDescription,
      this.selectedYear,
      this.selectedEngineNum,
      this.selectedRegistrationNum,
      this.selectedOwnership,  
      this.selectedTransmissionType,
      this.selectedFuelType,
      this.selectStatus
    );
    this.customerService.getFilteredUsedCars(filter).subscribe({
      next:(usedCars) => {
        this.filteredUsedCars = usedCars;
      },
      error:(err) => {
        console.error('Error fetching used cars', err);
      }
  });
  }else {
      
      this.getAllCars();
  
} 
  }
}

