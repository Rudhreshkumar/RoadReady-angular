import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SellersidebarComponent } from "../../seller/sellersidebar/sellersidebar.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavbarComponent, SellersidebarComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
