import { Component, OnInit } from '@angular/core';
import { TitlenavabarComponent } from "../titlenavabar/titlenavabar.component";
import { NgClass, NgFor, NgIf } from '@angular/common';
import { SellersidebarComponent } from "../sellersidebar/sellersidebar.component";
import { ActivatedRoute } from '@angular/router';
import { SellerService } from '../../../service/seller.service';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../../../service/shared.service';


@Component({
  selector: 'app-selectlocation',
  standalone: true,
  imports: [TitlenavabarComponent, NgIf, NgFor, SellersidebarComponent,NgClass,FormsModule],
  templateUrl: './selectlocation.component.html',
  styleUrl: './selectlocation.component.css'
})
export class SelectlocationComponent implements OnInit {
 
  showHomeAddress = false;
  showWorkAddress = false;
  showOtherAddress = false;

  usedCarId: any; 
  bookingDetails: any = {
    addressType: '',
    address: '',
    date: '',
    time: ''
  };
 
  constructor(private route: ActivatedRoute, private sellerService: SellerService,private sharedService:SharedService) {}

  ngOnInit() {
    this.usedCarId = this.route.snapshot.paramMap.get('usedCarId');
    console.log('Used Car ID:', this.usedCarId); 
  }

  toggleAddressBox(type: string) {
    this.showHomeAddress = (type === 'home');
    this.showWorkAddress = (type === 'work');
    this.showOtherAddress = (type === 'other');
    this.bookingDetails.addressType = type; 
  }

  showModal() {
    const modalElement = document.getElementById('confirmationModal');
    if (modalElement) {
      modalElement.classList.add('show');
      modalElement.style.display = 'block';
    }
  }

  hideModal() {
    const modalElement = document.getElementById('confirmationModal');
    if (modalElement) {
      modalElement.classList.remove('show');
      modalElement.style.display = 'none';
    }
  }

  bookInspection() {
    const bookingData = {
      addressType: this.bookingDetails.addressType,
      address: this.bookingDetails.address || '', 
     
       date: (document.getElementById('date-picker') as HTMLInputElement).value,
       time: (document.getElementById('time-picker') as HTMLInputElement).value
    };

    if (!this.usedCarId) {
      alert('Invalid UsedCar ID');
      return;
    }

    if (!bookingData.date || !bookingData.time) {
      alert('Please select a date and time for the booking.');
      return;
    }

    this.sellerService.postbooking(this.usedCarId, bookingData).subscribe({
      next: (response) => {
        console.log('Booking successful:', response);
        this.showModal(); 
       
      },
      error: (error) => {
        console.error('Booking failed:', error);
        alert('Booking failed, please try again.');
      },
      complete: () => {
        console.log('Booking process completed.');
      }
    });
  }


  





}
