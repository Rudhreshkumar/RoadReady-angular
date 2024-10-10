import { Component } from '@angular/core';
import { TitlenavabarComponent } from "../titlenavabar/titlenavabar.component";
import { SellerService } from '../../../service/seller.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-checkingprice',
  standalone: true,
  imports: [TitlenavabarComponent,RouterLink],
  templateUrl: './checkingprice.component.html',
  styleUrl: './checkingprice.component.css'
})
export class CheckingpriceComponent {
 
  constructor(private sellerService:SellerService,private router:Router){

  }
  onClick(){
    this.router.navigateByUrl('/usedcar/add')
  }
  onclickbook(){
    this.router.navigateByUrl('/addmembership')

  }

}
