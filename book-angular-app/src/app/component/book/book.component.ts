import { Component } from '@angular/core';
import { BookService } from '../../service/book.service';
import { Router, RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { Book } from '../../model/book/book.module';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [NgFor,NavbarComponent],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {

  book: Book[] = [];
  totalPages: number = 0;
  numArry: number[] = [];
  counter: number = 0;
  page: number=0;
  size: number = 10;
  last: boolean = false;
  first: boolean = true;
  successMsg: string | undefined = '';

  constructor(private bookService:BookService,private router:Router){
    this.fetchData();   
    console.log(this.numArry)
  }
  fetchData(){
    this.bookService.getBookList(this.page,this.size).subscribe({
      next:(data)=>{
        console.log('Received data:', data);
        this.book = data.content;
        this.totalPages = data.totalPages;
        this.last = data.last;
        this.first = data.first; 
        
        if (this.counter === 0) {
            for (let i = 0; i < this.totalPages; i++) {
                this.numArry.push(i); 
            }
        }
        this.counter++;
      },
      error: (err) => {
        console.log('Error fetching data:', err);
      }
    });
  }

  onPageNumberClick(n: number) {
    this.page = n;
    this.fetchData();
  }

  onNext() {
    this.page = this.page + 1; 
    this.fetchData();
  }
  onPrev() {
    this.page = this.page - 1;
    this.fetchData();
  }

  onEdit(id: any) {
    this.router.navigate(['/editBook', id]); 
  }

    onDelete(id:any){
      console.log("inside delete")
      this.bookService.delete(id).subscribe({
        next:(data)=>{
          this.successMsg=data.msg;
          this.book = this.book.filter(b => b.id !== id);
        },
        error:(err)=>{
          console.log(err);
        }
      })
    }

  onViewDetails(id: any): void {
    this.router.navigate(['/description', id]);
  }
}

