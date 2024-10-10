import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RentalServiceService } from '../../../../service/rental-service.service';

@Component({
  selector: 'app-safekeeping-info',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './safekeeping-info.component.html',
  styleUrl: './safekeeping-info.component.css',
})
export class SafekeepingInfoComponent implements OnInit {

  safeKeepId:string;
  panNumber:string;

  constructor(private rentalService :RentalServiceService){}

  ngOnInit(): void {
    this.rentalService.safeKeepingInfo$.subscribe(rental=>{
      this.safeKeepId=rental.safeKeepId;
      this.panNumber=rental.panNumber;
    })
    
  }

  onChange(){
    this.rentalService.setSafeKeepingInfo(this.safeKeepId,this.panNumber)
  }
}
