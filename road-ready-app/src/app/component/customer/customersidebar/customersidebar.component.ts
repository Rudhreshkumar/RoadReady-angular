import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-customersidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './customersidebar.component.html',
  styleUrl: './customersidebar.component.css',
})
export class CustomersidebarComponent {
  username: any;

  constructor(private router: Router) {
    if (typeof window !== 'undefined' && window.localStorage) {
      this.username = window.localStorage.getItem('username');
    }
  }
}
