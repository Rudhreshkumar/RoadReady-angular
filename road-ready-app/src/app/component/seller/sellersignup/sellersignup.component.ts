import { Component } from '@angular/core';
import { SellerService } from '../../../service/seller.service';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sellersignup',
  standalone: true,
  imports: [FormsModule,NgIf,RouterLink],
  templateUrl: './sellersignup.component.html',
  styleUrl: './sellersignup.component.css'
})
export class SellersignupComponent {
  seller = {
    name: '',
    phoneNumber: '',
    address: '',
    user: {
      username: '',
      password: ''
    }
  };

  constructor(private sellerService: SellerService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const observer = {
        next: (response: any) => {
          console.log('Seller registered successfully', response);
          this.router.navigate(['/login']);
        },
        error: (error: any) => {
          console.error('Error during registration', error);
        },
        complete: () => {
          console.log('Signup process completed');
        }
      };

      this.sellerService.sellersignup(this.seller).subscribe(observer);
    } else {
      console.error('Form is not valid');
    }
  }
}
