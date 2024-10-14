import { Component, OnInit } from '@angular/core';

import { SellerService } from '../../../service/seller.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { SellersidebarComponent } from "../sellersidebar/sellersidebar.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgIf, SellersidebarComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  seller: any = {};
  errorMessage: string | null = null;

  constructor(private sellerService: SellerService, private router: Router) {}

  ngOnInit(): void {
    this.sellerService.getseller().subscribe({
      next: (response) => {
        this.seller = response;
      },
      error: (error) => {
        this.errorMessage = 'Error fetching seller details';
        console.error('Error fetching seller details:', error);
      }
    });
  }

  onEdit(): void {
    this.router.navigate(['/edit/seller/profile']);
  }
}
