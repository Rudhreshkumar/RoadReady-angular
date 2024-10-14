import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CarImageModel } from '../../model/carImage.model';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  brandId: any;

  constructor(private http: HttpClient) { }


  sellersignup(seller:any):Observable<any>{
    return this.http.post('http://localhost:8083/auth/seller/signup',seller,
      {

      }
    )
  }
  getseller():Observable<any>{
    return this.http.get('http://localhost:8083/seller/profile',
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
      });
  }
  updateSellerProfile(updatedSeller: any): Observable<any> {
    return this.http.put('http://localhost:8083/seller/updateseller', updatedSeller, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }
  

  postMembershipType(obj:any):Observable<any>{
    return this.http.post('http://localhost:8083/seller/addmembership',obj,
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
      }
    )
  
  }

  getMembershipType():Observable<any>{
    return this.http.get('http://localhost:8083/seller/membershipType')

  }

  postBrand(obj:any):Observable<any>{
    return this.http.post('http://localhost:8083/brands/add',obj,
    {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    }
  )
  
  }

  postbooking(usedCarId:any,obj:any):Observable<any>{
    return this.http.post(`http://localhost:8083/inspections/book/${usedCarId}`,obj,
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

      }
    )
  }
  getBookingByCarId(usedCarId: number): Observable<any> {
    return this.http.get(`http://localhost:8083/inspections/bookings/${usedCarId}`, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  getBrands(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8083/brands/getbrands/all', {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }


  postModel(brandId: any, obj: any):Observable<any>{
    return this.http.post(`http://localhost:8083/models/add/${brandId}`,obj,
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

      }
    )
  }

  getModels(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8083/models/getmodels', {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }


  postUsedcar(modelId: any, obj: any):Observable<any>{
    return this.http.post(`http://localhost:8083/Usedcars/add/${modelId}`,obj,
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

      }
    )
  }

  uploadCarImage(carId: number, formData: FormData) {
    return this.http.post(`http://localhost:8083/Usedcars/image/upload/${carId}`, formData);
  }

  getsellercar():Observable<any[]>{
    return this.http.get<any[]>('http://localhost:8083/Usedcars/getUsedCarsBySeller',{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

    })
  }
  
  getusedcarid(id:any):Observable<any>{
    return this.http.get('http://localhost:8083/Usedcars/'+id,
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

      }
    )
  }


  getCarDetailsWithMembership(carId: number): Observable<any> {
    return this.http.get(`http://localhost:8083/Usedcars/pricemember/${carId}`, 
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
      }
    );
  }
  getfueltype():Observable<any>{
    return this.http.get('http://localhost:8083/Usedcars/fueltype');
  }
  gettransmissiontype():Observable<any>{
    return this.http.get('http://localhost:8083/Usedcars/transmissiontype');
  }

   deletecar(id:number):Observable<any>{
    return this.http.delete(`http://localhost:8083/Usedcars/delete/${id}`,
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

      }
    )
   }

   updateCar(id: number, carDetails: any): Observable<any> {
    return this.http.put(`http://localhost:8083/Usedcars/edit/${id}`, carDetails,
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

      }
    )
}
calculateFinalPrice(carId: number): Observable<any> {
  return this.http.put(`http://localhost:8083/Usedcars/calculateFinalPrice/${carId}`, {}, {
    headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token')),
    responseType: 'text'
  });
}

getCarImagesByUsedCarId(usedCarId:number):Observable<CarImageModel[]>{
  return this.http.get<CarImageModel[]>('http://localhost:8083/carImage/fetch/'+usedCarId)
 }

  

}
