import { Component } from '@angular/core';
import { SellersidebarComponent } from "../sellersidebar/sellersidebar.component";

@Component({
  selector: 'app-sellerdashboard',
  standalone: true,
  imports: [SellerdashboardComponent, SellersidebarComponent],
  templateUrl: './sellerdashboard.component.html',
  styleUrl: './sellerdashboard.component.css'
})
export class SellerdashboardComponent {
  username: any = localStorage.getItem('username'); 
}
