import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-dashboard',
  standalone: true,
  imports: [NavbarComponent,RouterLink],
  templateUrl: './book-dashboard.component.html',
  styleUrl: './book-dashboard.component.css'
})
export class BookDashboardComponent {

}
