// onboard.component.ts
import { Component, ViewChild } from '@angular/core';
import { BrandComponent } from '../brand/brand.component';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { ModelComponent } from '../model/model.component';
import { UsedcarsummaryComponent } from '../usedcarsummary/usedcarsummary.component';
import { UsedcardetailsComponent } from '../usedcardetails/usedcardetails.component';
import { TitlenavabarComponent } from "../../seller/titlenavabar/titlenavabar.component";

@Component({
  selector: 'app-onboard',
  standalone: true,
  imports: [StepperModule, ButtonModule, BrandComponent, ModelComponent, UsedcarsummaryComponent, UsedcardetailsComponent, TitlenavabarComponent],
  templateUrl: './onboard.component.html',
  styleUrl: './onboard.component.css'
})
export class OnboardComponent {
  brandId: number;  // Store brandId received from BrandComponent
  modelId: number;  // Store modelId received from ModelComponent

  onBrandAdded(brandId: number) {
    this.brandId = brandId;  // Capture brandId from the event
  }

  onModelAdded(modelId: number) {
    this.modelId = modelId;
    console.log('Model ID received in OnboardComponent:', modelId);  // Debugging log
  }
}