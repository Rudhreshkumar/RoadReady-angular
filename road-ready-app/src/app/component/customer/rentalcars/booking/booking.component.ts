import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { SafekeepingInfoComponent } from "../safekeeping-info/safekeeping-info.component";
import { RentalInfoComponent } from "../rental-info/rental-info.component";
import { RentalSummaryComponent } from "../rental-summary/rental-summary.component";

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [ButtonModule, StepperModule, SafekeepingInfoComponent, RentalInfoComponent, RentalSummaryComponent],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css',
})
export class BookingComponent {}
