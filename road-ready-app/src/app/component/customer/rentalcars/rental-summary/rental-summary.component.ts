import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RentalServiceService } from '../../../../service/rental-service.service';

@Component({
  selector: 'app-rental-summary',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './rental-summary.component.html',
  styleUrl: './rental-summary.component.css'
})
export class RentalSummaryComponent implements OnInit{


  
  driver:boolean;
  duration:string;

  
  safeKeepId:string;
  panNumber:string;

  constructor(private rentalService :RentalServiceService){}

  ngOnInit(): void {
    this.rentalService.rentalInfo$.subscribe(rental=> {
      this.driver=rental.driver;
      this.duration=rental.duration;
    })

    this.rentalService.safeKeepingInfo$.subscribe(rental=>{
      this.safeKeepId=rental.safeKeepId;
      this.panNumber=rental.panNumber;
    })
  }


  
}
