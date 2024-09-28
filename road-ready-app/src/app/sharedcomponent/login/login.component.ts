import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { NgIf } from '@angular/common';
import { Router } from 'express';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  loginForm: FormGroup;
  token:string=''; 
  loginErrMsg:string='';
  constructor(private userService: UserService){
    this.loginForm = new FormGroup({
      username: new FormControl('',[Validators.required,Validators.email]), 
      password: new FormControl('', Validators.required)
    });
  }
  onLogin(){
    
    this.userService.getToken( this.loginForm.value.username,  this.loginForm.value.password)
    .subscribe({
            next: (data)=>{
            this.token = data.token; 
              console.log(this.token)
            },
            error:(err)=>{
              console.log('in error....')
              this.loginErrMsg = 'Invalid Credentials'; 
            }
          })
  }

}
