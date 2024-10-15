import { Component, OnInit } from '@angular/core';
import { SellerService } from '../../../service/seller.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editcardetails',
  standalone: true,
  imports: [NgIf,NgFor,FormsModule],
  templateUrl: './editcardetails.component.html',
  styleUrl: './editcardetails.component.css'
})

export class EditcardetailsComponent implements OnInit {
  price: string = '';
  location: string = '';
  seatingCapacity: string = '';
  transmissionType: string = '';
  mileage: string = '';
  fuelType: string = '';
  color: string = '';
  description: string = '';
  year: string = '';
  engineNum: string = '';
  registrationNum: string = '';
  ownership: string = '';
  id: any;

  successMsg: string = '';
  errorMsg: string = '';
  show: boolean = false;

  constructor(
    private sellerService: SellerService, 
    private actRoute: ActivatedRoute,
    private router: Router
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.sellerService.getusedcarid(this.id).subscribe({
      next: (data) => {
        this.price = data.price;
        this.location = data.location;
        this.seatingCapacity = data.seatingCapacity;
        this.transmissionType = data.transmissionType;
        this.mileage = data.mileage;
        this.fuelType = data.fuelType;
        this.color = data.color;
        this.description = data.description;
        this.year = data.year;
        this.engineNum = data.engineNum;
        this.registrationNum = data.registrationNum;
        this.ownership = data.ownership;
      },
      error: () => { }
    });
  }

  resetmsg() {
    this.successMsg = '';
    this.errorMsg = '';
  }

  onClick() {
    this.sellerService.updateCar(this.id,{

      "price": this.price,
      "location": this.location,
      "seatingCapacity": this.seatingCapacity,
      "transmissionType": this.transmissionType,
      "mileage": this.mileage,
      "fuelType": this.fuelType,
      "color": this.color,
      "description": this.description,
      "year": this.year,
      "engineNum": this.engineNum,
      "registrationNum": this.registrationNum,
      "ownership": this.ownership
    }).subscribe({
      next: (data) => {
        this.successMsg = 'Car details updated successfully';
        this.show = true;
        this.errorMsg = '';
      },
      error: (err) => {
        this.successMsg = '';
        this.show = false;
        console.error(err);
        if (err.status === 305) {
          this.errorMsg = err.error;
        } else {
          this.router.navigateByUrl("/**"); 
        }
      }
    });
  }

  onShowClick() {
    this.router.navigateByUrl("/seller/dashboard"); 
  }
}