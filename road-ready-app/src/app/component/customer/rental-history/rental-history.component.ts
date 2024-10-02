import { Component } from '@angular/core';
import { CustomersidebarComponent } from '../customersidebar/customersidebar.component';

@Component({
  selector: 'app-rental-history',
  standalone: true,
  imports: [CustomersidebarComponent],
  templateUrl: './rental-history.component.html',
  styleUrl: './rental-history.component.css'
})
export class RentalHistoryComponent {

}
