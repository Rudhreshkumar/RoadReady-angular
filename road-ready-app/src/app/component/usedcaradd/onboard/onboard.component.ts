// onboard.component.ts
import { Component, ViewChild } from '@angular/core';
import { BrandComponent } from '../brand/brand.component';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { ModelComponent } from '../model/model.component';
import { UsedcarsummaryComponent } from '../usedcarsummary/usedcarsummary.component';
import { UsedcardetailsComponent } from '../usedcardetails/usedcardetails.component';
import { TitlenavabarComponent } from "../../seller/titlenavabar/titlenavabar.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-onboard',
  standalone: true,
  imports: [StepperModule, ButtonModule, BrandComponent, ModelComponent, UsedcarsummaryComponent, UsedcardetailsComponent, TitlenavabarComponent,RouterLink],
  templateUrl: './onboard.component.html',
  styleUrl: './onboard.component.css'
})
export class OnboardComponent {
  brandId: number;  
  modelId: number;  

  onBrandAdded(brandId: number) {
    this.brandId = brandId;  
  }

  onModelAdded(modelId: number) {
    this.modelId = modelId;
    console.log('Model ID received in OnboardComponent:', modelId);  
  }
}