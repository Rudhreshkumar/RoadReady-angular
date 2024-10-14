import { Component, Input } from '@angular/core';
import { SellerService } from '../../../service/seller.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-usedcardetails',
  standalone: true,
  imports: [DialogModule, FormsModule, ReactiveFormsModule, NgIf,NgFor],
  templateUrl: './usedcardetails.component.html',
  styleUrls: ['./usedcardetails.component.css']
})

export class UsedcardetailsComponent {
  usedCarForm: FormGroup;
  successMsg: string;
  errorMsg: string;
  showImageUpload: boolean = false;
  carId: number; 
  file: File = null; 
  imageMsg: string = '';
  uploadedImages: string[] = [];

  @Input() modelId: number; 

  constructor(
    private fb: FormBuilder,
    private sellerService: SellerService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.usedCarForm = this.fb.group({
      engineNum: ['', Validators.required],
      registrationNum: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      location: ['', Validators.required],
      mileage: ['', [Validators.required, Validators.min(0)]],
      year: ['', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]],
      color: ['', Validators.required],
      seatingCapacity: ['', [Validators.required, Validators.min(1)]],
      fuelType: ['', Validators.required],
      transmissionType: ['', Validators.required],
      ownership: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onClick() {
    if (!this.carId && this.usedCarForm.valid) {
      const requestData = this.usedCarForm.value;

      this.sellerService.postUsedcar(this.modelId, requestData).subscribe({
        next: (data) => {
          this.carId = data.id; 
          this.successMsg = 'Used car added successfully';
          this.errorMsg = undefined;
          this.showImageUpload = true; 
        },
        error: (err) => {
          this.successMsg = undefined;
          this.errorMsg = 'Failed to add used car';
          console.error(err);
        }
      });
    } else if (this.carId) {
      this.errorMsg = 'Car already added. You can upload the image now.';
    } else {
      this.errorMsg = 'Please fill out all required fields.';
    }
  }

  onFileChange(event: any) {
    this.file = event.target.files[0]; 
  }

  onUpload() {
    if (this.file && this.carId) {
      const formData = new FormData();
      formData.append('file', this.file);
      this.sellerService.uploadCarImage(this.carId, formData).subscribe({
        next: (data) => {
          this.uploadedImages.push(this.file.name); 
          this.imageMsg = `Image ${this.file.name} uploaded successfully.`;
          this.file = null;
        },
        error: (err) => {
          console.error(err);
          this.imageMsg = `Failed to upload image ${this.file.name}.`;
        }
      });
    } else if (!this.carId) {
      this.imageMsg = 'Please add the car before uploading images.';
    }
  }
}
