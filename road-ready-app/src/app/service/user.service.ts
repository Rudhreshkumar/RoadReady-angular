import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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



}
