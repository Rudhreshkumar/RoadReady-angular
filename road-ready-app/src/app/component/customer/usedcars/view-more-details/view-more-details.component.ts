import { Component, OnInit } from '@angular/core';
import { UsedcarNavbarComponent } from '../usedcar-navbar/usedcar-navbar.component';
import { CommonModule, NgFor, NgIf } from '@angular/common';
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
import { UsedCar } from '../../../../../model/usedCar.model';
import { CarImageModel } from '../../../../../model/carImage.model';


@Component({
  selector: 'app-view-more-details',
  standalone: true,
  imports: [UsedcarNavbarComponent,NgFor,UsedcarsComponent,NgIf,TableModule,DialogModule,ButtonModule,InputTextModule,FormsModule,CommonModule],
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
  filteredUsedCars: UsedCar[] = [];
  usedCars: UsedCar[] = [];
  usedCarsWithImages: { id: number; imagePath: string }[] = [];
  defaultFallbackImage = 'Images/defaultImage.jpg';
  images: { [key: number]: CarImageModel[] } = {};

  constructor(private customerService:CustomerService,private router:Router,private userService:UserService,private actRoute:ActivatedRoute){
    this.usedCarId=Number(this.actRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit():void{
      this.getCarDetails(this.usedCarId);
      this.getCarImages(this.usedCarId);
  }

    getCarDetails(carId:number):void{
    this.customerService.getUsedCarsById(carId).subscribe({
      next:(res)=>{
        this.usedCar = res;
        console.log(this.usedCar);
      },
      error: (err) => {
        console.error('Error fetching used car details:', err); 
      }
    })
  }

  getCarImages(usedCarId: number): void {
    this.customerService.getCarImagesByUsedCarId(usedCarId).subscribe({
      next: (images) => {
        this.usedCarsWithImages = images && images.length > 0
          ? images.map(img => ({ id: img.id, imagePath: 'Images/' + img.path.split('\\').pop() })) // Assign image paths
          : [{ id: 0, imagePath: this.defaultFallbackImage }]; // Fallback image if no images are found
      console.log("img func called")},
      error: (err) => {
        console.error(`Error fetching images for car ID ${usedCarId}:`, err);
        this.usedCarsWithImages = [{ id: 0, imagePath: this.defaultFallbackImage }]; // Fallback image in case of error
      }
    });
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

          if (!this.usedCarId) {
            console.error('usedCarId is not defined.');
            this.loginErrMsg = 'Used car ID is not available.';
            return; 
        }

          if (this.modalTitle === 'Add to Wishlist') {
            this.addToWishlist(this.usedCarId);
          } else if (this.modalTitle === 'Proceed to Buy') {
            this.router.navigate(['/usedcars/purchase/',this.usedCarId]) 
          } 
        },
        error: (err) => {
          console.log('Error retrieving user details:', err);
          this.loginErrMsg = 'Error retrieving user details. Please try again.';
        }
    });
    },
    error: (err) => {
           console.log('Error getting token:', err);
           this.loginErrMsg = 'Invalid username or password. Please try again.';
          }
        });
       }

addToWishlist(usedCarId: number) {
    this.customerService.addToWishlist(usedCarId).subscribe({
      next: (res) => {
        this.router.navigateByUrl('/customer/wishlisted-cars');
      },
      error: (err) => {
        console.error('Error adding to wishlist:', err);
        alert('Failed to add to wishlist. Please try again.');
      }
    });
  } 

}

