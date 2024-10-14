import { Component, OnInit } from '@angular/core';
import { SellersidebarComponent } from "../sellersidebar/sellersidebar.component";
import { NgFor } from '@angular/common';
import { SellerService } from '../../../service/seller.service';
import { RouterLink } from '@angular/router';

/*@Component({
  selector: 'app-sellerdashboard',
  standalone: true,
  imports: [SellerdashboardComponent, SellersidebarComponent,NgFor],
  templateUrl: './sellerdashboard.component.html',
  styleUrl: './sellerdashboard.component.css'
})
export class SellerdashboardComponent {
  username: any = localStorage.getItem('username'); 
  
}*/
@Component({
  selector: 'app-sellerdashboard',
  standalone: true, // Standalone component flag
  imports: [NgFor, RouterLink, SellersidebarComponent], // Add NgFor to the imports array
  templateUrl: './sellerdashboard.component.html',
  styleUrls: ['./sellerdashboard.component.css']
})
export class SellerdashboardComponent implements OnInit {
  username: string | null = localStorage.getItem('username');
  usedCars: any[] = []; // Store fetched used cars

  constructor(private sellerService: SellerService) {} // Inject SellerService

  ngOnInit() {
    this.getUsedCars(); // Fetch the used cars on component initialization
  }

  getUsedCars() {
    this.sellerService.getsellercar().subscribe({
      next: (cars) => {
        this.usedCars = cars; // Assign the fetched cars to the usedCars property
      },
      error: (error) => {
        console.error('Error fetching used cars:', error);
      }
    });
  }
}
