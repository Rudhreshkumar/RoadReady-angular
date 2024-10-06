import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
  })

  export class CustomerService{
    constructor(private http: HttpClient) { }

    getUsedCars() : Observable<any>{
        return this.http.get<any>('http://localhost:8083/Usedcars/all')
      }
    
    getUsedCarsById(id:number):Observable<any>{
      return this.http.get('http://localhost:8083/Usedcars/getUsedCars/' + id,     
      )
    }

    addToWishlist(usedCarId:number):Observable<any>{
      return this.http.post('http://localhost:8083/customer/wishlist/add', {
        id: usedCarId  // Ensure you send the correct structure
    }, {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
    }
  }
  