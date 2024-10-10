import { Component, OnInit } from '@angular/core';
import { UsedcarNavbarComponent } from '../usedcar-navbar/usedcar-navbar.component';
import { NgFor, NgIf } from '@angular/common';
import { UsedcarsComponent } from '../usedcars.component';
import { CustomerService } from '../../../../service/customer.service';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../../service/user.service';
import { User } from '../../../../../model/user.model';


@Component({
  selector: 'app-view-more-details',
  standalone: true,
  imports: [UsedcarNavbarComponent,NgFor,UsedcarsComponent,NgIf,TableModule,DialogModule,ButtonModule,InputTextModule,FormsModule],
  templateUrl: './view-more-details.component.html',
  styleUrl: './view-more-details.component.css'
})
export class ViewMoreDetailsComponent implements OnInit{

  usedCar: any;
  user:User;
  token:string=''; 
  loginErrMsg:string='';
  password: string = '';
  username: string = '';
  modalTitle: string = '';
  modalDescription: string = '';
  usedCarId: number;

  constructor(private customerService:CustomerService,private router:Router,private userService:UserService,private actRoute:ActivatedRoute){
    this.usedCarId=Number(this.actRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit():void{
      this.getCarDetails(this.usedCarId);
  }

    getCarDetails(carId:number):void{
    this.customerService.getUsedCarsById(carId).subscribe({
      next:(res)=>{
        this.usedCar = res; // Store the fetched used car details
        console.log(this.usedCar);
      },
      error: (err) => {
        console.error('Error fetching used car details:', err); // Handle any error
      }
    })
  }

wishlistClick(usedCarId:number) {
  this.modalTitle = 'Add to Wishlist';
  this.modalDescription = 'Please log in to add this car to your wishlist.';
}

buyClick(usedCarId:number){
  this.modalTitle = 'Proceed to Buy';
  this.modalDescription = 'Please log in to proceed with the purchase.';
}

save() {
  this.userService.getToken(this.username, this.password).subscribe({
    next: (data) => {
      this.token = data.token;
      
      this.userService.getUserDetails(this.token).subscribe({
        next: (data) => {
          this.user = data;
          localStorage.setItem('token', this.token);
          localStorage.setItem('username', this.user.username);
          localStorage.setItem('role', this.user.role);

          if (this.modalTitle === 'Add to Wishlist') {
            this.addToWishlist(this.usedCarId);
          } else if (this.modalTitle === 'Proceed to Buy') {
            alert('Proceeding to buy.');
            this.router.navigateByUrl('/usedcars/purchase');  // Assuming purchase dashboard URL
          }
        },
        error: (err) => {
          console.log('Error retrieving user details:', err);
          this.loginErrMsg = 'Error retrieving user details. Please try again.';
        }
      });
    },
    error: (err) => {
      console.log('Login failed:', err);

      // Show alert for invalid credentials
      alert('Invalid Credentials. Please try again.');
      this.loginErrMsg = 'Invalid Credentials';
    }
  });
}

addToWishlist(usedCarId: number) {
    this.customerService.addToWishlist(usedCarId).subscribe({
      next: (res) => {
        alert('Added to wishlist successfully.');
        this.router.navigateByUrl('/customer/dashboard'); // Navigate to customer dashboard
      },
      error: (err) => {
        console.error('Error adding to wishlist:', err);
        alert('Failed to add to wishlist. Please try again.');
      }
    });
  }
}

