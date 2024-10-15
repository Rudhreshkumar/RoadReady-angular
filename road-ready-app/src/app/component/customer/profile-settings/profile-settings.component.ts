import { Component, OnInit } from '@angular/core';
import { CustomersidebarComponent } from '../customersidebar/customersidebar.component';
import { CustomerService } from '../../../service/customer.service';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-settings',
  standalone: true,
  imports: [CustomersidebarComponent,NgFor,NgIf,FormsModule],
  templateUrl: './profile-settings.component.html',
  styleUrl: './profile-settings.component.css'
})
export class ProfileSettingsComponent implements OnInit{

  name: string;
  phoneNumber: string ;
  address: string;
  panImageFile: File | null = null;
  successMsg: string = '';
  errorMsg: string = '';
  show: boolean = false;
  imageMsg: string = '';
  file:File=null;
  pancardImage:string[]=[];
  showFileUpload: boolean = false;
  customerId:number 
  
  constructor(private customerService:CustomerService,private router: Router) {}

  ngOnInit(): void {
    this.fetchCustomerDetails();
  }

  fetchCustomerDetails() {
    this.customerService.getCustomer().subscribe({
      next: (data) => {
        console.log(data);
        this.name = data.name;
        this.phoneNumber = data.phoneNumber;
        this.address = data.address;
      },
      error: (err) => {
        console.error(err);
        this.errorMsg = 'Failed to load customer details.';
      }
    });
  }

  resetMsg() {
    this.successMsg = '';
    this.errorMsg = '';
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.panImageFile = input.files[0];
      console.log(`Selected file: ${this.panImageFile.name}`);
    }
  }


  onSave() {
    const updatedCustomer = {
      name: this.name,
      phoneNumber: this.phoneNumber,
      address: this.address
    };
  
    this.customerService.updateCustomerProfile(updatedCustomer).subscribe({
      next: (response) => {
        this.successMsg = 'Profile updated successfully';
        this.errorMsg = '';
        if (this.panImageFile) {
          this.uploadPan(response.id); // Ensure you are getting the correct ID from the response
        }
      },
      error: (err) => {
        this.successMsg = '';
        console.error(err);
        this.errorMsg = 'Failed to update profile.';
      }
    });
  }

  uploadPan(customerId:number) {
    const formData = new FormData();
    formData.append('file', this.panImageFile!); // Append the file with the key 'file'
    this.customerService.uploadPan(formData, customerId).subscribe({
      next: () => {
        this.successMsg = 'PAN image uploaded successfully';
      },
      error: (err) => {
        console.error(err);
        this.errorMsg = 'Failed to upload PAN image.';
      }
    });
  }

  onUploadPanCard() {
    if (this.panImageFile && this.customerId) {
      const formData = new FormData();
      formData.append('file', this.panImageFile); 
      this.customerService.uploadPan(formData, this.customerId).subscribe({
        next: (data) => {
          this.pancardImage.push(this.panImageFile.name); 
          this.imageMsg = `Image ${this.panImageFile.name} uploaded successfully.`;
          this.panImageFile = null; 
        },
        error: (err) => {
          console.error('Error uploading PAN Card:', err);
          this.imageMsg = 'Failed to upload PAN Card ' + this.panImageFile.name + '.';
        }
      });
    } else if (!this.customerId) {
      this.imageMsg = 'Please provide customer ID before uploading PAN Card.';
    }
  }

  onCancel() {
    this.router.navigateByUrl("/customer/profile"); 
  }
}

