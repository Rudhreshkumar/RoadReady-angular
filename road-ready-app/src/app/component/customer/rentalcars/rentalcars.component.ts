import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-rentalcars',
  standalone: true,
  imports: [NgFor],
  templateUrl: './rentalcars.component.html',
  styleUrl: './rentalcars.component.css',
})
export class RentalcarsComponent {
  rentalCars: any[] = [];

  constructor(private userService: UserService) {
    userService.getRentalCars().subscribe({
      next: (data) => {
        this.rentalCars = data;
        console.log(this.rentalCars);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
