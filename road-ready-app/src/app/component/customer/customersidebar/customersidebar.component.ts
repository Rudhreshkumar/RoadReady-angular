import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-customersidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './customersidebar.component.html',
  styleUrl: './customersidebar.component.css'
})
export class CustomersidebarComponent {

  username: any;

  constructor(private router: Router){
     this.username= localStorage.getItem('username')
  }

}
