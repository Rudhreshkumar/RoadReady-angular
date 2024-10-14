import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UsedCar } from "../../model/usedCar.model";
import { Customer } from "../../model/customer.model";
import { CarImageModel } from "../../model/carImage.model";



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

    // getFilteredUsedCars(filter: Partial<UsedCar>):Observable<UsedCar[]>{
    //   return this.http.post<UsedCar[]>('http://localhost:8083/Usedcars/filter',filter); 
    // }

    private apUrl = 'http://localhost:8083/Usedcars';
    filterUsedCars(filter: UsedCar): Observable<UsedCar[]> {
      return this.http.post<UsedCar[]>(`${this.apUrl}/filter`, filter);
    }

   addCustomer(customer:any):Observable<any>{
    return this.http.post('http://localhost:8083/auth/customer/signup',customer)
   }

   private apiUrl = 'http://localhost:8083/customer';
   uploadPan(formData: FormData, customerId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/panimage/upload/${customerId}`, formData);
  }

   uploadDriverLicense(formData:FormData,id:any){
    return this.http.post('http://localhost:8083/customer/licensceimage/upload/'+id,formData)
   }

   getAllCars():Observable<UsedCar[]>{
    return this.http.get<UsedCar[]>('http://localhost:8083/Usedcars/getcarsdto')
   }

   getCarImagesByUsedCarId(usedCarId:number):Observable<CarImageModel[]>{
    return this.http.get<CarImageModel[]>('http://localhost:8083/carImage/fetch/'+usedCarId)
   }

   getWishlistApi: string='http://localhost:8083/customer/wishlist/view';

   getWishlisted():Observable<UsedCar[]>{
    return this.http.get<UsedCar[]>(this.getWishlistApi,{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

//   filterUsedCars(filter: any): Observable<UsedCar[]> {
//     return this.http.post<UsedCar[]>('http://localhost:8083/Usedcars/filter/'+filter);
// }

removeWishlistApi: string;

deleteFromWishlist(usedCarId:number): Observable<any> {
  this.removeWishlistApi ='http://localhost:8083/customer/wishlist/delete/'+usedCarId;
  return this.http.delete(this.removeWishlistApi,{
    headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
  });
}


 addPurchase(usedCarId:number,purchaseData:any):Observable<any>{
  const purchaseApi: string = 'http://localhost:8083/purchase/add/' + usedCarId;
  return this.http.post(purchaseApi, purchaseData, {
    headers: new HttpHeaders().set('Authorization','Bearer ' + localStorage.getItem('token'))
  });
}

getPurchaseApi:string='http://localhost:8083/purchase/getpurchases';
getPurchase():Observable<any>{
  return this.http.get(this.getPurchaseApi,{
    headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
  });   
  }

  updateCustomerProfile(updatedCustomer: any): Observable<any> {
    return this.http.put('http://localhost:8083/customer/update', updatedCustomer, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

getCustomer():Observable<any>{
  return this.http.get('http://localhost:8083/customer/getCustomer',
    {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
     });
  }
}

  