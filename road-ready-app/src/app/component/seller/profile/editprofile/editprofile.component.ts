import { Component, OnInit } from '@angular/core';
import { SellerService } from '../../../../service/seller.service';
import { Router } from '@angular/router';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { SellersidebarComponent } from "../../sellersidebar/sellersidebar.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editprofile',
  standalone: true,
  imports: [NgClass, NgIf, NgFor, SellersidebarComponent,FormsModule],
  templateUrl: './editprofile.component.html',
  styleUrl: './editprofile.component.css'
})
export class EditprofileComponent implements OnInit {
  name: string = '';
  phoneNumber: string = '';
  address: string = '';
  successMsg: string = '';
  errorMsg: string = '';
  show: boolean = false;
  constructor(
    private sellerService: SellerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchSellerDetails();
  }

  fetchSellerDetails() {
    this.sellerService.getseller().subscribe({
      next: (data) => {
        this.name = data.name;
        this.phoneNumber = data.phoneNumber;
        this.address = data.address;
      },
      error: (err) => {
        console.error(err);
        this.errorMsg = 'Failed to load seller details.';
      }
    });
  }

  resetMsg() {
    this.successMsg = '';
    this.errorMsg = '';
  }

  onSave() {
    const updatedSeller = {
      name: this.name,
      phoneNumber: this.phoneNumber,
      address: this.address
    };
  
    this.sellerService.updateSellerProfile(updatedSeller).subscribe({
      next: () => {
        this.successMsg = 'Profile updated successfully';
        this.errorMsg = '';
      },
      error: (err) => {
        this.successMsg = '';
        console.error(err);
        this.errorMsg = 'Failed to update profile.';
      }
    });
  }
  

  onCancel() {
    this.router.navigateByUrl("/seller/profile"); 
  }
}
