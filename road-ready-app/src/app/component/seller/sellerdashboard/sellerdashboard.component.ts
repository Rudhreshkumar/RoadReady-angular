import { Component, OnInit } from '@angular/core';
import { SellersidebarComponent } from "../sellersidebar/sellersidebar.component";
import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { SellerService } from '../../../service/seller.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sellerdashboard',
  standalone: true, 
  imports: [NgFor, RouterLink, SellersidebarComponent,NgClass,NgFor,NgIf,NgStyle], 
  templateUrl: './sellerdashboard.component.html',
  styleUrls: ['./sellerdashboard.component.css']
})
export class SellerdashboardComponent implements OnInit {
  username: string | null = localStorage.getItem('username');
  usedCars: any[] = []; 
  isBookingDisabled = false;
  showCheckPriceButton = false;
  defaultFallbackImage = 'Images/defaultImage.jpg';
  usedCarsWithImages: { id: number; imagePath: string }[] = [];
  constructor(private sellerService: SellerService,private router:Router) {} 

  ngOnInit(): void {
    this.getUsedCars();
  }
  
  getUsedCars() {
    this.sellerService.getsellercar().subscribe({
      next: (cars) => {
        this.usedCars = cars;
        this.usedCars.forEach(car => {
          this.getCarImages(car.id).subscribe({
            next: (images) => {
              car.imagePath = images && images.length > 0
                ? 'Images/' + images[0].path.split('\\').pop() 
                : this.defaultFallbackImage;
            },
            error: (err) => {
              console.error(`Error fetching images for car ID ${car.id}:`, err);
              car.imagePath = this.defaultFallbackImage;
            }
          });
        });
      },
      error: (error) => {
        console.error('Error fetching used cars:', error);
      }
    });
  }
  
  getCarImages(usedCarId: number) {
    return this.sellerService.getCarImagesByUsedCarId(usedCarId);
  }

  onEdit(id:any){
    this.router.navigateByUrl('/editcardetails/' + id)
}


  deletecar(id:number){
    this.sellerService.deletecar(id).subscribe({
      next:()=>{
        console.log('Car Deleted');
        this.usedCars=this.usedCars.filter(car=>car.id !==id);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  verifyCar(car: any) {
    
    this.router.navigate(['/selectlocation']);
    car.isVerified = true;
  }


  bookInspection(carId: number) {
    this.router.navigate(['/selectlocation', carId]);
    this.isBookingDisabled = true;

    this.sellerService.getBookingByCarId(carId).subscribe({
      next: (booking) => {
        if (booking) {
          this.showCheckPriceButton = true;
        }
      },
      error: (error) => {
        console.error('Error checking booking status:', error);
      }
    });
  }
  // bookInspection(carId: number) {
  //   this.isBookingDisabled = true;
  
  //   this.sellerService.getBookingByCarId(carId).subscribe({
  //     next: (booking) => {
  //       if (booking) {
  //         this.showCheckPriceButton = true;
  //         this.isBookingDisabled = true;
  //       } else {
  //         this.isBookingDisabled = false;
  //         this.router.navigate(['/selectlocation', carId]);
  //       }
  //     },
  //     error: (error) => {
  //       console.error('Error checking booking status:', error); // 400 Bad Request error here
  //       this.isBookingDisabled = false;
  //     }
  //   });
  // }
  

  

  onCheckPrice(carId: number) {
    this.sellerService.calculateFinalPrice(carId).subscribe({
      next: () => {
       
     this.router.navigate(['/finalprice', carId]);
      },
      error: (error) => {
        console.error('Error calculating final price:', error);
      }
    });
  }




  
}
