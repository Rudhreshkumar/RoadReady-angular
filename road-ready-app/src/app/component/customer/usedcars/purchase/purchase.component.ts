import { Component, OnInit } from '@angular/core';
import { UsedcarsComponent } from '../usedcars.component';
import { UsedCar } from '../../../../../model/usedCar.model';
import { CustomerService } from '../../../../service/customer.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../../service/user.service';

@Component({
  selector: 'app-purchase',
  standalone: true,
  imports: [UsedcarsComponent,FormsModule,RouterLink],
  templateUrl: './purchase.component.html',
  styleUrl: './purchase.component.css'
})
export class PurchaseComponent implements OnInit {

  usedCar: UsedCar | null = null;
  carImagePath: string = '';
  defaultFallbackImage = 'Images/defaultImage.jpg';
  username: string;

  quantity: number = 1;
  inspectionCharges: number = 5000;
  documentationFee: number = 5000;
  serviceCharge: number = 30000;
  warrantyOption: number = 5000;

  cardDetails = {
    cardNumber: '',
    expiryDate: '',
    cardholderName: '',
    cvc: ''
  };

  constructor(private customerService:CustomerService,private router:Router,private route:ActivatedRoute,private userService:UserService){}

  ngOnInit():void{
    this.username = this.userService.getUsername();

    const carId = this.route.snapshot.paramMap.get('id');
    if (carId) {
      const id = +carId;
      this.customerService.getUsedCarsById(id).subscribe({
        next: (car) => {
          this.usedCar = car;
          this.getCarImages(id); 
        },
        error: (error) => {
          console.error('Error fetching car details:', error);
        }
      });
    }
  }

  getCarImages(usedCarId: number) {
    this.customerService.getCarImagesByUsedCarId(usedCarId).subscribe({
      next: (images) => {
        this.carImagePath = images && images.length > 0
          ? 'Images/' + images[0].path.split('\\').pop() 
          : this.defaultFallbackImage; 
      },
      error: (err) => {
        console.error(`Error fetching images for car ID ${usedCarId}:`, err);
        this.carImagePath = this.defaultFallbackImage;
      }
    });
  } 

  get totalAmount(): number {
    if (!this.usedCar) {
      return 0; // Return 0 if usedCar is null
    }
    return (this.usedCar.price * this.quantity) +
      this.inspectionCharges +
      this.documentationFee +
      this.warrantyOption;
  }

  onPurchase(): void {
    const selectedCarId = this.usedCar?.id;

    const purchaseData = {
      totalAmount: this.totalAmount,
      dateOfPurchase: new Date(),
      carImage: this.carImagePath 
    };

    this.customerService.addPurchase(selectedCarId, purchaseData).subscribe({
      next: (response) => {
        console.log('Purchase successful:', response);
        this.router.navigateByUrl('/customer/my-purchase');
      },
      error: (err) => {
        console.error('Error making purchase:', err);
      }
    });
  }
}

