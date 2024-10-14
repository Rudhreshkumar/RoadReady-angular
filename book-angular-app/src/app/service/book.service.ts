import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  AddBook(obj:any):Observable<any>{
    return this.http.post('http://localhost:8081/book/addBook',obj)
  }

  getBookList(page:number,size:number):Observable<any>{
    return this.http.get('http://localhost:8081/book/all?page='+page+'&size='+size)
  }
  
  getCategory():Observable<any>{
  return this.http.get('http://localhost:8081/book/category');
  }

  getBookById(id:any):Observable<any>{
    return this.http.get('http://localhost:8081/book/getBookById/'+id)
  }

  updateBook(id:any,book:any):Observable<any>{
    return this.http.put('http://localhost:8081/book/updateBook/'+id,book)
  }

  delete(id:any):Observable<any>{
    return this.http.delete('http://localhost:8081/book/deleteBook/'+id); 
  }

}
