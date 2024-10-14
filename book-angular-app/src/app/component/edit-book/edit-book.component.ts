import { Component, OnInit } from '@angular/core';
import { Book } from '../../model/book/book.module';
import { BookService } from '../../service/book.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-edit-book',
  standalone: true,
  imports: [NgFor,NgIf,FormsModule,NavbarComponent,RouterLink],
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.css'
})
export class EditBookComponent implements OnInit {

  title: string = '';
  category: string = '';
  price: number = 0; 
  description: string = '';
  qty: number = 0; 
  categories: string[] = ['FICTION', 'SCIENCE', 'SPACE'];
  successMsg: string | undefined = ''; // Make sure these are declared
  errorMsg: string | undefined = '';
  show: boolean = false;
  id: any;

  constructor(private bookService: BookService,private actRoute: ActivatedRoute,private router: Router){
    this.id= this.actRoute.snapshot.paramMap.get('id');
  }
 
  ngOnInit(): void {
   this.bookService.getBookById(this.id).subscribe({
    next:(data)=>{
      this.title=data.title;
      this.category=data.category;
      this.price=data.price;
      this.description=data.description;
      this.qty=data.qty;
    },
    error: (err) => {
      console.error('Error loading book details:', err);
      this.errorMsg = 'Failed to load book details';
    }
   });
  }
    resetMsg() {
    this.successMsg = '';
    this.errorMsg = '';
    this.show = false;
  }
  onClick() {
    this.bookService.updateBook(this.id,{
      "id": this.id,
      "title": this.title,
      "category": this.category,
      "price": this.price,
      "description": this.description,
      "qty": this.qty
    }).subscribe({
      next: (data) => {
        this.successMsg = 'Book edited';
        this.show = true; 
        this.errorMsg = undefined;
      },
      error: (err) => {
        this.successMsg = undefined;
        this.show = false;
        console.log(err);
        if (err.status === 305) {
          this.errorMsg = err.error;
        } else {
          this.router.navigateByUrl("/book");
        }
      }
    });
  } 
  onShowClick() {
    this.router.navigateByUrl("/book");
  }
 }

