import { Component } from '@angular/core';
import { UsedcarNavbarComponent } from "./usedcar-navbar/usedcar-navbar.component";
import { UsedcarSidebarComponent } from './usedcar-sidebar/usedcar-sidebar.component';
import { CustomerService } from '../../../service/customer.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-usedcars',
  standalone: true,
  imports: [UsedcarNavbarComponent,UsedcarSidebarComponent,NgFor],
  templateUrl: './usedcars.component.html',
  styleUrl: './usedcars.component.css'
})
export class UsedcarsComponent {

  usedCars: any[] = [];
  storedCars: any[] = [];

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

}
