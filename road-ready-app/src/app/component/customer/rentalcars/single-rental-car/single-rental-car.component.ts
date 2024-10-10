import { Component, inject, Input, input, OnInit } from '@angular/core';
import { CustomerNavbarComponent } from '../../customer-navbar/customer-navbar.component';
import { CustomersidebarComponent } from '../../customersidebar/customersidebar.component';
import { RentalServiceService } from '../../../../service/rental-service.service';
import { UserService } from '../../../../service/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-rental-car',
  standalone: true,
  imports: [CustomerNavbarComponent, CustomersidebarComponent],
  templateUrl: './single-rental-car.component.html',
  styleUrl: './single-rental-car.component.css',
})
export class SingleRentalCarComponent implements OnInit {
  // scid = input.required<string>()
  // @Input() scid!: string;

  route = inject(ActivatedRoute);
  id: number | null = null;

  rentalCars: any[] = [];
  filteredRentalCar: any|null=null;

  constructor(private userService: UserService) {
    userService.getRentalCars().subscribe({
      next: (data) => {
        this.rentalCars = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id =Number(params.get('scid'));
      console.log(this.id);

      if (this.id) {
        this.filteredRentalCar = this.rentalCars.find((car) => car.id === this.id);

        if (this.filteredRentalCar) {
          console.log('Filtered Rental Car:', this.filteredRentalCar);
        } else {
          console.log('No car found with the provided ID');
        }
      }

    });
  }
}
