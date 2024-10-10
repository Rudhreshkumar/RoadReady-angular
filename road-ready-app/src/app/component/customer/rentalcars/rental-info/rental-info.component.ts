import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RentalServiceService } from '../../../../service/rental-service.service';
import { Rental } from '../../../../../model/rental.model';

@Component({
  selector: 'app-rental-info',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './rental-info.component.html',
  styleUrl: './rental-info.component.css'
})
export class RentalInfoComponent implements OnInit {

  driver:boolean;
  duration:string;
  rental:Rental={
    driver:false,
    duration:"",

  }

  constructor(private rentalService :RentalServiceService){}

  ngOnInit(): void {
    this.rentalService.rentalInfo$.subscribe(rental=> {
      this.driver=rental.driver;
      this.duration=rental.duration;
    })
    
  }

  onChange(){
    this.rentalService.setRentalInfo(this.driver,this.duration)
  }

}
