import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  brandId: any;

  constructor(private http: HttpClient) { }

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
  
  

   

  

}
