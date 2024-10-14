import { Component } from '@angular/core';
import { CustomersidebarComponent } from '../customersidebar/customersidebar.component';

@Component({
  selector: 'app-myactivity',
  standalone: true,
  imports: [CustomersidebarComponent],
  templateUrl: './myactivity.component.html',
  styleUrl: './myactivity.component.css'
})
export class MyactivityComponent {

}
