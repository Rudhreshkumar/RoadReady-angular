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

}
