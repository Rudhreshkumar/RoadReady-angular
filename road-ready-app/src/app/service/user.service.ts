import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../model/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getToken(username: any, password: any) : Observable<any> {
    return this.http.post<any>('http://localhost:8083/auth/token', {
          "username": username,
          "password": password
      }) 
}
getUserDetails(token: string) : Observable<User>{
  return this.http.get<User>('http://localhost:8083/auth/login', {
    headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)
  })
}

private apiUrl = 'http://localhost:8083/auth/customer/signup'; 
addCustomerSignUp(customerData: any): Observable<any> {
  const formData = new FormData();
  formData.append('user', JSON.stringify(customerData.user)); // Add user data
  formData.append('panCard', customerData.panCard); // Add PAN Card file
  formData.append('driverLicense', customerData.driverLicense); // Add Driver License file

  return this.http.post<any>(this.apiUrl, formData, {
    headers: new HttpHeaders({ 'enctype': 'multipart/form-data' }) // Set content type for form data
  });
}

getRentalCars() : Observable<any>{
  return this.http.get<any>('http://localhost:8083/executive/rentalcars/all')
}


}
