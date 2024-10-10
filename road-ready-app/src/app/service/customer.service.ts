import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UsedCar } from "../../model/usedCar.model";
import { Customer } from "../../model/customer.model";



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

    getFilteredUsedCars(filter: Partial<UsedCar>):Observable<UsedCar[]>{
      return this.http.post<UsedCar[]>('http://localhost:8083/Usedcars/filter',filter); 
    }

   addCustomer(obj:Customer):Observable<Customer>{
    return this.http.post<Customer>('http://localhost:8083/auth/customer/signup',obj)
   }

   uploadPan(formData:FormData,id:any){
    return this.http.post('http://localhost:8083/customer/panimage/upload/'+id,formData)
   }

   uploadDriverLicense(formData:FormData,id:any){
    return this.http.post('http://localhost:8083/customer/licensceimage/upload/'+id,formData)
   }

   getAllCars():Observable<UsedCar[]>{
    return this.http.get<UsedCar[]>('http://localhost:8083/Usedcars/getcarsdto')
   }

}
  