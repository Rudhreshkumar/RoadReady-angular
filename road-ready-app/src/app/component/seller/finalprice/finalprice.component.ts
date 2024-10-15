import { Component, OnInit } from '@angular/core';
import { SellerService } from '../../../service/seller.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgClass, NgIf, NgStyle } from '@angular/common';
import { SellersidebarComponent } from "../sellersidebar/sellersidebar.component";

@Component({
  selector: 'app-finalprice',
  standalone: true,
  imports: [NgIf, SellersidebarComponent,NgClass,NgStyle],
  templateUrl: './finalprice.component.html',
  styleUrl: './finalprice.component.css'
})
export class FinalpriceComponent implements OnInit {

  carId: number;
  finalPrice: number;
  membershipType: string;
  errorMessage: string;
  isModalOpen: boolean = false;
  isSellCarDisabled: boolean = false;
  constructor(private route: ActivatedRoute, private sellerService: SellerService,private router:Router) {}

  ngOnInit(): void {
    this.carId = +this.route.snapshot.paramMap.get('id');
    
    this.calculateFinalPrice(this.carId);
  }

  calculateFinalPrice(carId: number): void {
    this.sellerService.calculateFinalPrice(carId).subscribe({
      next: (response: any) => {
        this.finalPrice; 
        this.getCarDetails();
      },
      error: (error) => {
        this.errorMessage = 'Failed to calculate final price';
        console.error(error);
      }
    });
  }

  getCarDetails(): void {
    this.sellerService.getCarDetailsWithMembership(this.carId).subscribe({
      next: (response: any) => {
        this.finalPrice=response.finalPrice;
        this.membershipType = response.membershipType; 
      },
      error: (error) => {
        this.errorMessage = 'Failed to load car details';
        console.error(error);
      }
    });
  }
  openSellCarModal(): void {
    this.isModalOpen = true;
  }

  closeSellCarModal(): void {
    this.isModalOpen = false;
    this.isSellCarDisabled = true;
    this.router.navigate(['/seller/dashboard']);
  }

  confirmSellCar(): void {
    this.isModalOpen = false;
    console.log('Car sold with final price:', this.finalPrice);
    this.isSellCarDisabled = true;  }
}