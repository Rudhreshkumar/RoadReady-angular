import { Component, OnInit } from '@angular/core';
import { SellersidebarComponent } from "../sellersidebar/sellersidebar.component";
import { UserService } from '../../../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SellerService } from '../../../service/seller.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { CustomerNavbarComponent } from "../../customer/customer-navbar/customer-navbar.component";
import { NavbarComponent } from "../../landing-page/navbar/navbar.component";
import { TitlenavabarComponent } from "../titlenavabar/titlenavabar.component";

@Component({
  selector: 'app-membership',
  standalone: true,
  imports: [FormsModule, SellersidebarComponent, NgIf, CustomerNavbarComponent, NavbarComponent, TitlenavabarComponent],
  templateUrl: './membership.component.html',
  styleUrl: './membership.component.css'
})
export class MembershipComponent implements OnInit{
  membershipType: string='';
  successMsg: string;
  errorMsg: any;
  carId: number;
  constructor(private sellerservice:SellerService,private router:Router,private route: ActivatedRoute){
   
  }
 
  ngOnInit(): void {
    this.carId = +this.route.snapshot.paramMap.get('id'); 
  }
  onClick() {
    this.sellerservice.postMembershipType({
      "membershipType": this.membershipType,
    }).subscribe({
      next: (data) => {
        this.successMsg = 'Membership added';
        this.errorMsg = undefined;

        this.router.navigate(['/seller/dashboard']); 
      },
      error: (err) => {
        this.successMsg = undefined;
        console.log(err);
      }
    });
  }

}
