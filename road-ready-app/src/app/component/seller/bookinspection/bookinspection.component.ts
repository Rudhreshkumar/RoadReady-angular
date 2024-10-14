import { Component } from '@angular/core';
import { TitlenavabarComponent } from "../titlenavabar/titlenavabar.component";
import { SellerService } from '../../../service/seller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookinspection',
  standalone: true,
  imports: [TitlenavabarComponent],
  templateUrl: './bookinspection.component.html',
  styleUrl: './bookinspection.component.css'
})
export class BookinspectionComponent {
  constructor(private sellerService:SellerService,private router:Router){}


onclick(){
  this.router.navigateByUrl('/selectlocation')
}
  

}
