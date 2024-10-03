import { Component } from '@angular/core';
import { SellersidebarComponent } from "../sellersidebar/sellersidebar.component";

@Component({
  selector: 'app-membership',
  standalone: true,
  imports: [SellersidebarComponent],
  templateUrl: './membership.component.html',
  styleUrl: './membership.component.css'
})
export class MembershipComponent {

}
