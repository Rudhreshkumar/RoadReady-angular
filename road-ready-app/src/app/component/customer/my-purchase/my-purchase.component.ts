import { Component, OnInit } from '@angular/core';
import { CustomersidebarComponent } from '../customersidebar/customersidebar.component';
import { CustomerService } from '../../../service/customer.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-my-purchase',
  standalone: true,
  imports: [CustomersidebarComponent,NgIf,NgFor],
  templateUrl: './my-purchase.component.html',
  styleUrl: './my-purchase.component.css'
})
export class MyPurchaseComponent implements OnInit{

  usedCar: any[] = [];
  errorMessage: string = '';
  purchases:any;
  defaultFallbackImage = 'Images/defaultImage.jpg';
  constructor(private customerService:CustomerService){}

  ngOnInit(): void {
    console.log('Component initialized. Fetching purchases...');
    this.getPurchases();
  }

  getPurchases(): void {
    this.customerService.getPurchase().subscribe({
        next: (res) => {
            this.purchases = res;
            this.purchases.forEach(purchase => {
                this.customerService.getCarImagesByUsedCarId(purchase.usedCar.id).subscribe({
                    next: (images) => {
                        purchase.usedCar.imagePath = images && images.length > 0
                            ? 'Images/' + images[0].path.split('\\').pop()
                            : this.defaultFallbackImage; 
                    },
                    error: (err) => {
                        console.error(`Error fetching images for car ID ${purchase.usedCar.id}:`, err);
                        purchase.usedCar.imagePath = this.defaultFallbackImage; 
                    }
                });
            });
            console.log("Fetched purchased cars:", this.purchases); 
        },
        error: (err) => {
            console.log('Error fetching purchase details', err);
        }
    });
}
}
