import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomerService } from '../../../../service/customer.service';

@Component({
  selector: 'app-usedcar-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './usedcar-navbar.component.html',
  styleUrl: './usedcar-navbar.component.css'
})
export class UsedcarNavbarComponent {

  constructor(private customerService:CustomerService){}

}
