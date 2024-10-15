import { Component, OnInit} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CustomerService } from '../../../../service/customer.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Customer } from '../../../../../model/customer.model';
import { NgFor, NgIf } from '@angular/common';
import { EmailService } from '../../../../service/email.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink,FormsModule,NgFor,NgIf],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  customer = {
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
  imageMsg: string = '';
  show:boolean=true;
  file:File=null;
  pancardImage:string[]=[];
  showFileUpload: boolean = false;
  customerId:number 
 

  constructor(private customerService:CustomerService,private router:Router,private emailService:EmailService){}

  // onSignUp(form: NgForm) {
  //   if (form.valid) {
  //     const observer = {
  //       next: (data: any) => {
  //         this.customer = data;
  //         this.customerId = Number(this.customer.id); 
  //         this.show = true;
  //         this.showFileUpload = true;
  //         console.log('Customer registered successfully:', this.customer);
  //         this.router.navigate(['/login']);
  //       },
  //       error: (err: any) => {
  //         console.error('Error adding customer:', err);
  //       },
  //       complete: () => {
  //         console.log('Signup process completed');
  //       }
  //     };
  //     this.customerService.addCustomer(this.customer).subscribe(observer);
  //   } else {
  //     console.error('Form is not valid');
  //   }
  // }

  onSignUp(form: NgForm) {
    if (form.valid) {
      const observer = {
        next: (data: any) => {
          this.customer = data;
          this.show = true;
          this.showFileUpload = true;
          console.log('Customer registered successfully:', this.customer);

          // Call to send the verification email after successful signup
          this.sendVerificationEmail();
        },
        error: (err: any) => {
          console.error('Error adding customer:', err);
        },
        complete: () => {
          console.log('Signup process completed');
        }
      };
      this.customerService.addCustomer(this.customer).subscribe(observer);
    } else {
      console.error('Form is not valid');
    }
  }

  sendVerificationEmail() {
    this.emailService.sendEmail().subscribe({
      next: (response) => {
        console.log('Verification email sent:', response);
        // Navigate to the login page after sending the email
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Error sending verification email:', err);
      }
    });
  }

 
}
