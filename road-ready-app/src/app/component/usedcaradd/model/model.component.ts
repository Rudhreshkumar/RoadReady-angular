/*import { Component, Input } from '@angular/core';
import { SellerService } from '../../../service/seller.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-model',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './model.component.html',
  styleUrl: './model.component.css'
})
export class ModelComponent {
  modelname:string='';
  successMsg: string;
  errorMsg: any;
  brandId: any;
 
    
  
  constructor(private sellerservice:SellerService,private router:Router,private activatedroute:ActivatedRoute){
   
  }
  onClick(){
  

    this.activatedroute.paramMap.subscribe(params => {
      this.brandId = params.get("id")
    })
    this.sellerservice.postModel(this.modelname,this.brandId).subscribe({
      next:(data)=>{
        this.successMsg='Model added';
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

  

}*/



/*import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SellerService } from '../../../service/seller.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-model',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './model.component.html',
  styleUrl: './model.component.css'
})
export class ModelComponent {
  modelname: string = '';
  successMsg: string;
  errorMsg: any;

  @Input() brandId: number; 
  @Output() modelAdded = new EventEmitter<number>(); // Output event to emit modelId

  constructor(private sellerservice: SellerService, private router: Router, private activatedroute: ActivatedRoute) {}

  onClick() {
    this.activatedroute.paramMap.subscribe(params => {
      const brandIdParam = params.get("id");  
      if (brandIdParam) {
        this.brandId = +brandIdParam;  
      }
    });

    const requestData = { modelname: this.modelname };  

    this.sellerservice.postModel(this.brandId, requestData).subscribe({
      next: (data) => {
        this.successMsg = 'Model added successfully';
        this.errorMsg = undefined;
        this.modelAdded.emit(data.modelId); // Emit the modelId on success
      },
      error: (err) => {
        this.successMsg = undefined;
        console.log(err);
        this.errorMsg = 'Failed to add model';
      }
    });
  }

  resetmsg() {
    this.successMsg = undefined;
    this.errorMsg = undefined;
  }
}*/


// model.component.ts
/*import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SellerService } from '../../../service/seller.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-model',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './model.component.html',
  styleUrl: './model.component.css'
})
export class ModelComponent {
  modelname: string = '';
  successMsg: string;
  errorMsg: any;

  @Input() brandId: number; 
  @Output() modelAdded = new EventEmitter<number>(); // Output event to emit modelId

  constructor(private sellerservice: SellerService, private router: Router, private activatedroute: ActivatedRoute) {}

  onClick() {
    this.activatedroute.paramMap.subscribe(params => {
      const brandIdParam = params.get("id");  
      if (brandIdParam) {
        this.brandId = +brandIdParam; 
         
      }
    });

    const requestData = { modelname: this.modelname };  

    this.sellerservice.postModel(this.brandId, requestData).subscribe({
      next: (data) => {
        this.successMsg = 'Model added successfully';
        this.errorMsg = undefined;
        this.modelAdded.emit(data.modelId); // Emit the modelId on success
      },
      error: (err) => {
        this.successMsg = undefined;
        console.log(err);
        this.errorMsg = 'Failed to add model';
      }
    });
  }

  resetmsg() {
    this.successMsg = undefined;
    this.errorMsg = undefined;
  }
}*/


import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SellerService } from '../../../service/seller.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-model',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './model.component.html',
  styleUrl: './model.component.css'
})
export class ModelComponent {
  modelname: string = '';
  successMsg: string;
  errorMsg: any;

  @Input() brandId: number; 
  @Output() modelAdded = new EventEmitter<number>(); // Output event to emit modelId

  constructor(private sellerservice: SellerService, private router: Router, private activatedroute: ActivatedRoute) {}

  onClick() {
    this.activatedroute.paramMap.subscribe(params => {
      const brandIdParam = params.get("id");  
      if (brandIdParam) {
        this.brandId = +brandIdParam; 
         
      }
    });

    const requestData = { modelname: this.modelname };  

    this.sellerservice.postModel(this.brandId, requestData).subscribe({
      next: (data) => {
        this.successMsg = 'Model added successfully';
        this.errorMsg = undefined;
        this.modelAdded.emit(data.id); // Emit the modelId on success
      },
      error: (err) => {
        this.successMsg = undefined;
        console.log(err);
        this.errorMsg = 'Failed to add model';
      }
    });
  }

  resetmsg() {
    this.successMsg = undefined;
    this.errorMsg = undefined;
  }
}