import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CustomersidebarComponent } from '../customersidebar/customersidebar.component';
import { CustomerService } from '../../../service/customer.service';
import { NgFor, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-wishlisted-cars',
  standalone: true,
  imports: [CustomersidebarComponent,NgFor,NgIf,RouterLink],
  templateUrl: './wishlisted-cars.component.html',
  styleUrl: './wishlisted-cars.component.css'
})
export class WishlistedCarsComponent implements OnInit {
  
  usedCar: any[] = []; 
  defaultFallbackImage = 'Images/defaultImage.jpg';

  constructor(private customerService:CustomerService,private router:Router){}

  ngOnInit() {
    this.loadWishlistedCars();
}

loadWishlistedCars() {
  this.customerService.getWishlisted().subscribe({
    next: (res) => {
      this.usedCar = res; // Assuming res contains the updated array of used cars
      this.usedCar.forEach(car => {
        this.getCarImages(car.usedCar.id).subscribe({
          next: (images) => {
            car.imagePath = images && images.length > 0
              ? 'Images/' + images[0].path.split('\\').pop()
              : this.defaultFallbackImage; // Use fallback image if no images found
          },
          error: (err) => {
            console.error(`Error fetching images for car ID ${car.usedCar.id}:`, err);
            car.imagePath = this.defaultFallbackImage; // Use fallback image in case of error
          }
        });
      });

      console.log("Fetched wishlisted cars:", this.usedCar);
    },
    error: (err) => {
      console.error("Error loading wishlisted cars:", err);
    }
  });
}


getCarImages(usedCarId: number) {
  return this.customerService.getCarImagesByUsedCarId(usedCarId);
}

deleteFromWishlist(usedCarId: number) {
  this.customerService.deleteFromWishlist(usedCarId).subscribe({
    next: () => {    
        this.usedCar = this.usedCar.filter(car => car.usedCar.id !== usedCarId);
    },
    error: (error) => {
      console.error('Error removing used car from wishlist', error);
    },
  });
}
}