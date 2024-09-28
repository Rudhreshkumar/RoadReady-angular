import { Component } from '@angular/core';

@Component({
  selector: 'app-sellerdashboard',
  standalone: true,
  imports: [],
  templateUrl: './sellerdashboard.component.html',
  styleUrl: './sellerdashboard.component.css'
})
export class SellerdashboardComponent {
  username: any = localStorage.getItem('username'); 
}
