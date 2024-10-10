import { Component } from '@angular/core';
import { SellersidebarComponent } from "../sellersidebar/sellersidebar.component";
import { SellerService } from '../../../service/seller.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usedcar',
  standalone: true,
  imports: [SellersidebarComponent,NgIf,FormsModule],
  templateUrl: './usedcar.component.html',
  styleUrl: './usedcar.component.css'
})
export class UsedcarComponent {
  brandname:string='';
  modelname:string='';
  successMsg: string;
  errorMsg: any;
  constructor(private sellerservice:SellerService,private router:Router){
   
  }
  onClick(){
    this.sellerservice.postBrand({
      "brandname":this.brandname
    }).subscribe({
      next:(data)=>{
        this.successMsg='Brand added';
        this.errorMsg=undefined
      },
      error:(err)=>{
        this.successMsg = undefined;
        console.log(err)
      }
    })
  }
  resetmsg(){
    this.successMsg = undefined;
    this.errorMsg=undefined;
  }

 /* onClickModel(){
    this.sellerservice.postModel({
      "modelname":this.modelname
    }).subscribe({
      next:(data)=>{
        this.successMsg='model added';
        this.errorMsg=undefined
      },
      error:(err)=>{
        this.successMsg = undefined;
        console.log(err)
      }
    })
  }
  resetmsgModel(){
    this.successMsg = undefined;
    this.errorMsg=undefined;
  }*/

}
