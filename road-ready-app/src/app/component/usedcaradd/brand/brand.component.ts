import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SellerService } from '../../../service/seller.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [FormsModule, NgIf,ReactiveFormsModule],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css'
})
export class BrandComponent {
  brandname: string ='';
  successMsg: string;
  errorMsg: any;

  @Output() brandAdded = new EventEmitter<number>();  

  constructor(private sellerservice: SellerService, private router: Router) {}

  onClick() {
    this.sellerservice.postBrand({
      "brandname": this.brandname
    }).subscribe({
      next: (data) => {
        this.successMsg = 'Brand added';
        this.errorMsg = undefined;
        this.brandAdded.emit(data.id);  
      },
      error: (err) => {
        this.successMsg = undefined;
        this.errorMsg = 'Failed to add brand';
        console.log(err);
      }
    });
  }

  resetmsg() {
    this.successMsg = undefined;
    this.errorMsg = undefined;
  }
}
