import { Component, OnInit} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomerService } from '../../../../service/customer.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Customer } from '../../../../../model/customer.model';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink,FormsModule,NgFor,NgIf],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  customer: Customer = {
    id:'',
    name: '',
    address: '',
    phoneNumber: '',
    user: { 
      username: '',
      password: ''
    }
  };

  pancardFile: File | null = null;
  driverLicenseFile: File | null = null;
  imageMsg: string = '';
  show:boolean=true;
  file:File=null;
  pancardImage:string[]=[];
  driverLicenseImage:string[]=[];

  constructor(private customerService:CustomerService){}

  onAddCustomer(){
    this.customerService.addCustomer(this.customer).subscribe({
      next:(data)=>{
        this.customer=data;
        this.show=true;
        console.log(this.customer)
      },
      error: (err) => {
        console.error('Error adding customer:', err);
      } 
    });
  }

  onPanCardChange(event: any) {
    this.pancardFile = event.target.files[0]; // Use specific variable for PAN card
  }

  onDriverLicenseChange(event: any) {
    this.driverLicenseFile = event.target.files[0]; // Use specific variable for Driver License
  }


  onUploadPanCard(){

    if (!this.pancardFile || !this.isImage(this.pancardFile)) {
      alert('Please select a valid PAN card image file');
      return;
    }

    let formData = new FormData();
    formData.set('file',this.file);
    this.customerService.uploadPan(formData,this.customer.id).subscribe({
      next:(data)=>{
        this.pancardImage.push(this.pancardFile.name)
        this.imageMsg = 'PAN Card ' + this.pancardFile.name + ' is uploaded' ;
        this.pancardFile = null;
      },
      error: (err) => {
        console.error('Error uploading PAN Card:', err);
      }
    });
  }

  onUploadDriverLicense() {

    if (!this.driverLicenseFile || !this.isImage(this.driverLicenseFile)) {
      alert('Please select a valid Driver License image file');
      return;
    }
    
    let formData = new FormData();
    formData.set('file', this.file);
    this.customerService.uploadDriverLicense(formData, this.customer.id).subscribe({
      next: (data) => {
        this.driverLicenseImage.push(this.driverLicenseFile.name);
        this.imageMsg = 'Driver License ' + this.driverLicenseFile.name + ' is uploaded';
        this.driverLicenseFile = null;
      },
      error: (err) => {
        console.error('Error uploading Driver License:', err);
      }
    });
  }

  private isImage(file: File): boolean {
    const validImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
    return file && validImageTypes.includes(file.type);
  }
 
}
